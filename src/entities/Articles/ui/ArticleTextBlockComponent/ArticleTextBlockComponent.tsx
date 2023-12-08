import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text } from 'shared/ui'
import styles from './ArticleTextBlockComponent.module.scss'
import { type ArticleTextBlock } from '../../model/types/articles'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(
  (props) => {
    const { className, block } = props

    const mods = {}

    const additionsClasses = [className]

    return (
      <div
        className={classNames(
          '',
          mods,
          additionsClasses
        )}
      >
        {block.title && <Text title={block.title} className={styles.title} />}
        {block.paragraphs?.map((paragraph, index) => (
          <Text text={paragraph} key={index} className={styles.paragraph} />
        ))}
      </div>
    )
  }
)

export default ArticleTextBlockComponent
