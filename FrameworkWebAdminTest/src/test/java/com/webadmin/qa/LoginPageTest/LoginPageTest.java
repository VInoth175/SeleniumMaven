package com.webadmin.qa.LoginPageTest;

import org.junit.Assert;
import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.page.AdminPage;
import com.webadmin.qa.page.HomePage;
import com.webadmin.qa.page.LoginPage;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;



public class LoginPageTest extends Testbase {

	
	LoginPage loginpage;
	AdminPage adminpage;
	
//	//Create the Constructor of this class
//	public  LoginPageTest() {
//		//It will call the super call constructor: Testbase is our super class
//		super();
//		
//	}
//	
//	
//	public void setup() {
//		initilialization();
//	}
	
	@Given("Access and login to the WebAdmin")
	public void Access_and_login_to_the_WebAdmin() {
		initilialization();
		//Creating loginpage object for "LoginPage()" constructor
		loginpage = new LoginPage();
	}
	
	@Then("Validate page Logo")
	public void validate_page_Logo() {
		boolean Logo = loginpage.validatewebadminlogo();
		Assert.assertTrue(Logo);

	}

	@Then("Validate Page Titile")
	public void validate_Page_Titile() {
		String title = loginpage.validatepagetitle();
		Assert.assertEquals(title, "Sign in | Register");
		System.out.println("Test");
	}

	
	@Then("Validate the Login")
	public void Validate_the_Login() {
		//Calling the method login the variable we are taking from property file
		adminpage = loginpage.login(prop.getProperty("username"),prop.getProperty("password"));
		
	}
	
	
	@Then("Close the browser")
	public void Close_the_browser() {
	    driver.quit();
	}

	
}
