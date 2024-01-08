import { type Article } from '../../../../src/entities/Articles'

const testArticle: Omit<Article, 'id' | 'user'> = {
    title: 'Testing Cypress article',
    subtitle: 'Testing Cypress article',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [],
    blocks: [],
}

export const setValueInAddCommentForm = (inputId: string, value: string) =>
    cy.getByTestId(inputId).type(value)

export const createArticle = (
    userId: string,
    article?: Omit<Article, 'id'>,
): Cypress.Chainable<Article> => {
    return cy
        .request({
            url: 'http://localhost:8000/articles',
            method: 'POST',
            body: { ...(article || testArticle), userId },
            headers: {
                authorization: 'token',
            },
        })
        .then(res => res.body)
}

export const resetArticle = (articleId: string) => {
    return cy.request({
        url: 'http://localhost:8000/articles/' + articleId,
        method: 'DELETE',
        headers: {
            authorization: 'token',
        },
    })
}
