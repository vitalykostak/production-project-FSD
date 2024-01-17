import ThemeDecorator from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/consts/theme'
import AvatarTestImg from '@/shared/assets/tests/avatar-test-img.png'

import { type Article } from '../../model/types/articles'
import { ArticleListView } from '../../model/consts/consts'

import ArticleListItemRedesigned from './ArticleListItem'

import type { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItemRedesigned,
    tags: ['autodocs'],
} satisfies Meta<typeof ArticleListItemRedesigned>

export default meta
type Story = StoryObj<typeof meta>

const article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Javascript news subitle subtile',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    user: { id: '1', username: 'User', avatar: AvatarTestImg },
    createdAt: '26.02.2022',
    type: ['IT', 'ECONOMICS', 'SCIENCE', 'SPORT'],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Блок 1',
            paragraphs: [
                'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Блок 1',
            paragraphs: [
                'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Image 1',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Title',
            paragraphs: [
                'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Title',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Title',
            paragraphs: [
                'Lorem LoremLoremLoremLoremLoremLorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem',
            ],
        },
    ],
} as unknown as Article

export const Small: Story = {
    args: {
        view: ArticleListView.SMALL,
        article,
    },
}

export const SmallDark: Story = {
    args: {
        view: ArticleListView.SMALL,
        article,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}

export const Big: Story = {
    args: {
        view: ArticleListView.BIG,
        article,
    },
}

export const BigDark: Story = {
    args: {
        view: ArticleListView.BIG,
        article,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
}
