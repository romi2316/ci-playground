@signup
Feature: signup 

  Scenario: User visits the signup page
    Given I open the signup page
    Then I fill the signup form

  @regression  
  Scenario: User visits the signup page 2
    Given I open the signup page 2
    Then I fill the signup form 2
