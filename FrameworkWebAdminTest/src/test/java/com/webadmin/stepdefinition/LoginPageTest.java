package com.webadmin.stepdefinition;

import org.junit.Assert;

import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.page.AdminPage;
import com.webadmin.qa.page.CarrierInformationPage;
import com.webadmin.qa.page.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class LoginPageTest extends Testbase{
	
	LoginPage loginpage;
	AdminPage adminpage;
	CarrierInformationPage carrierinfopage;
	
	@Given("Access and login to the WebAdmin")
	public void access_and_login_to_the_WebAdmin() {
	    initilialization();
		loginpage = new LoginPage();
		adminpage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));

	}

	@Then("Validate page Logo")
	public void validate_page_Logo() {
	   boolean logo = loginpage.validatewebadminlogo();
	   Assert.assertTrue(logo);

	}

	@Then("Validate Page Titile")
	public void validate_Page_Titile() {
	    String title = loginpage.validatepagetitle();
	    Assert.assertEquals(title, title.contains("Admin"));

	}

	@Then("Validate the Login")
	public void validate_the_Login() {
	    adminpage.clickUserProfile();
	    carrierinfopage.clickcarriersetting();
	    String carrierEmail = carrierinfopage.readcarrieremail();
	    Assert.assertEquals(prop.getProperty("username"), carrierEmail);
	    
	    throw new cucumber.api.PendingException();
	}

	@Then("Close the browser")
	public void close_the_browser() {
	    driver.close();

	}


}
