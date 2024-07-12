describe('delete',()=>{
it('dele',()=>{
    cy.visit('https://chatgpt.com/')
    cy.get('#prompt-textarea').type('ineed for introduction of cypress testing')
    cy.get('[data-testid="send-button"]').click()
    cy.get('.md\:mb-4 > .btn').click()









})



})
