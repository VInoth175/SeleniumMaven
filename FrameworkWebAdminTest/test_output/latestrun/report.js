$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/qa/AdminPageTest/AdminPageTest.feature");
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
formatter.step({
  "name": "Open Web Admin website",
  "keyword": "Given "
});
formatter.match({
  "location": "AdminPageTest.open_Web_Admin_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the title",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_the_title()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate the Search By Name option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_the_Search_By_Name_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate Search By CDL option",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_Search_By_CDL_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validate OnCommand logo",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.validate_OnCommand_logo()"
});
formatter.result({
  "status": "passed"
});
});