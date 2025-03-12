export default function errorHandler(fn) {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            res.status(400).send({ message: err.message })
        })
    }
}
