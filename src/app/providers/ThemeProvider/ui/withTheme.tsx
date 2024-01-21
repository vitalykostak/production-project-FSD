import { type FC } from 'react'

import { useUserJsonSettings } from '@/entities/User'

import ThemeProvider from './ThemeProvider'

const withTheme = <P extends Record<string, any>>(Component: FC<P>): FC<P> => {
    return (hocProps: P) => {
        const settings = useUserJsonSettings()

        return (
            <ThemeProvider initialTheme={settings.uiTheme}>
                <Component {...hocProps} />
            </ThemeProvider>
        )
    }
}

export default withTheme
