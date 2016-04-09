Feature: Run

  Scenario: Run a simple flow
    Given a "simple" flow
    When we set state to "{ a: 5, b: 4 }"
    And we run
    Then it should set "a" to "9" on state

  Scenario: Run a simple flow twice
    Given a "simple" flow
    And another "simple" flow
    When we set state to "{ a: 3, b: 4 }"
    And we run
    Then it should set "a" to "11" on state
