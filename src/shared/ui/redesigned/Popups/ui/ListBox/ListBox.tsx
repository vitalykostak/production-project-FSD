import { Fragment } from 'react'
import { Listbox as HListBox } from '@headlessui/react'

import { classNames } from '@/shared/lib/classNames/classNames'
import { type DirectionType } from '@/shared/types'

import { Button, ButtonTheme } from '../../../../deprecated'
import popupStyles from '../../styles/Popup.module.scss'
import HStack from '../../../../redesigned/Stack/HStack/HStack'

import styles from './ListBox.module.scss'

interface ListBoxProps<T extends string> {
    value?: T
    defaultValue?: string
    onChange?: (value: T) => void
    className?: string
    items?: ListBoxItem[]
    readonly?: boolean
    label?: string
    direction?: DirectionType
}

interface ListBoxItem {
    value: string
    content: string
    disabled?: boolean
}

const ListBox = <T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        value,
        defaultValue,
        onChange,
        items,
        readonly,
        label,
        direction = 'bottomRight',
    } = props

    const inferredValue = value ?? defaultValue
    const inferredContent = items?.find(i => i.value === value)?.content || defaultValue

    const additionsClasses = [className]

    return (
        <HStack
            gap="4"
            align="center"
            className={classNames(popupStyles.Popup, {}, additionsClasses)}
        >
            {label && (
                <span>
                    {label} {'>'}
                </span>
            )}
            <HListBox
                value={inferredValue}
                onChange={onChange}
                as={HStack}
                className={styles.HListBox}
                disabled={readonly}
            >
                <HListBox.Button as={'div'}>
                    <Button theme={ButtonTheme.OUTLINE} disabled={readonly}>
                        {inferredContent}
                    </Button>
                </HListBox.Button>

                <HListBox.Options
                    className={classNames(styles.options, {}, [popupStyles[direction]])}
                >
                    {items?.map(item => (
                        <HListBox.Option
                            as={Fragment}
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(styles.item, {
                                        [styles.activeItem]: active,
                                        [styles.disabledItem]: item.disabled,
                                    })}
                                >
                                    {item.content + `${selected ? '!!!' : ''}`}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    )
}

export default ListBox
