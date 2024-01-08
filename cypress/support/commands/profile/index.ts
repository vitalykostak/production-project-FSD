export const updateEditableProfileForm = () => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click({ waitForAnimations: true })

    cy.getByTestId('ProfileCard.firstNameInput').clear().type('New First [Cypress]')
    cy.getByTestId('ProfileCard.lastNameInput').clear().type('New Last [Cypress]')
    cy.getByTestId('ProfileCard.cityInput').clear().type('New City [Cypress]')
    cy.getByTestId('ProfileCard.ageInput').clear().type('21')

    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    cy.request({
        url: 'http://localhost:8000/profile/' + profileId,
        method: 'PUT',
        body: {
            first: 'Johnny',
            lastName: 'Silverhand',
            age: 30,
            country: 'UKRAINE',
            currency: 'USD',
            city: 'NightCity',
            username: 'admina',
            avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.YiaRzLjKeita5FGhjVu5ZQHaHa%26pid%3DApi&f=1&ipt=94b07cb95209f68ee67c1876517815ad54c69e96abdddd78766316ff4cccdd9d&ipo=images',
        },
        headers: {
            authorization: 'token',
        },
    })
}
