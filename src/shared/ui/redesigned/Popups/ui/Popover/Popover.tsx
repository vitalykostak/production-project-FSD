import { type ReactNode, type FC } from 'react'
import { Popover as HPopover } from '@headlessui/react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types'

import popupStyles from '../../styles/Popup.module.scss'

import styles from './Popover.module.scss'

interface PopoverProps {
    className?: string
    direction?: DirectionType
    children: ReactNode
    trigger: ReactNode
}

const Popover: FC<PopoverProps> = props => {
    const { className, children, direction = 'bottomRight', trigger } = props

    const mods = {}

    const additionsClasses = [className]

    return (
        <HPopover className={classNames(popupStyles.Popup, mods, additionsClasses)}>
            <HPopover.Button className={styles.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel className={classNames(styles.panel, {}, [popupStyles[direction]])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}

export default Popover
