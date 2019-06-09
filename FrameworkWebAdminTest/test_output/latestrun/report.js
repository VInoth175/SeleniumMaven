$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:AddUserTest.feature");
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
  "status": "skipped"
});
formatter.step({
  "name": "click the Adduser button",
  "keyword": "Given "
});
formatter.match({
  "location": "AddUserTest.click_the_Adduser_button()"
});
formatter.result({
  "status": "skipped"
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
        "21wlsdpg@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl2s7",
        "9876799787",
        "1e1tdp@dk.com",
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
formatter.uri("file:AdminPageTest.feature");
formatter.feature({
  "name": "Verify the Admin Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate Admin page",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Open Web Admin website",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminPageTest.open_Web_Admin_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the title",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_the_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the Search By Name option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_the_Search_By_Name_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate Search By CDL option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_Search_By_CDL_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate OnCommand logo",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_OnCommand_logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:LoginPageTest.feature");
formatter.feature({
  "name": "validate Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify the login functionality",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "Access and login to the WebAdmin",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate page Logo",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate Page Titile",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the Login",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});