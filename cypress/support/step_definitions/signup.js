import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the signup page", () => {
  cy.visit("https://dev.visionstrust.com/registration/signup/email");
});

Then("I fill the signup form", () => {
  cy.get("#emailSignup").type("test@test.com");
  cy.get("#emailSubmitSignup").click();
});

Given("I open the signup page 2", () => {
  cy.visit("https://dev.visionstrust.com/registration/signup/email");
});

Then("I fill the signup form 2", () => {
  cy.get("#emailSignup").type("test@test.com");
  cy.get("#emailSubmitSignup").click();
});