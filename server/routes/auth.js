import { Router } from 'express'
import { rateLimit } from 'express-rate-limit'
import { login } from '../controllers/authController.js'
import { validateLogin } from '../middleware/validate.js'

const router = Router()

// Stricter limiter on login to slow brute-force.
// 10 attempts / 15 min per IP.
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many login attempts. Try again later.' },
})

router.post('/login', loginLimiter, validateLogin, login)

export default router
