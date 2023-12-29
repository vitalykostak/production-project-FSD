import { useMemo, type ChangeEvent } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import selectStyles from './Select.module.scss'

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export interface SelectOption<T extends string> {
  value: T
  content: string
}

const Select = <T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T)
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
}

export default Select
