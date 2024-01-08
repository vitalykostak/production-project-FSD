import { getArticlesRoute } from '../../../src/shared/consts/router'

describe('Article', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then(() => {
            cy.visit(getArticlesRoute())
        })
    })

    it('ArticlesPage should render', () => {
        cy.getByTestId('ArticlesPage').should('exist')
    })

    it('and ArticleList should have at least 3 items', () => {
        cy.getByTestId('ArticlesPage').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})
