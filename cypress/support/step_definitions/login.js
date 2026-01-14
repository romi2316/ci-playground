import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("https://dev.visionstrust.com/registration/login");
});

Then("I fill the login form", () => {
  cy.get("#emailLogin").type("test@test.com");
  cy.get("#passwordLogin").type("password123");
  cy.get("#loginBtn").click();
});

