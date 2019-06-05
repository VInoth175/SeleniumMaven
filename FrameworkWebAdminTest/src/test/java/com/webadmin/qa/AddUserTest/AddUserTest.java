package com.webadmin.qa.AddUserTest;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.page.AddUserPage;
import com.webadmin.qa.page.AdminPage;
import com.webadmin.qa.page.LoginPage;
import com.webadmin.qa.util.TakeScreenshot;
import com.webadmin.qa.util.TestUtil;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;



public class AddUserTest extends Testbase {

	
	LoginPage loginpage;
	AdminPage adminpage;
	AddUserPage adduserpage;
	TakeScreenshot tss;
	
	
	
	@Before
	public void OpenBrowser() {
		initilialization();
		loginpage = new LoginPage();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		adminpage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		
		
	}
	
	
	@Given("click the Adduser button")
	public void click_the_Adduser_button() throws Exception {
		//driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		adduserpage = adminpage.clickadduser();		
	}

	@Then("Enter the user detail")
	public void enter_the_user_detail(List<Map<String, String>> UserDetails) throws Exception{
	//	if (UserDetails!= null) {
			for(Map<String, String> userDetail: UserDetails) {
		 	Thread.sleep(3000);
			adduserpage.enteruserdetailadmin(userDetail.get("FirstName"), userDetail.get("LastName"), userDetail.get("Email@"),
											userDetail.get("Phone#") ,userDetail.get("State"), userDetail.get("UserType"));
			Thread.sleep(3000);
			adduserpage.ClickSaveOnAddUser();
			Thread.sleep(3000);
			adduserpage.AddMoreUser();
		//	}
//		}else
//		{
			tss = new TakeScreenshot();
			tss.screehshot();
		}
	
	}
	
	@Then("Close the Browser")
	public void teardown() {
		
		driver.quit();
	}
	
	
}
