describe('newuser',()=>{
    it('two user',()=>{
        cy.visit('https://vetcastle.com')
        cy.url().should('eq','https://vetcastle.com/')
        cy.get('.grow > :nth-child(2) > .font-medium').click()
        cy.get('.justify-center > :nth-child(3)').click()
        cy.get('#username').type('srivathsandv2')
        cy.get('#password').type('1SDE@mayim')
        cy.get('.btn').click()
        cy.wait(1000)
        cy.visit("https://vetcastle.com/maindashboard")
        cy.get('[href="/hsd"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.url().should('eq',"https://vetcastle.com/hsd")
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('#search').type("sri")
        cy.get('.MuiGrid-container > :nth-child(2) > .MuiButtonBase-root').click()  
        })              
    })



