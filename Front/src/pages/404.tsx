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
                src="https://otvet.imgsmail.ru/download/264916046_536e16e42836cbad2eae961f4159e115_800.png"
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
