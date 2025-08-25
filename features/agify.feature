Feature: Agify API Testing
  As a QA Engineer
  I want to validate the Agify API
  So that I can ensure it behaves as expected

  Scenario: Get age for a valid name
    Given I send a GET request to "https://api.agify.io?name=billybob"
    Then the response status should be 200
    And the response should contain "name" as "billybob"
    And the response should contain a valid integer for "age"
    And the response should contain a non-negative integer for "count"

  Scenario: Handle short name input
    Given I send a GET request to "https://api.agify.io?name=a"
    Then the response status should be 200
    And the response should contain "name" as "a"

  Scenario: Handle numeric input
    Given I send a GET request to "https://api.agify.io?name=12345"
    Then the response status should be 200
    And the response should contain "name" as "12345"

  Scenario: Handle invalid parameter
    Given I send a GET request to "https://api.agify.io?nam=bob"
    Then the response status should be 422
    And the response should not contain "age"

  Scenario: Unsupported method POST
    When I send a POST request to "https://api.agify.io?name=bob"
    Then the response status should be 404
