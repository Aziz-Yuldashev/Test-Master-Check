import { useState, forwardRef, ForwardedRef } from 'react'
import { InputGroup, Input, InputRightElement, IconButton } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

/**
 * Password input with show/hide password button
 */
const PasswordInput = forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
    const [showPassword, setShowPassword] = useState(false)

    const handlePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <InputGroup size="sm">
            <Input
                placeholder="password"
                ref={ref}
                type={showPassword ? 'text' : 'password'}
                {...props}
                border="2px solid #3498db"
                background="transparent"
                borderRadius="25px"
                padding="23px 15px"
                textAlign="center"
            />
            <InputRightElement>
                <IconButton
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={handlePasswordVisibility}
                    variant="ghost"
                    size="sm"
                    top="8px"
                    right="14px"
                    aria-label={''}
                    color="#fff"
                />
            </InputRightElement>
        </InputGroup>
    )
})

export default PasswordInput
