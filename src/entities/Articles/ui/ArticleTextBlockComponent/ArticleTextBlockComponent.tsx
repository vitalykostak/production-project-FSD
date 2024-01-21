import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated } from '@/shared/ui/deprecated'
import { Text } from '@/shared/ui/redesigned'
import { ToggleFeature } from '@/shared/lib/featureFlags'

import { type ArticleTextBlock } from '../../model/types/articles'

import styles from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
    className?: string
    block: ArticleTextBlock
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = memo(props => {
    const { className, block } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames('', mods, additionsClasses)}>
            {block.title && (
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onDisabled={<TextDeprecated title={block.title} className={styles.title} />}
                    onEnabled={<Text title={block.title} className={styles.title} />}
                />
            )}
            {block.paragraphs?.map((paragraph, index) => (
                <ToggleFeature
                    key={index}
                    featureFlag="isAppRedesigned"
                    onDisabled={
                        <TextDeprecated text={paragraph} key={index} className={styles.paragraph} />
                    }
                    onEnabled={<Text text={paragraph} key={index} className={styles.paragraph} />}
                />
            ))}
        </div>
    )
})

export default ArticleTextBlockComponent
