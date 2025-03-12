import { UserTypes } from '../types/user.types'
import $host from './axios'

export const fetchUsers = async () => {
    const { data } = await $host.get('user')
    return data as UserTypes[]
}

export const createUser = async (data: UserTypes) => {
    const response = await $host.post('user', data)
    return response
}

export const updateUser = async (id: string, data: UserTypes) => {
    const response = await $host.patch(`user/${id}`, data)
    return response
}
