import { memo, type FC } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox as ListBoxDeprecated, type SelectOption } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { ListBox } from '@/shared/ui/redesigned'

import { CURRENCY } from '../../model/consts/currency'

interface CurrencySelectProps {
    className?: string
    value?: CURRENCY
    onChange?: (value: CURRENCY) => void
    readonly?: boolean
}

const options = Object.values<CURRENCY>(CURRENCY).map<SelectOption<CURRENCY>>(opt => ({
    value: opt,
    content: opt,
}))

const CurrencySelect: FC<CurrencySelectProps> = memo(props => {
    const { className, value, onChange, readonly } = props

    const { t } = useTranslation('translation')

    const mods = {}

    const additionsClasses = [className]

    const listProps = {
        items: options,
        value,
        onChange,
        readonly,
        label: t('choose_currency'),
        className: classNames('', mods, additionsClasses),
        direction: 'topRight' as const,
    }

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={<ListBoxDeprecated<CURRENCY> {...listProps} />}
            onEnabled={<ListBox<CURRENCY> {...listProps} />}
        />
    )
})

export default CurrencySelect
