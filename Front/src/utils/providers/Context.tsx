import { createContext, useContext, useState, ReactNode } from 'react'

interface AppContextValues {
    auth: boolean
    setAuth: (auth: boolean) => void
    isLoading: boolean
    setIsLoading: (auth: boolean) => void
}

const AppContext = createContext<AppContextValues | undefined>(undefined)

export function ContextProvider({ children }: { children: ReactNode }) {
    const [auth, setAuth] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    return (
        <AppContext.Provider value={{ auth, setAuth, setIsLoading, isLoading }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppContextProvider')
    }
    return context
}
