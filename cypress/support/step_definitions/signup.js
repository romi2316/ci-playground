import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the login page", () => {
  cy.visit("https://dev.visionstrust.com/registration/signup/email");
});

Then("I fill the login form", () => {
  cy.get("#emailSignup").type("test@test.com");
  cy.get("#emailSubmitSignup").click();
});

