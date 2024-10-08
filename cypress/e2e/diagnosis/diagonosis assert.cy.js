describe('dia',()=>{
    it('gonis',()=>{
    
    cy.visit('https://vetcastle.com')
    cy.get('.grow > :nth-child(2) > .font-medium').click()
    cy.get('.justify-center > :nth-child(3)').click()
    cy.get('#username').type('naveen')
    cy.get('#password').type('NAVEEn@3445')
    cy.get('.btn').click()
    cy.wait(1000)
    cy.reload()
    cy.get('.MuiToolbar-root > .MuiTypography-root').click()
    cy.url().should('eq','https://vetcastle.com/maindashboard')
    cy.get('[href="/diagnosis"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.url().should('eq','https://vetcastle.com/diagnosis')
    cy.get('[data-id="11000007"] > .MuiDataGrid-cell--withRenderer > .cellAction > .viewbutton').click()
    cy.get('[data-testid="EditIcon"]').click()
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').clear().type('2023-08-07')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').should('contain.text','Diagnosis Date')
    cy.get('.MuiGrid-container > :nth-child(3)').clear().type('sample diaonis')
    cy.get('.MuiGrid-container > :nth-child(3)').should('contain.text','Diagnosis Notes')
    cy.get('[data-testid="SaveIcon"]').click()
    })
})