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
import { classNames } from '@/shared/lib/classNames/classNames'

type HtmlInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
'value' | 'onChange' | 'readonly'
>

interface InputProps extends HtmlInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

const Input: FC<InputProps> = memo((props) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    ...otherInputProps
  } = props

  const ref = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [caretPosition, setCaretPosition] = useState<number>(0)

  const isCaretVisible = isFocused && !readonly

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
    setCaretPosition(e.target.value.length)
  }

  const onSelect: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCaretPosition(e.target?.selectionStart || 0)
    otherInputProps.onSelect?.(e)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const additionsClasses = [className]

  return (
    <div
      className={classNames(inputStyles.InputWrapper, {}, additionsClasses)}
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
          readOnly={readonly}
          {...otherInputProps}
        />
        {isCaretVisible && (
          <span
            className={inputStyles.caret}
            style={{ left: `${caretPosition * 9.5}px` }}
          />
        )}
      </div>
    </div>
  )
})

export default Input
