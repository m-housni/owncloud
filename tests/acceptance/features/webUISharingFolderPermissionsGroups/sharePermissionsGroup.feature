@ocis-issue-1277 @ocis-issue-2260
Feature: Sharing folders with internal groups with different roles and permissions
  As a user
  I want to set different permissions on shared folders with groups
  So that I can control the access on those folders by other users on the group

  Background:
    Given the setting "shareapi_auto_accept_share" of app "core" has been set to "no" in the server
    And the administrator has set the default folder for received shares to "Shares" in the server
    And these users have been created with default attributes and without skeleton files in the server:
      | username |
      | Alice    |
      | Brian    |
      | Carol    |
    And these groups have been created in the server:
      | groupname |
      | grp1      |
      | grp2      |
    And user "Brian" has been added to group "grp1" in the server
    And user "Carol" has been added to group "grp2" in the server


  Scenario Outline: share a folder with multiple groups with different roles and permissions
    Given user "Alice" has created folder "simple-folder" in the server
    And user "Alice" has logged in using the webUI
    When the user opens the share dialog for folder "simple-folder" using the webUI
    And the user selects the following collaborators for the share as "<role>" with "<extra-permissions>" permissions:
      | collaborator | type  |
      | grp1         | group |
      | grp2         | group |
    And the user shares with the selected collaborators
    And user "Brian" accepts the share "Shares/simple-folder" offered by user "Alice" using the sharing API in the server
    And user "Carol" accepts the share "Shares/simple-folder" offered by user "Alice" using the sharing API in the server
    Then custom permissions "<displayed-permissions>" should be set for group "grp2" for folder "simple-folder" on the webUI
    And custom permissions "<displayed-permissions>" should be set for group "grp1" for folder "simple-folder" on the webUI
    And group "grp2" should be listed as "<displayed-role>" in the collaborators list for folder "simple-folder" on the webUI
    And group "grp1" should be listed as "<displayed-role>" in the collaborators list for folder "simple-folder" on the webUI
    And user "Brian" should have received a share with these details in the server:
      | field       | value                 |
      | uid_owner   | Alice                 |
      | share_with  | grp1                  |
      | file_target | /Shares/simple-folder |
      | item_type   | folder                |
      | permissions | <actual-permissions>  |
    And user "Carol" should have received a share with these details in the server:
      | field       | value                 |
      | uid_owner   | Alice                 |
      | share_with  | grp2                  |
      | file_target | /Shares/simple-folder |
      | item_type   | folder                |
      | permissions | <actual-permissions>  |
    Examples:
      | role               | displayed-role     | extra-permissions             | displayed-permissions         | actual-permissions           |
      | Viewer             | Viewer             | ,                             | share                         | read, share                  |
      | Editor             | Editor             | ,                             | delete, update, create, share | all                          |
      | Custom permissions | Custom permissions | ,                             | ,                             | read                         |
      | Custom permissions | Viewer             | share                         | share                         | read, share                  |
      | Custom permissions | Custom permissions | delete, update, create        | delete, update, create        | read, delete, update, create |
      | Custom permissions | Editor             | share, delete, update, create | delete, update, create, share | all                          |
