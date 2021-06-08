$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/workspacee/Cucumber_Initial/src/main/java/Cucumber/Cucumber_Initial/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login Feature",
  "description": "",
  "id": "facebook-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login Functionality Checking in Facebook",
  "description": "",
  "id": "facebook-login-feature;login-functionality-checking-in-facebook",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@facebooklogin"
    },
    {
      "line": 5,
      "name": "@facebooksanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is already on Facebook Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Title of Login page should be \"\u003cTitle\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "facebook-login-feature;login-functionality-checking-in-facebook;",
  "rows": [
    {
      "cells": [
        "Title",
        "username",
        "password"
      ],
      "line": 15,
      "id": "facebook-login-feature;login-functionality-checking-in-facebook;;1"
    },
    {
      "cells": [
        "Facebook – log in or sign up",
        "username1",
        "password1"
      ],
      "line": 16,
      "id": "facebook-login-feature;login-functionality-checking-in-facebook;;2"
    },
    {
      "cells": [
        "Facebook – log in or sign up",
        "username2",
        "password2"
      ],
      "line": 17,
      "id": "facebook-login-feature;login-functionality-checking-in-facebook;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Login Functionality Checking in Facebook",
  "description": "",
  "id": "facebook-login-feature;login-functionality-checking-in-facebook;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@facebooklogin"
    },
    {
      "line": 5,
      "name": "@facebooksanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is already on Facebook Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Title of Login page should be \"Facebook – log in or sign up\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters with \"username1\" and \"password1\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.User_already_on_Login_Page()"
});
formatter.result({
  "duration": 109018636356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook – log in or sign up",
      "offset": 31
    }
  ],
  "location": "StepDefinition.title_of_Login_is_Facebook_with(String)"
});
formatter.result({
  "duration": 66427760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username1",
      "offset": 18
    },
    {
      "val": "password1",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_enters_with_and(String,String)"
});
formatter.result({
  "duration": 1301495014,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 393952094,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Login Functionality Checking in Facebook",
  "description": "",
  "id": "facebook-login-feature;login-functionality-checking-in-facebook;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@facebooklogin"
    },
    {
      "line": 5,
      "name": "@facebooksanity"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is already on Facebook Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Title of Login page should be \"Facebook – log in or sign up\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enters with \"username2\" and \"password2\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.User_already_on_Login_Page()"
});
formatter.result({
  "duration": 107147709869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook – log in or sign up",
      "offset": 31
    }
  ],
  "location": "StepDefinition.title_of_Login_is_Facebook_with(String)"
});
formatter.result({
  "duration": 585592104,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d84.0.4147.135)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAVI\u0027, ip: \u0027192.168.1.9\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.135, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\Kiran\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55164}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 891d668205f843cc2b60f353706470db\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat StepDefinition.StepDefinition.title_of_Login_is_Facebook_with(StepDefinition.java:31)\r\n\tat ✽.When Title of Login page should be \"Facebook – log in or sign up\"(C:/workspacee/Cucumber_Initial/src/main/java/Cucumber/Cucumber_Initial/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "username2",
      "offset": 18
    },
    {
      "val": "password2",
      "offset": 34
    }
  ],
  "location": "StepDefinition.user_enters_with_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});