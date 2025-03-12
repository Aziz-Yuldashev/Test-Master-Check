import { VStack, Heading } from '@chakra-ui/react'

/**
 * Simply Plug page if route doesnt exist
 */
export default function Home() {
    return (
        <VStack alignItems="center" justifyContent="center" height="100vh">
            <Heading>Главная страница</Heading>
        </VStack>
    )
}
