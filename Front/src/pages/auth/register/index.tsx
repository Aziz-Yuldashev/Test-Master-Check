import { FormControl, Input, Button, HStack, FormErrorMessage, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '@/utils/constants/routes.consts'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { UserTypes } from '@/utils/types/user.types'
import { createUser } from '@/utils/services/user.service'
import { AxiosError } from 'axios'
import PasswordInput from '@/components/shared/PasswordInput'
import classes from './index.module.css'

export default function Register() {
    const methods = useForm<UserTypes>()
    const toast = useToast()
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = methods
    const navigate = useNavigate()

    const handleRegister: SubmitHandler<UserTypes> = async (data) => {
        try {
            await createUser({
                email: data.email,
                name: data.name,
                surname: data.surname,
                password: data.password,
                confirm: data.confirm,
            })
            toast({
                title: 'Успешная регистрация!',
                description: 'Вы будете перенаправлены на страницу входа',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })

            setTimeout(() => {
                navigate(LOGIN_ROUTE)
            }, 2000)
        } catch (err) {
            const error = err as AxiosError<{ message?: string }>
            toast({
                title: 'Ошибка регистрации',
                description: error.response?.data.message || 'Что-то пошло не так',
                status: 'error',
                duration: 5000,
                isClosable: true,
            })
            setError('root', { message: error.response?.data.message })
            console.log('err.response.data.message', error.response?.data.message)
        }
    }

    return (
        <main className={classes.register}>
            <FormProvider {...methods}>
                <form className={classes.form}>
                    <legend>Register</legend>

                    <FormControl size="sm" id="name" isInvalid={!!errors.name}>
                        <Input
                            {...register('name', {
                                required: 'This field is required',
                            })}
                            type="text"
                            id="name"
                            placeholder=" Enter your name"
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                            textAlign="center"
                        />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl size="sm" id="surname" isInvalid={!!errors.name}>
                        <Input
                            {...register('surname', {
                                required: 'This field is required',
                            })}
                            type="text"
                            id="name"
                            placeholder=" Enter your surname"
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                            textAlign="center"
                        />
                        <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl size="sm" id="email" isInvalid={!!errors.email}>
                        {/* <FormLabel htmlFor="loginEmail">Email</FormLabel> */}
                        <Input
                            {...register('email', {
                                required: 'This field is required',
                            })}
                            autoComplete="off"
                            name="email"
                            type="email"
                            id="registerEmail"
                            placeholder="Enter your e-mail adress"
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                            textAlign="center"
                        />
                    </FormControl>

                    <FormControl size="sm" id="password" isInvalid={!!errors.password}>
                        <PasswordInput
                            {...register('password', {
                                required: 'This field is required',
                                maxLength: {
                                    value: 100,
                                    message: 'Maximum length 100 characters',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Minimum length 8 characters',
                                },
                            })}
                        />
                        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
                    </FormControl>

                    <FormControl size="sm" id="confirm" isInvalid={!!errors.confirm}>
                        <PasswordInput
                            {...register('confirm', {
                                required: 'This field is required',
                                maxLength: {
                                    value: 100,
                                    message: 'Maximum length 100 characters',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Minimum length 8 characters',
                                },
                            })}
                        />
                        <FormErrorMessage>{errors.confirm?.message}</FormErrorMessage>
                    </FormControl>

                    <HStack justifyContent="center" gap="1.8rem">
                        <Button
                            w="100%"
                            colorScheme="blue"
                            onClick={() => navigate(LOGIN_ROUTE)}
                            isLoading={status === 'loading'}
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                        >
                            Back to Login
                        </Button>
                        <Button
                            onClick={handleSubmit(handleRegister)}
                            w="100%"
                            type="submit"
                            colorScheme="blue"
                            isLoading={status === 'loading'}
                            border="2px solid #3498db"
                            background="transparent"
                            borderRadius="25px"
                            padding="23px 15px"
                        >
                            Send
                        </Button>
                    </HStack>
                </form>
            </FormProvider>
        </main>
    )
}
