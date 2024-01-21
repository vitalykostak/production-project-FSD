import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Code as CodeDeprecated } from '@/shared/ui/deprecated'
import { ToggleFeature } from '@/shared/lib/featureFlags'
import { Code } from '@/shared/ui/redesigned'

import { type ArticleCodeBlock } from '../../model/types/articles'

import styles from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = memo(props => {
    const { className, block } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <div className={classNames(styles.ArticleCodeBlockComponent, mods, additionsClasses)}>
            <ToggleFeature
                featureFlag="isAppRedesigned"
                onDisabled={<CodeDeprecated text={block.code} />}
                onEnabled={<Code text={block.code} />}
            />
        </div>
    )
})

export default ArticleCodeBlockComponent
