import { VStack, Heading, Button, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/utils/constants/routes.consts'
import { mutate, useApi } from '@/utils/services'
import { DataUseres } from '@/utils/types/user.types'
import { useEffect } from 'react'

/**
 * Simply Plug page if route doesnt exist
 */
export default function Home() {
    const { data: users } = useApi<DataUseres>('user/get')
    console.log('data-', users)
    const navigate = useNavigate()

    useEffect(() => {
        mutate('user/get')
    }, [])

    return (
        <VStack alignItems="center" justifyContent="center" height="100vh">
            <Heading>Главная страница</Heading>
            <HStack>
                <Button onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                <Button onClick={() => navigate(REGISTER_ROUTE)}>Register</Button>
            </HStack>
            <Heading>Пользователь</Heading>
            {users?.data?.map((item) => (
                <>
                    <HStack w="100%" justifyContent="space-around">
                        <Heading>Name: {item.name} </Heading>
                        <Heading>Surname: {item.surname} </Heading>
                    </HStack>
                </>
            ))}
        </VStack>
    )
}
