package com.webadmin.qa.TestRunner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;

//Make sure to add this library otherwise "Cucumner.class" will through the error
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
//@ExtendedCucumberOptions(jsonReport = "json_output/cucumber.json",
//overviewReport = true,
//outputFolder = "target")

@CucumberOptions
	//features means where the test case and scenarios where written
	(features = "C:\\Users\\Vinoth\\git\\repository1\\FrameworkWebAdminTest\\src\\test\\java\\Example\\AddUserTest.feature", 
	//This is for step definition where the feature files methods are written
	glue= {"Example"}, 
	//if dryRun is true, it will verify whether the Feature files steps and methods are matching. If not matching, it wont execute the test case.
	//If we give false, it will execute even the steps and methods are not matching
	dryRun = false,
	//it will execute well and proper output
	monochrome=true,
	plugin= {"pretty", "html:test_output/latestrun", "json:json_output/cucumber.json", "junit:junit_output/cucumber.junit"})

public class TestRunner {

	
}



