import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign } from '@/shared/ui/deprecated'

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
            <img src={block.src} alt={block.src} className={styles.img} />
            {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
        </div>
    )
})

export default ArticleImageBlockComponent
