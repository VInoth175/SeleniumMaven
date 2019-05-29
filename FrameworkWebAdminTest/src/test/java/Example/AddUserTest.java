package Example;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.page.AddUserPage;
import com.webadmin.qa.page.AdminPage;
import com.webadmin.qa.page.LoginPage;

import cucumber.api.DataTable;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class AddUserTest extends Testbase {

	
	LoginPage loginpage;
	AdminPage adminpage;
	AddUserPage adduserpage;
	
	
	
	@Before
	public void OpenBrowser() {
		initilialization();
		loginpage = new LoginPage();
		adminpage = loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
		
	}
	
	
	@Given("click the Adduser button")
	public void click_the_Adduser_button() throws Exception {
		Thread.sleep(5000);
		adduserpage = adminpage.clickadduser();
		

	}

	@Then("Enter the user detail")
	public void enter_the_user_detail(List<Map<String, String>> UserDetails) throws Exception
	{
		
	 for(Map<String, String> userDetail: UserDetails) {
		 
		 	Thread.sleep(3000);
			adduserpage.enteruserdetailadmin(userDetail.get("FirstName"), userDetail.get("LastName"), userDetail.get("Email@"),
											userDetail.get("Phone#") ,userDetail.get("State"), userDetail.get("UserType"),
											userDetail.get("VehicleType"),userDetail.get("LicenseNo") );
			adduserpage.ClickSaveOnAddUser();
			adduserpage.AddMoreUser();
			Thread.sleep(5000);
			
	 	}

		
	}
	
	
}
