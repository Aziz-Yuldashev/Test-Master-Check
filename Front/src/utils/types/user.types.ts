export type UserTypes = {
    _id?: string
    email: string
    name: string
    surname: string
    password: string
    confirm: string
}

export type DataUseres = {
    data: UserTypes[]
    message: string
}

export type createUserType = Omit<UserTypes, '_id'>
