import pool from '../db/db.js'

// Simple in-memory cache for the public menu
let menuCache = null
let cacheTime = null
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

function isCacheValid() {
  return menuCache && cacheTime && (Date.now() - cacheTime < CACHE_TTL)
}

function clearCache() {
  menuCache = null
  cacheTime = null
}

// PUBLIC — GET /api/menu
export async function getPublicMenu(req, res) {
  try {
    if (isCacheValid()) {
      return res.json(menuCache)
    }

    const [rows] = await pool.execute(
      'SELECT id, section, category, category_order, name, description, price, sort_order FROM menu_items WHERE available = TRUE ORDER BY section, category_order, category, sort_order, id',
    )

    menuCache = rows
    cacheTime = Date.now()

    res.json(rows)
  } catch (err) {
    console.error('getPublicMenu error:', err)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

// ADMIN — GET /api/admin/menu (includes unavailable items)
export async function getAllMenuItems(req, res) {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM menu_items ORDER BY section, category_order, category, sort_order, id'
    )
    res.json(rows)
  } catch (err) {
    console.error('getAllMenuItems error:', err)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

// ADMIN — POST /api/admin/menu
export async function createMenuItem(req, res) {
  const {
    section,
    category,
    category_order,
    name,
    description,
    price,
    available,
    sort_order
  } = req.body

  if (!section || !category || !name || price === undefined) {
    return res.status(400).json({
      message: 'section, category, name and price are required'
    })
  }

  try {
    const [result] = await pool.execute(
      'INSERT INTO menu_items (section, category, category_order, name, description, price, available, sort_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [section, category, category_order ?? 0, name, description || null, price, available ?? true, sort_order ?? 0]
    )

    clearCache()
    res.status(201).json({
      id: result.insertId,
      message: 'Item created'
    })
  } catch (err) {
    console.error('createMenuItem error:', err)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

// ADMIN — PUT /api/admin/menu/:id
export async function updateMenuItem(req, res) {
  const {
    id
  } = req.params
  const {
    section,
    category,
    category_order,
    name,
    description,
    price,
    available,
    sort_order
  } = req.body

  try {
    const [result] = await pool.execute(
      'UPDATE menu_items SET section=?, category=?, category_order=?, name=?, description=?, price=?, available=?, sort_order=? WHERE id=?',
      [section, category, category_order ?? 0, name, description || null, price, available, sort_order ?? 0, id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Item not found'
      })
    }

    clearCache()
    res.json({
      message: 'Item updated'
    })
  } catch (err) {
    console.error('updateMenuItem error:', err)
    res.status(500).json({
      message: 'Server error'
    })
  }
}

// ADMIN — DELETE /api/admin/menu/:id
export async function deleteMenuItem(req, res) {
  const {
    id
  } = req.params

  try {
    const [result] = await pool.execute(
      'DELETE FROM menu_items WHERE id = ?',
      [id]
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Item not found'
      })
    }

    clearCache()
    res.json({
      message: 'Item deleted'
    })
  } catch (err) {
    console.error('deleteMenuItem error:', err)
    res.status(500).json({
      message: 'Server error'
    })
  }
}