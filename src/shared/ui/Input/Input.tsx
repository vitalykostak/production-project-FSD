import {
  useState,
  type InputHTMLAttributes,
  type FC,
  memo,
  type ChangeEventHandler,
  type FocusEventHandler,
  useRef,
  useEffect
} from 'react'
import inputStyles from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

type HtmlInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange'
>

interface InputProps extends HtmlInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
}

const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    ...otherInputProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [caretPositon, setcaretPositon] = useState<number>(0)

  const onFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocused(true)
    otherInputProps.onFocus?.(e)
  }

  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocused(false)
    otherInputProps.onBlur?.(e)
  }

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange?.(e.target.value)
    setcaretPositon(e.target.value.length)
  }

  const onSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    setcaretPositon(e.target?.selectionStart || 0)
    otherInputProps.onSelect?.(e)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const additionalsClasses = [className]

  return (
    <div
      className={classNames(inputStyles.InputWrapper, {}, additionalsClasses)}
    >
      {placeholder && (
        <div className={inputStyles.placeholder}>{placeholder + ' >'}</div>
      )}
      <div className={inputStyles.caretWrapper}>
        <input
          ref={ref}
          type={type}
          onChange={changeHandler}
          className={inputStyles.input}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          onSelect={onSelect}
          {...otherInputProps}
        />
        {isFocused && (
          <span
            className={inputStyles.caret}
            style={{ left: `${caretPositon * 9.5}px` }}
          />
        )}
      </div>
    </div>
  )
})

export default Input
