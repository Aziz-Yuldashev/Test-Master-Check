import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import classes from './index.module.css'

export default function Login() {
    const handleLogin: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const { email, password } = event.target as HTMLFormElement

        console.log(email.value, password.value)
    }

    return (
        <main className={classes.login}>
            <form className={classes.form} onSubmit={handleLogin}>
                <legend>Вход в аккаунт</legend>

                <fieldset>
                    <FormControl>
                        <FormLabel htmlFor="loginEmail">Email</FormLabel>
                        <Input
                            required
                            name="email"
                            type="email"
                            id="loginEmail"
                            autoComplete="email"
                            placeholder="Введите email"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="loginPassword">Пароль</FormLabel>
                        <Input
                            required
                            name="password"
                            type="password"
                            id="loginPassword"
                            autoComplete="password"
                            placeholder="Введите пароль"
                        />
                    </FormControl>
                </fieldset>

                <Button type="submit" colorScheme="blue" isLoading={status === 'loading'}>
                    Войти
                </Button>
            </form>
        </main>
    )
}
