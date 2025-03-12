import { UsersModel } from '../models/index.js'
import ApiError from '../utils/error/ApiError.js'
import jwt from 'jsonwebtoken'

class UserController {
    async registration(req, res) {
        // const { companyId } = req.user
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
        // Get the email and password from the request body
        const { email, password } = req.body

        // Check if both email and password are provided
        if (!email || !password) {
            // return next(ApiError.NotAllowed(`Please provide email and password`))
            return res.status(405).json({ message: 'Please provide email and password' })
        }

        // Find the user with the provided email
        const user = await UsersModel.findOne({
            where: { email: email },
            attributes: ['id', 'email', 'password', 'name', 'surname'],
        })

        // If no user is found, throw an error
        if (!user) {
            return next(ApiError.NotAllowed(`User is not found`))
        }

        // Generate a token for the user
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

        // Check if the provided password is correct
        if (!(await user.correctPassword(password, user.password)) || !user) {
            return next(ApiError.NotAllowed(`Incorrect email or password`))
        }

        // Create an object with the user's relevant information
        const loggedInUser = {
            id: user.id,
            email: user.email,
            name: user.name,
            surname: user.surname,
        }

        // Send a success response with the token and the user's information
        res.status(200).json({
            status: 'success',
            token: token,
            user: loggedInUser,
        })
    }
}

export default new UserController()
