class ApiError extends Error {
    constructor(status, message) {
        super()
        this.status = status
        this.message = { message }
    }

    static badRequest(message) {
        console.log(message)
        return new ApiError(400, message)
    }

    static NotAllowed(message) {
        console.log(message)
        return new ApiError(405, message)
    }

    static Locked(message) {
        return new ApiError(423, message)
    }
}

export default ApiError
