import { memo, type FC, useCallback, useState, useEffect } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import StarIcon from '@/shared/assets/icons/star.svg'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'

import HStack from '../Stack/HStack/HStack'
import Icon from '../Icon/Icon'

import styles from './StarRating.module.scss'

interface StarRatingProps {
    className?: string
    size?: number
    selected?: number
    onSelect?: (starNumber: number) => void
}

const stars: number[] = [1, 2, 3, 4, 5]

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
        <HStack
            className={classNames(
                toggleFeature({
                    featureFlag: 'isAppRedesigned',
                    onDisabled: () => styles.StarRating,
                    onEnabled: () => styles.StarRatingRedesigned,
                }),
                mods,
                additionsClasses,
            )}
        >
            {stars.map(star => {
                const starMods = {
                    [styles.selected]: star <= selected,
                    [styles.hovered]:
                        Boolean(!isSelected && hoveredStar && star <= hoveredStar) ||
                        star <= currentSelected,
                    [styles.disabled]: isSelected,
                }

                const additionsStarClasses: string[] = []

                const commonProps = {
                    onClick: clickHandler(star),
                    onMouseEnter: onMouseEnter(star),
                    onMouseLeave,
                    width: size,
                    height: size,
                    className: classNames(styles.star, starMods, additionsStarClasses),
                }

                return (
                    <ToggleFeature
                        key={'star-rating-' + star}
                        featureFlag="isAppRedesigned"
                        onDisabled={<StarIcon {...commonProps} />}
                        onEnabled={<Icon Svg={StarIcon} clickable {...commonProps} />}
                    />
                )
            })}
        </HStack>
    )
})

export default StarRating
