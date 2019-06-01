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
        "Vinoths",
        "edl236",
        "8798709876",
        "2et1@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl2s7",
        "9876799787",
        "1edft@dk.com",
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
  "status": "passed"
});
});