/// <reference types="cypress" />

describe("Example test", () => {
   it("does not do much", () => {
      expect(true).to.equal(true);
   });
});

describe("My first real test", () => {
   it("visits the kitchen sink", () => {
      cy.visit("https://example.cypress.io");

      cy.pause();

      cy.contains("type").click();

      cy.url().should("include", "/commands/actions");
      cy.get(".action-email")
         .type("fake@email.com")
         .should("have.value", "fake@email.com");
   });
});
