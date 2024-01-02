import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import Card, { CardTheme } from '../Card/Card'

import styles from './Tabs.module.scss'

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export interface TabItem {
  value: string
  content: ReactNode
}

const Tabs: FC<TabsProps> = memo((props) => {
  const { className, tabs, value, onTabClick } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <div className={classNames(styles.Tabs, mods, additionsClasses)}>
      {tabs.map((tab) => (
        <Card
          theme={value === tab.value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          key={tab.value}
          onClick={() => onTabClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  )
})

export default Tabs
