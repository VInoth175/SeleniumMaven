package com.webadmin.adminPageTestcase;

import org.junit.Assert;
import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.page.AdminPage;
import com.webadmin.qa.page.LoginPage;
import com.webadmin.qa.util.TestUtil;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AdminPageTest extends Testbase{
	
	LoginPage loginpage;
	AdminPage adminpage;
	
	public AdminPageTest() {
		super();	
	}
	
		@Given("Open Web Admin website")
		public void open_Web_Admin_website() {
			initilialization();
			loginpage = new LoginPage();
			//loginpage.login return admin page. So creating the object adminpage
			adminpage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		}
		
		// Here we are initialize the browser and login to the web site
		@Then("Validate the title")
		public void validate_the_title() throws Exception {
			Thread.sleep(5000);
			String title = adminpage.TitleOfthepageAdmin();
			System.out.println(title);
			Assert.assertEquals(title,"Administrative User Management");	
		}
		
		@Then ("Validate the Search By Name option")
		public void validate_the_Search_By_Name_option() {
			boolean srchname = adminpage.SearchByNameandEmail();
			Assert.assertTrue(srchname);
		}
		
		@Then("Validate Search By CDL option")
		public void validate_Search_By_CDL_option() {
			boolean srchcdl = adminpage.searchybycdl();
			Assert.assertTrue(srchcdl);
		}
		
		@Then("Validate OnCommand logo")
		public void validate_OnCommand_logo() {
			boolean occimg = adminpage.occimage();
			Assert.assertTrue(occimg);
		
		}
		
		@Then("Close the browser")
		public void close_the_browser() {
			driver.quit();
		
		}

}
