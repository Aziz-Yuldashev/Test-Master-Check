import jwt from 'jsonwebtoken'

/**
 * !Function for creating jwt token
 * @param {Object} userData
 * @returns {string} JWT token
 */
const generateJwt = (userData) => {
    return jwt.sign(userData, process.env['SECRET_KEY'] ?? '', {
        expiresIn: '24h',
    })
}

export default generateJwt
