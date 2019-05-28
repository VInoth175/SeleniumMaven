package com.webadmin.qa.TestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;

//Make sure to add this library otherwise "Cucumner.class" will through the error
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions
	//features means where the test case and scenarios where written
	(features = "C:\\Users\\Vinoth\\git\\repository1\\FrameworkWebAdminTest\\src\\test\\java\\com\\webadmin\\qa\\featurefile", 
	//This is for step definition where the feature files methods are written
	glue= {"com.webadmin.qa.testcases"}, 
	//if dryRun is true, it will verify whether the Feature files steps and methods are matching. If not matching, it wont execute the test case.
	//If we give false, it will execute even the steps and methods are not matching
	dryRun = false,
	//it will execute well and proper output
	monochrome=true,
	plugin= {"pretty", "html:test_output/latestrun", "json:json_output/cucumber.json", "junit:junit_output/cucumber.junit"})

public class TestRunner {

	
}



