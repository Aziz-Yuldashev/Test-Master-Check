import { VStack, Image, Heading, Link as ChakraLink } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MAIN_ROUTE } from '@/utils/constants/routes.consts'

/**
 * Simply Plug page if route doesnt exist
 */
export default function NotFound() {
    return (
        <VStack alignItems="center" justifyContent="center" height="100vh">
            <Image
                src="https://static.tildacdn.com/tild3863-3337-4635-b366-333961366534/logo.svg"
                alt="Logo"
                height="30vh"
                width="30vh"
                mb="4"
            />
            <Heading>Страница не найдена</Heading>
            <ChakraLink fontSize="22" color="blue.500" cursor="pointer">
                <Link to={MAIN_ROUTE}>Вернитесь на главную страницу</Link>
            </ChakraLink>
        </VStack>
    )
}
