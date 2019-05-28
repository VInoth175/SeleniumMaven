$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Selenium/Project/FrameworkWebAdminTest/src/test/java/Example/AddUser.feature");
formatter.feature({
  "name": "Adding new user",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify the add user scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "click the Adduser button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUserTest.click_the_Adduser_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the user detail",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Phone#",
        "Email@",
        "UserType",
        "State"
      ]
    },
    {
      "cells": [
        "Vinoth",
        "edl26",
        "8798709876",
        "test@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl27",
        "9876799787",
        "test@dk.com",
        "admin",
        "Illinois"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserTest.enter_the_user_detail(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate element with text: admin\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-T924NNG\u0027, ip: \u002710.0.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:147)\r\n\tat com.webadmin.qa.page.AddUserPage.enteruserdetailadmin(AddUserPage.java:42)\r\n\tat Example.AddUserTest.enter_the_user_detail(AddUserTest.java:52)\r\n\tat ✽.Enter the user detail(file:/C:/Selenium/Project/FrameworkWebAdminTest/src/test/java/Example/AddUser.feature:7)\r\n",
  "status": "failed"
});
});