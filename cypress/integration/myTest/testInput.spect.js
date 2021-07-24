/// <reference types="cypress" />

describe("Visit local app", () => {
   it("should go to the local app", () => {
      cy.visit("http://localhost:3000");

      cy.get("#todo").type("add new todo").should("have.value", "add new todo");
      cy.get("button").click();

      cy.get(".single-todo").should("exist");
      cy.get("#todo").should("have.value", "");

      cy.get(".single-todo").click();

      cy.get(".single-todo").should("not.exist");
   });
});
