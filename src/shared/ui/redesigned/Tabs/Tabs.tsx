import { memo, type FC, type ReactNode } from 'react'

import { classNames } from '@/shared/lib/classNames/classNames'

import Flex, { type FlexDirection } from '../Stack/Flex/Flex'
import Card from '../Card/Card'

import styles from './Tabs.module.scss'

interface TabsProps {
    className?: string
    tabs: TabItem[]
    value: string
    onTabClick: (tab: TabItem) => void
    direction?: FlexDirection
}

export interface TabItem {
    value: string
    content: ReactNode
}

const Tabs: FC<TabsProps> = memo(props => {
    const { className, tabs, value, onTabClick, direction = 'row' } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <Flex
            direction={direction}
            gap="8"
            className={classNames(styles.Tabs, mods, additionsClasses)}
            align="start"
        >
            {tabs.map(tab => {
                const isSelected = value === tab.value
                return (
                    <Card
                        variant={isSelected ? 'light' : 'outline'}
                        key={tab.value}
                        onClick={() => onTabClick(tab)}
                        cardBorder="borderRound"
                        className={classNames(styles.tab, { [styles.selected]: isSelected }, [])}
                    >
                        {tab.content}
                    </Card>
                )
            })}
        </Flex>
    )
})

export default Tabs
