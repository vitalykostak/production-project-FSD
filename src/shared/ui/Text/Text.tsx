import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import textStyles from './Text.module.scss'

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
  size?: TextSize
}

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

export enum TextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum TextSize {
  M = 'sizeM',
  L = 'sizeL',
}

const Text: FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    theme = TextTheme.PRIMARY,
    align = TextAlign.LEFT,
    size = TextSize.M
  } = props

  const additionsClasses = [className, textStyles[theme], textStyles[align], textStyles[size]]

  return (
    <div className={classNames(textStyles.Text, {}, additionsClasses)}>
      {title && <p className={textStyles.title}>{title}</p>}
      {text && <p className={textStyles.text}>{text}</p>}
    </div>
  )
})

export default Text
