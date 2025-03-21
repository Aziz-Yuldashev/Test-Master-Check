import { Router } from 'express'
import UserRouter from './user.router.js'

const router = Router()

router.use('/user', UserRouter)

export default router
