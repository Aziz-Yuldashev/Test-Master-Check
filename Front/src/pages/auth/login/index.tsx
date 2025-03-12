import { FormControl, Input, Button, HStack, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { REGISTER_ROUTE, MAIN_ROUTE } from '@/utils/constants/routes.consts'
import { useForm, SubmitHandler } from 'react-hook-form'
import { loginUser } from '@/utils/services/user.service'
import { Helmet } from 'react-helmet'
import { AxiosError } from 'axios'
import PasswordInput from '@/components/shared/PasswordInput'
import classes from './index.module.css'

type LoginFormValues = {
    email: string
    password: string
}

export default function Login() {
    const navigate = useNavigate()
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<LoginFormValues>()

    const handleLogin: SubmitHandler<LoginFormValues> = async (data) => {
        const { email, password } = data
        try {
            const response = await loginUser(email, password)
            localStorage.setItem('authToken', response.token)
            localStorage.setItem('user', JSON.stringify(response.user))

            toast({
                title: 'Успешный вход!',
                description: 'Добро пожаловать!',
                status: 'success',
                duration: 1500,
                isClosable: true,
            })

            setTimeout(() => {
                navigate(MAIN_ROUTE)
            }, 1500)
        } catch (err) {
            const error = err as AxiosError<{ message?: string }>
            toast({
                title: 'Ошибка входа',
                description: error.response?.data.message || 'Неверный email или пароль',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            setError('root', { message: error.response?.data.message })
            console.log('err.response.data.message', error.response?.data.message)
        }
    }

    const handleRegister = () => {
        navigate(REGISTER_ROUTE)
    }

    return (
        <main className={classes.login}>
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1"
                />
            </Helmet>
            <form className={classes.form}>
                <legend>Login</legend>

                <fieldset>
                    <FormControl isInvalid={!!errors.email}>
                        <Input
                            {...register('email', {
                                required: 'This field is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Invalid email address',
                                },
                            })}
                            name="email"
                            type="email"
                            id="loginEmail"
                            autoComplete="email"
                            placeholder=" E-mail"
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                            textAlign="center"
                        />
                    </FormControl>

                    <FormControl isInvalid={!!errors.password}>
                        <PasswordInput
                            {...register('password', {
                                required: 'This field is required',
                            })}
                        />
                    </FormControl>
                </fieldset>
                <HStack justifyContent="center" gap="1.8rem">
                    <Button
                        w="100%"
                        type="submit"
                        colorScheme="blue"
                        onClick={handleRegister}
                        isLoading={status === 'loading'}
                        border="2px solid #3498db"
                        background="transparent"
                        borderRadius="25px"
                        padding="23px 15px"
                    >
                        Register
                    </Button>
                    <Button
                        onClick={handleSubmit(handleLogin)}
                        w="100%"
                        type="submit"
                        colorScheme="blue"
                        isLoading={status === 'loading'}
                        border="2px solid #3498db"
                        background="transparent"
                        borderRadius="25px"
                        padding="23px 15px"
                    >
                        Sign In
                    </Button>
                </HStack>
            </form>
        </main>
    )
}
