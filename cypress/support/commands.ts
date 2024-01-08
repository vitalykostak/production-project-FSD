import { type User } from '../../src/entities/User'
import { type Article } from '../../src/entities/Articles'

import * as allCommands from './commands/'

Cypress.Commands.addAll(allCommands)

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateEditableProfileForm: () => Chainable<void>
            resetProfile: (profileId: string) => Chainable<void>
            login: (username?: string, password?: string) => Chainable<User>
            getByTestId: (testId: string) => Cypress.Chainable<JQuery<HTMLElement>>
            createArticle: (
                userId: string,
                article?: Omit<Article, 'id'>,
            ) => Cypress.Chainable<Article>
            resetArticle: (articleId: string) => Cypress.Chainable<void>
            setValueInAddCommentForm: (
                inputId: string,
                value: string,
            ) => Cypress.Chainable<JQuery<HTMLElement>>
        }
    }
}
