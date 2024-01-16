import { memo, type FC } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'
import ListIconDeprecated from '@/shared/assets/icons/list.svg'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TileIconDeprecated from '@/shared/assets/icons/tile.svg'
import TileIcon from '@/shared/assets/icons/tileNew.svg'
import { Button, ButtonTheme, Icon as IconDeprecated } from '@/shared/ui/deprecated'
import { ToggleFeature, toggleFeature } from '@/shared/lib/featureFlags'
import { Card, HStack, Icon } from '@/shared/ui/redesigned'

import { ArticleListView } from '../../model/consts/consts'

import styles from './ToggleItemsView.module.scss'

interface ToggleItemsViewProps {
    className?: string
    view: ArticleListView
    onViewClick: (view: ArticleListView) => void
}

const viewsTypes = [
    {
        view: ArticleListView.SMALL,
        icon: toggleFeature({
            featureFlag: 'isAppRedesigned',
            onDisabled: () => ListIconDeprecated,
            onEnabled: () => ListIcon,
        }),
    },
    {
        view: ArticleListView.BIG,
        icon: toggleFeature({
            featureFlag: 'isAppRedesigned',
            onDisabled: () => TileIconDeprecated,
            onEnabled: () => TileIcon,
        }),
    },
]

const ToggleItemsView: FC<ToggleItemsViewProps> = memo(props => {
    const { className, view, onViewClick } = props

    const onClick = (newView: ArticleListView) => () => onViewClick(newView)

    const mods = {}

    const additionsClasses = [className]

    return (
        <ToggleFeature
            featureFlag="isAppRedesigned"
            onDisabled={
                <div className={classNames(styles.ToggleItemsView, mods, additionsClasses)}>
                    {viewsTypes.map(viewType => (
                        <Button
                            key={viewType.view}
                            theme={ButtonTheme.CLEAR}
                            onClick={onClick(viewType.view)}
                        >
                            <IconDeprecated
                                Svg={viewType.icon}
                                className={classNames('', {
                                    [styles.notSelected]: viewType.view !== view,
                                })}
                            />
                        </Button>
                    ))}
                </div>
            }
            onEnabled={
                <Card
                    className={classNames(styles.ToggleItemsViewRedesigned, mods, additionsClasses)}
                    cardBorder="borderRound"
                >
                    <HStack>
                        {viewsTypes.map(viewType => (
                            <Icon
                                width={32}
                                height={32}
                                className={classNames('', {
                                    [styles.notSelected]: viewType.view !== view,
                                })}
                                key={viewType.view}
                                Svg={viewType.icon}
                                clickable
                                onClick={onClick(viewType.view)}
                            />
                        ))}
                    </HStack>
                </Card>
            }
        />
    )
})

export default ToggleItemsView
