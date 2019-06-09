$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/features/LoginPageTest.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "Access and login to the WebAdmin",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.access_and_login_to_the_WebAdmin()"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.webadmin.stepdefinition.LoginPageTest.access_and_login_to_the_WebAdmin(LoginPageTest.java:25)\r\n\tat ✽.Access and login to the WebAdmin(file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/features/LoginPageTest.feature:4)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "Validate page Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.validate_page_Logo()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate Page Titile",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.validate_Page_Titile()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate the Login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.validate_the_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});