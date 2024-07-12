describe('user',()=>{
    it('name',()=>{
    cy.visit('https://vetcastle.com')
    cy.get('.grow > :nth-child(2) > .font-medium').click()
    cy.get('.justify-center > :nth-child(3)').click()
    cy.get('#username').type('naveen')
    cy.get('#password').type('NAVEEn@3445')
    cy.get('.btn').click()
    cy.wait(1000)
    cy.reload()
    cy.get('[href="/csd"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('.MuiGrid-container > :nth-child(3) > .MuiButtonBase-root').click()
    cy.get('.MuiGrid-root > .MuiTypography-root').click()
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(1)').type('muralikris')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(2)').type('murali@567')
    cy.get('.MuiDialogContent-root > .MuiGrid-container > :nth-child(3)').type('murali')
    cy.get('.MuiGrid-container > :nth-child(4)').type('Krishan')
    cy.get('.MuiGrid-container > :nth-child(5)').click()
    cy.get('[data-value="male"]').click()
    cy.get('.MuiGrid-container > :nth-child(6)').type('1234567890')
    cy.get('.MuiGrid-container > :nth-child(7)').type('0987612345')
    cy.get('.MuiGrid-container > :nth-child(8)').type('murali@gmail.com')
    cy.get('.MuiGrid-container > :nth-child(9)').type("2020-02-13")
    cy.get('.MuiGrid-container > :nth-child(10)').type('3/67 pennagaram')
    cy.get('.MuiGrid-container > :nth-child(11)').click()
    cy.get('[data-value="IN"]').click()
    cy.get('.MuiGrid-container > :nth-child(12)').click()
    cy.get('[data-value="TN"]').click()
    cy.get('.MuiGrid-container > :nth-child(13)').click()
    cy.get('[data-value="Dharmapuri"]').click()
    cy.get('.MuiGrid-container > :nth-child(14)').click()
    cy.get('.MuiGrid-container > :nth-child(14)').type('100910')
    cy.get('.MuiGrid-container > :nth-child(16)').click()
    cy.get('[data-value="300004"]').click()
    cy.get('[data-testid="CloseIcon"]').click()

    })
})