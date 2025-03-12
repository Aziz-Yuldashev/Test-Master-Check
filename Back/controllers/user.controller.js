import { UsersModel } from '../models/index.js'
import ApiError from '../utils/error/ApiError.js'
import jwt from 'jsonwebtoken'

class UserController {
    async registration(req, res) {
        const { email, password, confirm, name, ...userData } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: 'Incorrect email or password' })
        }

        if (password !== confirm) {
            return res.status(400).json({ message: 'Password mismatch' })
        }

        if (password.length < 8) {
            return res.status(400).json({ message: 'Password must be longer than 8 characters' })
        }

        const data = await UsersModel.create({
            email,
            password,
            name,
            ...userData,
        })

        return res.status(200).json({ data, message: 'User successfully created' })
    }

    async login(req, res, next) {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(405).json({ message: 'Please provide email and password' })
        }

        const user = await UsersModel.findOne({
            where: { email: email },
            attributes: ['id', 'email', 'password', 'name', 'surname'],
        })

        if (!user) {
            return next(ApiError.NotAllowed(`User is not found`))
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email,
                name: user.name,
                surname: user.surname,
            },
            process.env.SECRET_KEY,
            { expiresIn: process.env.JWT_EXPIRES_IN },
        )

        if (!(await user.correctPassword(password, user.password)) || !user) {
            return res.status(405).json({ message: 'Incorrect email or password' })
        }

        const loggedInUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
        }

        res.status(200).json({
            status: 'success',
            token: token,
            user: loggedInUser,
        })
    }
}

export default new UserController()
