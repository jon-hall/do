Feature: Run

  Scenario: Run a simple flow
    Given a "simple" flow
    When we run it with "{ a: 5, b: 4 }" state
    Then it should set "a" to "9" on state

  Scenario: Run a simple flow twice
    Given a "simple" flow
    And another "simple" flow
    When we run it with "{ a: 3, b: 4 }" state
    Then it should set "a" to "11" on state
