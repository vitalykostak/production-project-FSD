import { useEffect } from 'react'

export const useInitialEffect = (effect: () => void) => {
    useEffect(() => {
        if (EXECUTION_ENVIRONMENT === 'app') {
            effect()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
