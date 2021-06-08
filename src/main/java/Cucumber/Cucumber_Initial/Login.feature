Feature: Facebook login Feature


@facebooklogin
@facebooksanity
Scenario Outline: Login Functionality Checking in Facebook 

Given User is already on Facebook Login Page
When Title of Login page should be "<Title>"
Then User enters with "<username>" and "<password>"
Then User clicks on Login button 
And User is on Home Page

Examples:
 | Title | username | password |
 | Facebook – log in or sign up | username1 | password1 |
 | Facebook – log in or sign up | username2 | password2 |
