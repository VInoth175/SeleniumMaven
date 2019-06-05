$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/qa/LoginPageTest/LoginPageTest.feature");
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
formatter.step({
  "name": "Access and login to the WebAdmin",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageTest.Access_and_login_to_the_WebAdmin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate page Logo",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.validate_page_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Page Titile",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.validate_Page_Titile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.Validate_the_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.Close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});