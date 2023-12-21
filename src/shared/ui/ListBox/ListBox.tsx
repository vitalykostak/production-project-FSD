import { Fragment } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ListBox.module.scss'
import Button, { ButtonTheme } from '../Button/Button'
import HStack from '../Stack/HStack/HStack'

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

type DirectionType = 'down' | 'up'

const ListBox = <T extends string>(props: ListBoxProps<T>) => {
  const { className, value, defaultValue, onChange, items, readonly, label, direction } =
    props

  const inferredValue = value ?? defaultValue
  const inferredContent =
    items?.find((i) => i.value === value)?.content || defaultValue

  const additionsClasses = [className]

  return (
    <HStack gap='4' align='center' className={classNames(styles.ListBox, {}, additionsClasses)}>
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

        <HListBox.Options className={classNames(styles.options, {}, [direction === 'up' ? styles.directionUp : undefined])}>
          {items?.map((item) => (
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
                    [styles.disabledItem]: item.disabled
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
