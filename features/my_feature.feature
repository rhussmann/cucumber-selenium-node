Feature: Providing an example Google search
  As someone interested in doing automated integration testing
  In order to learn more about selenium and cucumber in Javascript
  I want to be able to perform an example Google search

  Scenario: Google cucumber search
    When I search Google for "Ricky Hussmann"
    Then I should see some results
