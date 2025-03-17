import axios from 'axios'
import useSWR, { mutate } from 'swr'
export { mutate } from 'swr'

const $host = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
})

$host.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers['authorization'] = `Bearer ${token}`
    }
    return config
})

// Add logic to see authentification error
// $host.interceptors.response.use(
//     (response) => {
//         return response
//     },
//     (error) => {
//         if (
//             error.config.url !== 'user/auth' &&
//             error.response &&
//             error.response.data &&
//             error.response.data.message === 'Не авторизован'
//         ) {
//             window.location.replace('/login')
//         }

//         return Promise.reject(error)
//     },
// )

async function fetcher(url: string) {
    const { data } = await $host.get(`${url}`)
    return data
}

export function useApi<T>(url: string, options?: any) {
    // console.log('url--', url)

    const { data, error, mutate, isLoading } = useSWR<T>(url, fetcher, options)

    return {
        loading: !error && !data,
        data,
        isLoading,
        error,
        mutate,
    }
}

// export function useApi<T>(url: string, options?: any) {
//     const { data, error, mutate, isLoading } = useSWR<T>(url, fetcher, options)
//     return {
//         loading: !error && !data,
//         data,
//         isLoading,
//         error,
//         mutate,
//     }
// }

export const clearSWRCache = () => mutate(() => true, undefined, { revalidate: false })

export default $host
