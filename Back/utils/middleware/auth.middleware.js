import jwt from 'jsonwebtoken'

export async function checkAuth(req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
        return
    }
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(401).json({ message: 'Не авторизован' })
        }

        const decoded = jwt.verify(token, process.env['SECRET_KEY'] ?? '')

        const currentTimestamp = Math.floor(Date.now() / 1000)

        if (decoded.exp && decoded.exp < currentTimestamp) {
            return res.status(401).json({ message: 'Токен истек' })
        }

        req.user = decoded

        next()
        return
    } catch (e) {
        return res.status(401).json({ message: 'Не авторизован' })
    }
}
