Feature: MDM Server Login
    Open MDM Server Instance
    and Login to the server

    Scenario Outline: Login to server
        Given Open the LoginPage
        When enter <username> and <password> and click login button
        Then user logged in successful and admin name <username> is visible
        Examples:
            |username| |password|
            |"rohan"| |"123456"|
