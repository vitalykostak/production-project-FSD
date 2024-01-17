import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import { type TestProps } from '../../../types'

import textStyles from './Text.module.scss'

interface TextProps extends TestProps {
    className?: string
    title?: string
    text?: string
    variant?: TextVariant
    align?: TextAlign
    size?: TextSize
    bold?: boolean
}

type TextVariant = 'primary' | 'error' | 'accent'

type TextAlign = 'left' | 'center' | 'right'

export type TextSize = 's' | 'm' | 'l'

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const headerSizeMapping: Record<TextSize, HeadingTag> = {
    s: 'h1',
    m: 'h2',
    l: 'h3',
}

const sizeClassMapper: Record<TextSize, string> = {
    s: textStyles.sizeS,
    m: textStyles.sizeM,
    l: textStyles.sizeL,
}

const Text: FC<TextProps> = memo(props => {
    const {
        className,
        title,
        text,
        variant = 'primary',
        align = 'left',
        size = 'm',
        bold,
        'data-testid': dataTestId = 'Text',
    } = props

    const HeaderTag = headerSizeMapping[size]

    const mods = {
        [textStyles.bold]: bold,
    }

    const additionsClasses = [
        className,
        textStyles[variant],
        textStyles[align],
        sizeClassMapper[size],
    ]

    return (
        <div className={classNames(textStyles.Text, mods, additionsClasses)}>
            {title && (
                <HeaderTag className={textStyles.title} data-testid={`${dataTestId}.Title`}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={textStyles.text} data-testid={`${dataTestId}.Text`}>
                    {text}
                </p>
            )}
        </div>
    )
})

export default Text
