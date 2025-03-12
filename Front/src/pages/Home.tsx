import { VStack, Heading, Button, HStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '@/utils/constants/routes.consts'

/**
 * Simply Plug page if route doesnt exist
 */
export default function Home() {
    const navigate = useNavigate()
    return (
        <VStack alignItems="center" justifyContent="center" height="100vh">
            <Heading>Главная страница</Heading>
            <HStack>
                <Button onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                <Button onClick={() => navigate(REGISTER_ROUTE)}>Register</Button>
            </HStack>
        </VStack>
    )
}
