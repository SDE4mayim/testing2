describe('first',()=>{
    it('second',()=>{
       cy.visit('https://vetcastle.com')
       cy.get('.grow > :nth-child(2) > .font-medium').click()
       cy.get('.justify-center > :nth-child(3)').click()
   cy.get('#username').type('naveen')
   cy.get('#password').type('NAVEEn@3445')
   cy.get('.btn').click()
   cy.wait(1000)
   cy.reload()
   cy.visit('https://vetcastle.com/maindashboard')
   cy.url().should('eq','https://vetcastle.com/maindashboard')
   cy.get('[href="/csd"] > .MuiListItemText-root > .MuiTypography-root').click()
cy.url().should('eq','https://vetcastle.com/csd')
cy.get('[data-id="400001"] > [data-field="action"] > .cellAction > .viewbutton').click()
cy.get('[data-testid="EditIcon"]').click()
cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(5)').clear().type('murali')
cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(5)').should('contain.text','User Name')
cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(6)').clear().type('naveen')
cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(6)').should('contain.text','First Name')
cy.get(':nth-child(2) > :nth-child(7)').clear().type('dinesh')
cy.get(':nth-child(2) > :nth-child(7)').should('contain.text','Last Name')
///cy.get(':nth-child(2) > :nth-child(8)').clear().type('male')
///cy.get(':nth-child(2) > :nth-child(8)').should('contain.text','Gender')
cy.get(':nth-child(2) > :nth-child(8)').click()
cy.get('[data-value="male"]').click()
cy.get(':nth-child(2) > :nth-child(9)').clear().type('9344611084')
cy.get(':nth-child(2) > :nth-child(9)').should('contain.text','Phone')
cy.get(':nth-child(2) > :nth-child(10)').clear().type('9344611084')
cy.get(':nth-child(2) > :nth-child(10)').should('contain.text','Alt Phone')
cy.get(':nth-child(2) > :nth-child(11)').clear().type('naveen@3445')
cy.get(':nth-child(2) > :nth-child(11)').should('contain.text','Email')
cy.get('[data-testid="SaveIcon"]').click()








    })
})
    