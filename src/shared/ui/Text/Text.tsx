import { memo, type FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import textStyles from './Text.module.scss'

interface TextProps {
  'className'?: string
  'title'?: string
  'text'?: string
  'theme'?: TextTheme
  'align'?: TextAlign
  'size'?: TextSize
  'data-testid'?: string
}

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  S = 'sizeS',
  M = 'sizeM',
  L = 'sizeL',
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const headerSizeMapping: Record<TextSize, HeadingTag> = {
  [TextSize.L]: 'h1',
  [TextSize.M]: 'h2',
  [TextSize.S]: 'h3'
}

const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M,
    'data-testid': dataTestId = 'Text'
  } = props

  const HeaderTag = headerSizeMapping[size]

  const additionsClasses = [
    className,
    textStyles[theme],
    textStyles[align],
    textStyles[size]
  ]

  return (
    <div className={classNames(textStyles.Text, {}, additionsClasses)}>
      {title && (
        <HeaderTag
          className={textStyles.title}
          data-testid={`${dataTestId}.Title`}
        >
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
