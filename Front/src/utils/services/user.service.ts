import { UserTypes } from '../types/user.types'
import $host from './axios'

export const createUser = async (formData: UserTypes) => {
    const { data } = await $host.post('user', JSON.stringify(formData), {
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return data
}

export const loginUser = async (email: string, password: string) => {
    const { data } = await $host.post('user/login', { email, password })
    return data
}
