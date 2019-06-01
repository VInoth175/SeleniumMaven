$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/qa/AddUserTest/AddUserTest.feature");
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
  "error_message": "java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteTimeouts cannot be cast to org.openqa.selenium.WebElement\r\n\tat com.webadmin.qa.page.AdminPage.clickadduser(AdminPage.java:75)\r\n\tat com.webadmin.qa.AddUserTest.AddUserTest.click_the_Adduser_button(AddUserTest.java:42)\r\n\tat ✽.click the Adduser button(file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/qa/AddUserTest/AddUserTest.feature:6)\r\n",
  "status": "failed"
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
        "Vinoths",
        "edl236",
        "8798709876",
        "2t1@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl2s7",
        "9876799787",
        "1eft@dk.com",
        "Admin",
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
  "status": "skipped"
});
formatter.step({
  "name": "Enter the user detail",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserTest.enter_the_user_detail(String,String\u003e\u003e)"
});
formatter.result({
  "status": "skipped"
});
});