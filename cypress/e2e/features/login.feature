@login
Feature: Login

  @smoke
  Scenario: User visits the login page
    Given I open the login page
    Then I fill the login form

  Scenario: User visits the login page 2
    Given I open the login page 2
    Then I fill the login form 2
