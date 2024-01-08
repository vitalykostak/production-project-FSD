describe('Routing', () => {
    describe('User is logged OUT', () => {
        it('MainPage', () => {
            cy.visit('/')

            cy.getByTestId('MainPage').should('exist')
        })

        it('Navigating to ProfilePage should navigate to MainPage', () => {
            cy.visit('/profile/1')

            cy.getByTestId('ProfilePage').should('not.exist')
            cy.getByTestId('MainPage').should('exist')
        })
    })

    describe('User is logged IN', () => {
        beforeEach(() => {
            cy.login()
            cy.visit('/')
        })

        it('ProfilePage should render', () => {
            cy.visit('/profile/1')
            cy.getByTestId('ProfilePage').should('exist')
        })

        it('ArticleDetails should render', () => {
            cy.visit('/articles/article_renewable_energy_1')
            cy.getByTestId('ArticleDetailsPage').should('exist')
        })
    })
})
