Feature: share

  Background:
    Given "admin" sets the default folder for received shares to "Shares"
    And "Admin" disables share auto accepting

  Scenario: folder
    Given "Admin" creates following users
      | id    |
      | Alice |
      | Brian |
    When "Alice" logs in
    And "Alice" opens the "files" app
    And "Alice" navigates to the personal space page
    And "Alice" creates the following resources
      | resource         | type   |
      | folder_to_shared | folder |
    And "Alice" uploads the following resource
      | resource  | to               |
      | lorem.txt | folder_to_shared |
    #Then "Alice" should see the following resource
    #  | folder_to_shared/lorem.txt |
    When "Alice" shares the following resource using the sidebar panel
      | resource         | recipient | type | role   |
      | folder_to_shared | Brian     | user | editor |
    And "Brian" logs in
    And "Brian" opens the "files" app
    And "Brian" navigates to the shared with me page
    And "Brian" accepts the following share
      | name             |
      | folder_to_shared |
    And "Brian" navigates to the personal space page
    And "Brian" renames the following resource
      | resource                          | as            |
      | Shares/folder_to_shared/lorem.txt | lorem_new.txt |
    And "Brian" uploads the following resource
      | resource   | to                      |
      | simple.pdf | Shares/folder_to_shared |
    And "Brian" copies the following resource
      | resource                | to       |
      | Shares/folder_to_shared | Personal |
    When "Alice" opens the "files" app
    #Then "Alice" should see the following resources
    #  | folder_to_shared/lorem_new.txt |
    #  | folder_to_shared/simple.pdf    |
    And "Alice" uploads the following resource
      | resource          | to               | option  |
      | PARENT/simple.pdf | folder_to_shared | replace |
    #Then "Alice" should see that the resource "folder_to_shared/simple.pdf" has 1 version
    And "Brian" downloads old version of the following resource
      | resource   | to                      |
      | simple.pdf | Shares/folder_to_shared |
    When "Brian" restores following resources
      | resource   | to                      | version |
      | simple.pdf | Shares/folder_to_shared | 1       |
    #Then "Brian" should see that the version of resource "simple.pdf" has been restored
    When "Alice" deletes the following resources
      | resource                       |
      | folder_to_shared/lorem_new.txt |
      | folder_to_shared               |
    And "Alice" logs out
    And "Brian" opens the "files" app
    #Then "Brian" should not see the following resource
    #  | Shares/folder_to_shared |
    And "Brian" logs out

  Scenario: file
    Given "Admin" creates following users
      | id    |
      | Alice |
      | Brian |
    When "Alice" logs in
    And "Alice" opens the "files" app
    And "Alice" creates the following resources
      | resource         | type   |
      | folder_to_shared | folder |
    And "Alice" uploads the following resource
      | resource        | to               |
      | testavatar.jpeg | folder_to_shared |
    And "Alice" shares the following resource using the quick action
      | resource                         | recipient | type | role   |
      | folder_to_shared/testavatar.jpeg | Brian     | user | viewer |
    And "Brian" logs in
    And "Brian" opens the "files" app
    And "Brian" navigates to the shared with me page
    And "Brian" accepts the following share
      | name            |
      | testavatar.jpeg |
    And "Brian" navigates to the personal space page
    And "Brian" copies the following resource
      | resource               | to       |
      | Shares/testavatar.jpeg | Personal |
    And "Brian" downloads the following resource using the sidebar panel
      | resource        | from   |
      | testavatar.jpeg | Shares |
    And "Alice" updates following sharee role
      | resource                         | recipient | role   |
      | folder_to_shared/testavatar.jpeg | Brian     | editor |
    And "Brian" renames the following resource
      | resource               | as                  |
      | Shares/testavatar.jpeg | testavatar_new.jpeg |
    And "Alice" removes following sharee
      | resource                         | recipient |
      | folder_to_shared/testavatar.jpeg | Brian     |
    And "Alice" logs out
    When "Brian" opens the "files" app
    #Then "Brian" should not see the following resource
    #  | Shares/testavatar_new.jpeg |
    #But "Brian" should see the following resource
    #  | testavatar.jpeg |
    And "Brian" logs out
