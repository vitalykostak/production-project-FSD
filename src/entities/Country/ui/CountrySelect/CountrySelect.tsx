import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ListBox, type SelectOption } from '@/shared/ui'
import { useTranslation } from 'react-i18next'
import { COUNTRY } from '../../model/consts/country'

interface CountrySelectProps {
  className?: string
  value?: COUNTRY
  onChange?: (value: COUNTRY) => void
  readonly?: boolean
}

const options = Object.values<COUNTRY>(COUNTRY).map<SelectOption<COUNTRY>>((opt) => ({
  value: opt,
  content: opt
}))

const CountrySelect: FC<CountrySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props

  const { t } = useTranslation('translation')

  const mods = {}

  const additionsClasses = [className]

  return (
    <ListBox<COUNTRY>
      label={t('choose_country')}
      value={value}
      onChange={onChange}
      items={options}
      className={classNames('', mods, additionsClasses)}
      readonly={readonly}
      direction='topRight'
    />
  )
})

export default CountrySelect
