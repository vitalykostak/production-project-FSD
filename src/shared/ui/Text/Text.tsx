import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import textStyles from './Text.module.scss'

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

const Text: FC<TextProps> = (props) => {
  const { className, title, text, theme = TextTheme.PRIMARY } = props

  const additionalsClasses = [className, textStyles[theme]]

  return (
    <div className={classNames(textStyles.Text, {}, additionalsClasses)}>
      {title && <p className={textStyles.title}>{title}</p>}
      {text && <p className={textStyles.text}>{text}</p>}
    </div>
  )
}

export default Text
