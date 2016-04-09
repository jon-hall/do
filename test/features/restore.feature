Feature: Restore

  Scenario: Restore a single state change
    Given we use the "restore" plugin
    When we set state to "{ a: 5, b: 4 }"
    And we have a restore point "a"
    And we have a step which sets state to "{a: 'abc', b: { c: 6 } }"
    And we have a step which restores to point "a"
    And we run
    Then state should equal "{ a: 5, b: 4 }"
