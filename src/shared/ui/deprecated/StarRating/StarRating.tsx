import { memo, type FC, useCallback, useState, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'

import HStack from '../../redesigned/Stack/HStack/HStack'

import styles from './StarRating.module.scss'

interface StarRatingProps {
    className?: string
    size?: number
    selected?: number
    onSelect?: (starNumber: number) => void
}

const stars: number[] = [1, 2, 3, 4, 5]

/**
 * @deprecated
 */
const StarRating: FC<StarRatingProps> = memo(props => {
    const { className, size = 30, selected = 0, onSelect } = props

    const [hoveredStar, setHoveredStar] = useState<number | undefined>()
    const [currentSelected, setCurrentSelected] = useState<number>(selected || 0)

    const [isSelected, setSelected] = useState<boolean>(Boolean(selected))

    const clickHandler = (starNumber: number) => () => {
        if (selected || currentSelected) {
            return
        }

        onSelect?.(starNumber)
        setCurrentSelected(starNumber)
        setSelected(true)
    }

    const onMouseEnter = (starNumber: number) => () => !isSelected && setHoveredStar(starNumber)
    const onMouseLeave = useCallback(() => setHoveredStar(undefined), [])

    useEffect(() => {
        if (!selected) {
            setSelected(false)
            setCurrentSelected(0)
        }
    }, [selected])

    const mods = {}

    const additionsClasses = [className]

    return (
        <HStack className={classNames('', mods, additionsClasses)}>
            {stars.map(star => {
                const starMods = {
                    [styles.selected]: star <= selected,
                    [styles.hovered]:
                        Boolean(!isSelected && hoveredStar && star <= hoveredStar) ||
                        star <= currentSelected,
                    [styles.disabled]: isSelected,
                }

                const additionsStarClasses: string[] = []

                return (
                    <StarIcon
                        onClick={clickHandler(star)}
                        onMouseEnter={onMouseEnter(star)}
                        onMouseLeave={onMouseLeave}
                        width={size}
                        height={size}
                        key={'star-rating-' + star}
                        className={classNames(styles.star, starMods, additionsStarClasses)}
                    />
                )
            })}
        </HStack>
    )
})

export default StarRating
