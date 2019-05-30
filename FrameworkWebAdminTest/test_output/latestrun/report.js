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
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d74.0.3729.157)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027WINDOWS-T924NNG\u0027, ip: \u002710.0.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\WINDOWS\\TEMP\\scoped_dir3...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:65386}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.157, webStorageEnabled: true}\nSession ID: fe3a4b409b79d6c14727a6e583d4289f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.webadmin.qa.page.AdminPage.TitleOfthepageAdmin(AdminPage.java:61)\r\n\tat com.webadmin.qa.AdminPageTest.AdminPageTest.validate_the_title(AdminPageTest.java:34)\r\n\tat ✽.Validate the title(file:/C:/Users/Vinoth/git/repository1/FrameworkWebAdminTest/src/test/java/com/webadmin/qa/AdminPageTest/AdminPageTest.feature:6)\r\n",
  "status": "failed"
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
});