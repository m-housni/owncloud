Feature: Search in the project space

  Scenario: Search in the project spaces
    Given "Admin" creates following users
      | id    |
      | Alice |
    And "Admin" assigns following roles to the users
      | id    | role       |
      | Alice | SpaceAdmin |
    When "Alice" logs in
    And "Alice" opens the "files" app
    And "Alice" navigates to the projects space page
    And "Alice" creates the following project spaces
      | name | id     |
      | team | team.1 |
    And "Alice" navigates to the project space "team.1"
    And "Alice" creates the following resources
      | resource                   | type   |
      | folder(WithSymbols:!;_+-&) | folder |
    And "Alice" uploads the following resources
      | resource               | to                         |
      | new-'single'quotes.txt | folder(WithSymbols:!;_+-&) |
    And "Alice" navigates to the personal space page

    # search for project space objects
    When "Alice" searches "-'s" using the global search
    Then following resources should be displayed in the search list for user "Alice"
      | resource               |
      | new-'single'quotes.txt |
    But following resources should not be displayed in the search list for user "Alice"
      | resource                   |
      | folder(WithSymbols:!;_+-&) |
    When "Alice" searches "!;_+-&)" using the global search
    Then following resources should be displayed in the search list for user "Alice"
      | resource                   |
      | folder(WithSymbols:!;_+-&) |
    But following resources should not be displayed in the search list for user "Alice"
      | resource               |
      | new-'single'quotes.txt |
    And "Alice" logs out
