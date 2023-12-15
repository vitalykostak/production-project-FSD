import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, type SelectOption } from 'shared/ui'
import { CURRENCY } from 'entities/Currency/model/types/currency'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
  className?: string
  value?: CURRENCY
  onChange?: (value: CURRENCY) => void
  readonly?: boolean
}

const options = Object.values<CURRENCY>(CURRENCY).map<SelectOption<CURRENCY>>((opt) => ({
  value: opt,
  content: opt
}))

const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation('translation')

  const mods = {}

  const additionsClasses = [className]

  return (
    <Select<CURRENCY>
      label={t('choose_currency')}
      value={value}
      onChange={onChange}
      options={options}
      className={classNames('', mods, additionsClasses)}
      readonly={readonly}
    />
  )
})

export default CurrencySelect
