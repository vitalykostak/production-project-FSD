let userId: string = ''

describe('Profiles', () => {
    beforeEach(() => {
        cy.visit('')
        cy.login().then(u => {
            userId = u.id
            cy.visit('/profile/' + userId)
        })
    })

    it('ProfileCard should render', () => {
        cy.getByTestId('ProfileCard.firstNameInput').should('exist')
        cy.getByTestId('ProfileCard.lastNameInput').should('exist')
        cy.getByTestId('EditableProfileCardHeader.EditButton').should('exist')
    })

    it('and editing ProfileCard should work', () => {
        cy.updateEditableProfileForm()

        cy.getByTestId('ProfileCard.firstNameInput').should('have.value', 'New First [Cypress]')
        cy.getByTestId('ProfileCard.lastNameInput').should('have.value', 'New Last [Cypress]')
        cy.getByTestId('ProfileCard.cityInput').should('have.value', 'New City [Cypress]')
        cy.getByTestId('ProfileCard.ageInput').should('have.value', '21')

        cy.resetProfile(userId)
    })
})
