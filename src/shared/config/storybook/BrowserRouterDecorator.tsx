import { type StoryFn } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

const BrowserRouterDecorator = (Story: StoryFn) => (
    <BrowserRouter>
        <Story/>
    </BrowserRouter>
)

export default BrowserRouterDecorator
