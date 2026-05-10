import { Router } from 'express'
import { requireAuth } from '../middleware/authMiddleware.js'
import {
  validateMenuItem,
  validateIdParam,
} from '../middleware/validate.js'
import {
  getAllMenuItems,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from '../controllers/menuController.js'

const router = Router()

router.get('/menu', requireAuth, getAllMenuItems)
router.post('/menu', requireAuth, validateMenuItem, createMenuItem)
router.put('/menu/:id', requireAuth, validateIdParam, validateMenuItem, updateMenuItem)
router.delete('/menu/:id', requireAuth, validateIdParam, deleteMenuItem)

export default router
