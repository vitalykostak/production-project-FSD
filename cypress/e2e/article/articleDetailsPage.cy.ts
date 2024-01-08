import { getArticleDetailsRoute } from '../../../src/shared/consts/router'

let articleId: string = ''

describe('ArticleDetails', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then(u => {
            cy.createArticle(u.id).then(a => {
                articleId = a.id
                cy.visit(getArticleDetailsRoute(articleId))
            })
        })
    })

    afterEach(() => {
        cy.log(articleId)
        cy.resetArticle(articleId)
    })

    it('ArticleDetails info should be render', () => {
        cy.getByTestId('ArticleDetailsPage').should('exist')
        cy.getByTestId('ArticleDetailsAvatar').should('exist')
        cy.getByTestId('ArticleDetailsHeaders.Title').should('exist')
        cy.getByTestId('ArticleDetailsHeaders.Text').should('exist')
        cy.getByTestId('ArticleDetailsViews.Text').should('exist')
        cy.getByTestId('ArticleDetailsCreatedAt.Text').should('exist')
    })

    it('and ArticleRecommendationsList should be rendered', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist')
        cy.getByTestId('ArticleRecommendationsList').scrollIntoView()
    })

    it('and ArticleDetailsComments should be rendered', () => {
        cy.getByTestId('ArticleDetailsComments').should('exist')
        cy.getByTestId('ArticleDetailsComments').scrollIntoView()
        cy.getByTestId('ArticleDetailsComments.Title').should('exist')
        cy.getByTestId('ArticleDetailsAddCommentForm').should('exist')
        cy.getByTestId('ArticleDetailsAddCommentsList').should('exist')
    })

    it('and Sending article comment should work', () => {
        cy.getByTestId('ArticleDetailsCreatedAt.Text').should('exist')

        cy.getByTestId('ArticleDetailsComments').scrollIntoView()
        cy.setValueInAddCommentForm('ArticleDetailsAddCommentForm.Input', 'small')
        cy.getByTestId('ArticleDetailsAddCommentForm.SendButton').click()
        cy.getByTestId('ArticleDetailsAddCommentsList.CommentCardItem').should('exist')
        cy.getByTestId('ArticleDetailsAddCommentsList.CommentCardItem').scrollIntoView()
    })
})
