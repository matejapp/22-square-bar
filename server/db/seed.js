// Initial schema setup. Run once via SSH:
//   node /home/<username>/server/db/seed.js
//
// Creates tables and indexes. Does NOT seed an admin password —
// use `node db/set-admin-password.js <username> <password>` for that.
import 'dotenv/config'
import mysql from 'mysql2/promise'

const conn = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
})

await conn.execute(`
  CREATE TABLE IF NOT EXISTS menu_items (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    section     VARCHAR(50)  NOT NULL COMMENT 'jelovnik | fastfood | pice',
    category    VARCHAR(100) NOT NULL,
    category_order INT NOT NULL DEFAULT 0,
    name        VARCHAR(255) NOT NULL,
    description TEXT,
    price       DECIMAL(10,2) NOT NULL,
    available   BOOLEAN DEFAULT TRUE,
    sort_order  INT DEFAULT 0,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_public (section, available, category_order, sort_order)
  )
`)

await conn.execute(`
  CREATE TABLE IF NOT EXISTS admin_users (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
  )
`)

console.log('✓ Tables created')
console.log('Next step: set an admin password ->')
console.log('   node db/set-admin-password.js <username> <password>')

await conn.end()
