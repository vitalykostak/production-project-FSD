import { memo, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ToggleItemsView.module.scss'
import { ArticleListView } from '../../model/types/articles'
import ListIcon from 'shared/assets/icons/list.svg'
import TileIcon from 'shared/assets/icons/tile.svg'
import { Button, ButtonTheme, Icon } from 'shared/ui'

interface ToggleItemsViewProps {
  className?: string
  view: ArticleListView
  onViewClick: (view: ArticleListView) => void
}

const viewsTypes = [
  {
    view: ArticleListView.SMALL,
    icon: ListIcon
  },
  {
    view: ArticleListView.BIG,
    icon: TileIcon
  }
]

const ToggleItemsView: FC<ToggleItemsViewProps> = memo((props) => {
  const { className, view, onViewClick } = props

  const onClick = (newView: ArticleListView) => () => onViewClick(newView)

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames('', mods, additionsClasses)}>
      {viewsTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames('', {
              [styles.notSelected]: viewType.view !== view
            })}
          />
        </Button>
      ))}
    </div>
  )
})

export default ToggleItemsView
