import { memo } from 'react'

import AppSvg from '@/shared/assets/icons/app-image.svg'
import { classNames } from '@/shared/lib/classNames/classNames'

import HStack from '../Stack/HStack/HStack'

import styles from './AppLogo.module.scss'

interface AppLogoProps {
    className?: string
}

const AppLogo = memo(({ className }: AppLogoProps) => {
    return (
        <HStack max justify="center" className={classNames(styles.appLogoWrapper, {}, [className])}>
            <div className={styles.gradientBig} />
            <div className={styles.gradientSmall} />
            <AppSvg className={styles.appLogo} />
        </HStack>
    )
})

export default AppLogo
