import { memo, type FC, useCallback } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, type SelectOption } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { COUNTRY } from '../../model/types/country'

interface CountrySelectProps {
  className?: string
  value?: COUNTRY
  onChange?: (value: COUNTRY) => void
  readonly?: boolean
}

const options = Object.values<COUNTRY>(COUNTRY).map<SelectOption>((opt) => ({
  value: opt,
  content: opt
}))

const CurrencySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation('translation')

  const changeHandler = useCallback(
    (value: string) => onChange?.(value as COUNTRY),
    [onChange]
  )

  const mods = {}

  const additionsClasses = [className]

  return (
    <Select
      label={t('choose_country')}
      value={value}
      onChange={changeHandler}
      options={options}
      className={classNames('', mods, additionsClasses)}
      readonly={readonly}
    />
  )
})

export default CurrencySelect
