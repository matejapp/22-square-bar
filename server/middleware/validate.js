// Lightweight input validators for menu admin endpoints.
// Avoids pulling in express-validator just for these few rules.

const ALLOWED_SECTIONS = new Set(['jelovnik', 'fastfood', 'pice'])

export function validateMenuItem(req, res, next) {
  const {
    section,
    category,
    category_order,
    name,
    description,
    price,
    available,
    sort_order,
  } = req.body

  const errors = []

  if (!ALLOWED_SECTIONS.has(section)) {
    errors.push(`section must be one of: ${[...ALLOWED_SECTIONS].join(', ')}`)
  }
  if (typeof category !== 'string' || !category.trim() || category.length > 100) {
    errors.push('category is required, max 100 chars')
  }
  if (typeof name !== 'string' || !name.trim() || name.length > 255) {
    errors.push('name is required, max 255 chars')
  }
  if (description != null && (typeof description !== 'string' || description.length > 2000)) {
    errors.push('description must be a string, max 2000 chars')
  }
  const priceNum = Number(price)
  if (!Number.isFinite(priceNum) || priceNum < 0 || priceNum > 99_999.99) {
    errors.push('price must be a number between 0 and 99999.99')
  }
  if (category_order != null && !Number.isInteger(Number(category_order))) {
    errors.push('category_order must be an integer')
  }
  if (sort_order != null && !Number.isInteger(Number(sort_order))) {
    errors.push('sort_order must be an integer')
  }
  if (available != null && typeof available !== 'boolean') {
    errors.push('available must be a boolean')
  }

  if (errors.length) {
    return res.status(400).json({ message: 'Validation failed', errors })
  }
  next()
}

export function validateIdParam(req, res, next) {
  const id = Number(req.params.id)
  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ message: 'Invalid id' })
  }
  next()
}

export function validateLogin(req, res, next) {
  const { username, password } = req.body
  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    username.length === 0 ||
    username.length > 100 ||
    password.length === 0 ||
    password.length > 200
  ) {
    return res.status(400).json({ message: 'Invalid credentials format' })
  }
  next()
}
