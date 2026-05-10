// Set or rotate the admin password.
// Usage:
//   node db/set-admin-password.js <username> <newPassword>
// Example:
//   node db/set-admin-password.js 22admin "MyN3wP@ssword!"
import 'dotenv/config'
import bcrypt from 'bcrypt'
import mysql from 'mysql2/promise'

const [, , username, password] = process.argv

if (!username || !password) {
  console.error('Usage: node db/set-admin-password.js <username> <newPassword>')
  process.exit(1)
}
if (password.length < 12) {
  console.error('Password must be at least 12 characters.')
  process.exit(1)
}

const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
})

const hash = await bcrypt.hash(password, 12)
const [result] = await conn.execute(
  `INSERT INTO admin_users (username, password_hash) VALUES (?, ?)
   ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
  [username, hash],
)

console.log(`✓ Password set for "${username}" (${result.affectedRows === 1 ? 'created' : 'updated'})`)
await conn.end()
