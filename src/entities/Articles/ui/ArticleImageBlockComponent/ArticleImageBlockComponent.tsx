import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { AppImage, Text } from '@/shared/ui/redesigned'

import { type ArticleImageBlock } from '../../model/types/articles'

import styles from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
    className?: string
    block: ArticleImageBlock
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = memo(props => {
    const { className, block } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames('', mods, additionsClasses)}>
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={<img src={block.src} alt={block.src} className={styles.img} />}
                onEnabled={<AppImage src={block.src} alt={block.src} className={styles.img} />}
            />

            {block.title && (
                <ToggleFeature
                    featureFlag="isAppRedesigned"
                    onDisabled={<TextDeprecated text={block.title} align={TextAlign.CENTER} />}
                    onEnabled={<Text text={block.title} align="center" />}
                />
            )}
        </div>
    )
})

export default ArticleImageBlockComponent
