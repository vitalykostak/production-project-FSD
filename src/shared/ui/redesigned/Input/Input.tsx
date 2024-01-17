import {
    type InputHTMLAttributes,
    type FC,
    memo,
    type ChangeEventHandler,
    type FocusEventHandler,
    useRef,
    useEffect,
    type ReactNode,
} from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import HStack from '../Stack/HStack/HStack'
import Text from '../Text/Text'

import inputStyles from './Input.module.scss'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HtmlInputProps {
    className?: string
    value?: string
    label?: string
    onChange?: (value: string) => void
    readonly?: boolean
    addonLeft?: ReactNode
    addonRight?: ReactNode
}

const Input: FC<InputProps> = memo(props => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        addonLeft,
        addonRight,
        label,
        ...otherInputProps
    } = props

    const ref = useRef<HTMLInputElement>(null)

    const onFocus: FocusEventHandler<HTMLInputElement> = e => {
        otherInputProps.onFocus?.(e)
    }

    const onBlur: FocusEventHandler<HTMLInputElement> = e => {
        otherInputProps.onBlur?.(e)
    }

    const changeHandler: ChangeEventHandler<HTMLInputElement> = e => {
        onChange?.(e.target.value)
    }

    const onSelect: ChangeEventHandler<HTMLInputElement> = e => {
        otherInputProps.onSelect?.(e)
    }

    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus()
        }
    }, [autoFocus])

    const additionsClasses = [className]

    const input = (
        <div className={classNames(inputStyles.InputWrapper, {}, additionsClasses)}>
            {addonLeft && <div className={inputStyles.addonLeft}>{addonLeft}</div>}
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
                placeholder={placeholder}
                {...otherInputProps}
            />
            {addonRight && <div className={inputStyles.addonRight}>{addonRight}</div>}
        </div>
    )

    if (label) {
        return (
            <HStack gap="12" align="center">
                <Text text={label} />
                {input}
            </HStack>
        )
    }

    return input
})

export default Input
