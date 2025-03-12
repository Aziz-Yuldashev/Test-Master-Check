export type UserTypes = {
    _id?: string
    confirm?: string
    email: string
    name: string
    surname: string
    password: string
    forms: string[]
    phone: string
    isActive: boolean
    telegramId: string
}

export type createUserType = Omit<UserTypes, '_id'>
