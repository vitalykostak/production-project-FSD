import { memo, type FC, useMemo, type ChangeEvent } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import selectStyles from './Select.module.scss'

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export interface SelectOption {
  value: string
  content: string
}

const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, onChange, readonly } = props

  const optionList = useMemo(
    () =>
      options?.map((opt) => (
        <option
          className={selectStyles.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
        </option>
      )),
    [options]
  )

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault()
    onChange?.(e.target.value)
  }

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(selectStyles.Wrapper, mods, additionsClasses)}>
      {label && (
        <span className={selectStyles.label}>
          {label}
          {'>'}
        </span>
      )}
      <select className={selectStyles.select} value={value} onChange={onChangeHandler} disabled={readonly}>
        {optionList}
      </select>
    </div>
  )
})

export default Select
