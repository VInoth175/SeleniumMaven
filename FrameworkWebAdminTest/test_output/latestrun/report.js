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
  "error_message": "java.lang.IllegalStateException: The path to the driver executable must be set by the webdriver.gecko.driver system property; for more information, see https://github.com/mozilla/geckodriver. The latest version can be downloaded from https://github.com/mozilla/geckodriver/releases\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:847)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:134)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService.access$100(GeckoDriverService.java:44)\r\n\tat org.openqa.selenium.firefox.GeckoDriverService$Builder.findDefaultExecutable(GeckoDriverService.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.toExecutor(FirefoxDriver.java:190)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:147)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:125)\r\n\tat com.webadmin.qa.base.Testbase.initilialization(Testbase.java:59)\r\n\tat com.webadmin.qa.AddUserTest.AddUserTest.OpenBrowser(AddUserTest.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:42)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:123)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:65)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat cucumber.api.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:147)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
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
        "21yg@123.com",
        "Admin",
        "Alaska"
      ]
    },
    {
      "cells": [
        "vin",
        "edl2s7",
        "9876799787",
        "1etj@dk.com",
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