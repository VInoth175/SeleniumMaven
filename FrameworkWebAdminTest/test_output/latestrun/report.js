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
        "211wlspyg@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl2s7",
        "9876799787",
        "1e1t4dpej@dk.com",
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
formatter.step({
  "name": "Enter the user detail",
  "keyword": "Then "
});
formatter.match({
  "location": "AddUserTest.enter_the_user_detail(String,String\u003e\u003e)"
});
formatter.result({
  "error_message": "cucumber.runtime.CucumberException: Step [Enter the user detail] is defined with 1 parameters at \u0027com.webadmin.stepdefinition.AddUserTest.enter_the_user_detail(String,String\u003e\u003e) in file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/target/test-classes/\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: Enter the user detail\r\n\tat cucumber.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:84)\r\n\tat cucumber.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:36)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:43)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:46)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:365)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeWithRerun(JUnit4Provider.java:273)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:238)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:159)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:384)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:345)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.execute(ForkedBooter.java:126)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:418)\r\n",
  "status": "failed"
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
  "status": "passed"
});
formatter.step({
  "name": "Open Web Admin website",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the title",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate the Search By Name option",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate Search By CDL option",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Validate OnCommand logo",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "status": "passed"
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