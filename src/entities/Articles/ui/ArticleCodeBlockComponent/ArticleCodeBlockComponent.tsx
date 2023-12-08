import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ArticleCodeBlockComponent.module.scss'
import { type ArticleCodeBlock } from '../../model/types/articles'
import { Code } from 'shared/ui'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(
  (props) => {
    const { className, block } = props

    const mods = {}

    const additionsClasses = [className]

    return (
      <div
        className={classNames(
          styles.ArticleCodeBlockComponent,
          mods,
          additionsClasses
        )}
      >
        <Code text={block.code} />
      </div>
    )
  }
)

export default ArticleCodeBlockComponent
