import 'app/styles/index.scss'
import type { Meta, StoryObj } from '@storybook/react'
import Code from './Code'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Code',
  component: Code,
  tags: ['autodocs']
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

const code = `import { memo, type FC, type ReactNode } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Code.module.scss'

interface CodeProps {
  className?: string
  children: ReactNode
}

const Code: FC<CodeProps> = memo((props) => {
  const { className, children } = props

  const mods = {}

  const additionsClasses = [className]

  return (
    <pre>
      <code className={classNames(styles.Code, mods, additionsClasses)}>
        {children}
      </code>
    </pre>
  )
})

export default Code
`

export const Normal: Story = {
  args: {
    text: code
  }
}

export const Dark: Story = {
  args: {
    text: code
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
