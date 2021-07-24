/// <reference types="cypress" />

describe("Example test", () => {
   it("does not do much", () => {
      expect(true).to.equal(true);
   });
});

describe("My first real test", () => {
   it("visits the kitchen sink", () => {
      cy.visit("https://example.cypress.io");

      cy.contains("type").click();
   });
});
