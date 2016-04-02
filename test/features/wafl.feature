Feature: Wafl

  Scenario: Run a single input prompt
    Given an "input" prompt for "text"
    When wafl is run
    And the user responds "Hello wafl"
    Then the output "text" should be "Hello wafl"
