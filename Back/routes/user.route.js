import { Router } from 'express'
import Controller from '../controllers/user.controller'
import errorHandler from '../utils/error/errorHandler'
import { checkAuth } from '../middleware/auth.middleware'
const router = Router()

router.post('/login', errorHandler(Controller.login))
router.get('/auth', checkAuth, errorHandler(Controller.check))
router.get('/', errorHandler(Controller.getAll))

router.use(checkAdmin)
router.put('/:id', errorHandler(Controller.updateUser))
router.post('/registration', errorHandler(Controller.registration))
export default router
