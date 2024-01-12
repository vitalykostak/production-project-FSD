import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Button } from '@/shared/ui/redesigned'

import languageSwitcherStyle from './LanguageSwitcher.module.scss'

export enum Language {
    EN = 'en',
    UA = 'ua',
}

interface LanguageSwitcherProps {
    className?: string
    short?: boolean
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(props => {
    const { className, short } = props

    const { t, i18n } = useTranslation('translation')

    const toggleLanguage = () => {
        const newOne = getFollowingLanguage()

        void changeLanguage(newOne)
    }

    const getFollowingLanguage = () => (i18n.language === Language.EN ? Language.UA : Language.EN)

    const changeLanguage = async (ln: Language) => await i18n.changeLanguage(ln)

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <ButtonDeprecated
                    onClick={toggleLanguage}
                    className={classNames(languageSwitcherStyle.LanguageSwitcher, {}, [className])}
                    theme={ButtonTheme.CLEAR}
                >
                    {t(short ? 'language_contracted' : 'language')}
                </ButtonDeprecated>
            }
            onEnabled={
                <Button
                    onClick={toggleLanguage}
                    className={classNames(languageSwitcherStyle.LanguageSwitcher, {}, [className])}
                    variant="clear"
                >
                    {t(short ? 'language_contracted' : 'language')}
                </Button>
            }
        />
    )
})

export default LanguageSwitcher
