import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken"
import pool from '../db/db.js'

export async function login(req, res) {
    const {
        username,
        password
    } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            message: 'Username and password are required'
        });
    }
    try {
        const [rows] = await pool.execute('SELECT * FROM admin_users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }
        const user = rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid username or password'
            });
        }
        const token = jwt.sign({
            id: user.id,
            username: user.username
        }, process.env.JWT_SECRET, {
            expiresIn: '2h'
        });
        res.json({
            token
        });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            message: 'Internal server error'
        });
    }
}