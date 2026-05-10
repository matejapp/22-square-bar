import mysql from 'mysql2/promise'

// Connection pool — reuses connections instead of creating a new one per request.
// Pool size sized for cPanel shared hosting (max_user_connections is typically 25).
// With the in-memory menu cache, even 10 is rarely saturated.
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_POOL_SIZE) || 10,
  queueLimit: 0,
  // Reasonable timeouts so a stalled query doesn't hold a connection forever
  connectTimeout: 10_000,
})

export default pool
