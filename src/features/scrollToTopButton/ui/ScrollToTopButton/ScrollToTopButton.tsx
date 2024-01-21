import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { Icon } from '@/shared/ui/redesigned'
import CircleUpIcon from '@/shared/assets/icons/circle-up.svg'

interface ScrollToTopButtonProps {
    className?: string
}

const ScrollToTopButton: FC<ScrollToTopButtonProps> = memo(props => {
    const { className } = props

    const onClick = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const mods = {}

    const additionsClasses = [className]

    return (
        <Icon
            className={classNames('', mods, additionsClasses)}
            width={32}
            height={32}
            onClick={onClick}
            Svg={CircleUpIcon}
        />
    )
})

export default ScrollToTopButton
