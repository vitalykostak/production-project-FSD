import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox as ListBoxDeprecated, type SelectOption } from '@/shared/ui/deprecated'
import { ListBox } from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import { COUNTRY } from '../../model/consts/country'

interface CountrySelectProps {
    className?: string
    value?: COUNTRY
    onChange?: (value: COUNTRY) => void
    readonly?: boolean
}

const options = Object.values<COUNTRY>(COUNTRY).map<SelectOption<COUNTRY>>(opt => ({
    value: opt,
    content: opt,
}))

const CountrySelect: FC<CountrySelectProps> = memo(props => {
    const { className, value, onChange, readonly } = props

    const { t } = useTranslation('translation')

    const mods = {}

    const additionsClasses = [className]

    const listProps = {
        label: t('choose_country'),
        value,
        onChange,
        items: options,
        className: classNames('', mods, additionsClasses),
        readonly,
        direction: 'topRight' as const,
    }

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={<ListBoxDeprecated<COUNTRY> {...listProps} />}
            onEnabled={<ListBox<COUNTRY> {...listProps} />}
        />
    )
})

export default CountrySelect
