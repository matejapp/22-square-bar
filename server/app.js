// Entry point — must be named app.js for Phusion Passenger on cPanel
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'
import { join } from 'path'

import { validateEnv } from './utils/env.js'
import menuRoutes from './routes/menu.js'
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js'
import pool from './db/db.js'

validateEnv()

const app = express()
const PORT = process.env.PORT || 3000
const STATIC_PATH = process.env.STATIC_PATH

// Behind cPanel/Passenger reverse proxy — needed so rate-limit and req.ip
// see the real client IP instead of the proxy IP.
app.set('trust proxy', 1)

// ── CORS ───────────────────────────────────────────────────────────────────
// Comma-separated list in env, e.g. CORS_ORIGINS="https://example.com,https://www.example.com"
const allowedOrigins = (process.env.CORS_ORIGINS || process.env.CLIENT_URL || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

app.use(
  cors({
    origin(origin, cb) {
      // Allow same-origin / curl / server-to-server (no Origin header)
      if (!origin) return cb(null, true)
      if (allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return cb(null, true)
      }
      return cb(new Error('Not allowed by CORS'))
    },
    credentials: true,
    optionsSuccessStatus: 200,
  }),
)

// ── Security & performance middleware ──────────────────────────────────────
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com', 'data:'],
        imgSrc: ["'self'", 'data:', 'blob:', 'https:'],
        frameSrc: ["'self'", 'https://www.google.com'],
        connectSrc: ["'self'", ...allowedOrigins],
        objectSrc: ["'none'"],
      },
    },
    crossOriginEmbedderPolicy: false,
  }),
)
app.use(compression())
app.use(express.json({ limit: '10kb' }))

// Generic API limiter — 100 req / 15 min / IP
app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
  }),
)

// ── API Routes ─────────────────────────────────────────────────────────────
app.use('/api/menu', menuRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)

app.get('/api/health', async (_req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', db: 'ok' })
  } catch {
    res.status(503).json({ status: 'degraded', db: 'down' })
  }
})

// ── Serve React static files ───────────────────────────────────────────────
if (STATIC_PATH) {
  app.use(express.static(STATIC_PATH))
  app.get('*', (_req, res) => {
    res.sendFile(join(STATIC_PATH, 'index.html'))
  })
}

// Final error handler — catches CORS rejections and validator throws
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error('[error]', err.message)
  if (err.message?.includes('CORS')) {
    return res.status(403).json({ message: 'Origin not allowed' })
  }
  res.status(500).json({ message: 'Internal server error' })
})

// ── Start ──────────────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

// Graceful shutdown — close pool and HTTP server on SIGTERM/SIGINT
async function shutdown(signal) {
  console.log(`[${signal}] graceful shutdown`)
  server.close(() => console.log('http server closed'))
  try {
    await pool.end()
    console.log('db pool closed')
  } catch (e) {
    console.error('error closing db pool', e)
  }
  process.exit(0)
}
process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))

export default app
