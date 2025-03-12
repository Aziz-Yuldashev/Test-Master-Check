import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { ContextProvider } from './utils/providers/Context.tsx'
import { ToastProvider } from './utils/providers/ToastProvider.tsx'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider>
        <ToastProvider>
            <ContextProvider>
                <BrowserRouter>
                    <SWRConfig
                        value={{
                            revalidateIfStale: false,
                            shouldRetryOnError: false,
                            revalidateOnFocus: false,
                        }}
                    >
                        <App />
                    </SWRConfig>
                </BrowserRouter>
            </ContextProvider>
        </ToastProvider>
    </ChakraProvider>,
)
