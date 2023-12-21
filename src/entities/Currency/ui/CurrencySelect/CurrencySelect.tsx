import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ListBox, type SelectOption } from 'shared/ui'
import { CURRENCY } from '../../model/types/currency'
import { useTranslation } from 'react-i18next'

interface CurrencySelectProps {
  className?: string
  value?: CURRENCY
  onChange?: (value: CURRENCY) => void
  readonly?: boolean
}

const options = Object.values<CURRENCY>(CURRENCY).map<SelectOption<CURRENCY>>(
  (opt) => ({
    value: opt,
    content: opt
  })
)

const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation('translation')

  const mods = {}

  const additionsClasses = [className]

  return (
    <ListBox<CURRENCY>
      items={options}
      value={value}
      onChange={onChange}
      readonly={readonly}
      label={t('choose_currency')}
      className={classNames('', mods, additionsClasses)}
      direction='up'
    />
  )
})

export default CurrencySelect
