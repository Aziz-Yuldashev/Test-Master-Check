import { Router } from 'express'
import Controller from '../controllers/user.controller.js'
import errorHandler from '../utils/error/errorHandler.js'
const router = Router()

router.post('/', errorHandler(Controller.registration))
router.post('/login', errorHandler(Controller.login))
router.get('/get', errorHandler(Controller.getUser))

export default router
