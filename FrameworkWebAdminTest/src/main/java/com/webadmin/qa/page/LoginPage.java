package com.webadmin.qa.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.webadmin.qa.base.Testbase;

public class LoginPage extends Testbase{
	
	//Page Factory or Object repository of Login page
	
	//Page Element - Web Admin On Command Logo
	@FindBy(xpath = "//img[contains(@class, 'center-block img-navistar-logo')]")
	WebElement OnCommandlogo;
	
	//Page Element - Web Admin Main Sign In button
	@FindBy(xpath="/html/body/div[1]/div/div[2]/div[2]/div/div/fieldset/div/div/div[1]/div/a")
	WebElement WebAdminSignIn;
	
	//Page Element - B2C Email Address
	@FindBy(id="logonIdentifier")
	WebElement b2cemail;
	
	//Page Element - B2C Password
	@FindBy(id="password")
	WebElement b2cpassword;

	//Page Element - B2C SignIn button
	@FindBy(id="next")
	WebElement b2cSignIn;
	
	//Page Element - B2C Forget Your Password
	@FindBy(id="forgotPassword")
	WebElement b2cForgetPassword;
	
	
	//To Initialize all the above object repository or Page Elements, need to create the constructor
	
	public LoginPage()
	{
		//This is the class to initiate the elements
		//Here "this" means, its pointed to current we elements class. Instead of "this", we can also write class name"LoginPage.class"
		PageFactory.initElements(driver, this);
	}
	
	
	//Define the different action available on Login page
	//Validate the title
	public String validatepagetitle() {
		return driver.getTitle();	
	}
	
	//Validate Oncommand logo
	public boolean validatewebadminlogo() {
		return OnCommandlogo.isDisplayed();//If available it will return true; if not, it will return false
	}
	
	
	//Login to Web Admin
	//Taking 2 variable
	//This method will return Admin page
	public AdminPage login(String username, String password) {
		WebAdminSignIn.click();//Clicking on SignIn button
		b2cemail.sendKeys(username); //Entering username which received from property file
		b2cpassword.sendKeys(password); //like above, its a password
		b2cSignIn.click();//clicking b2c signin
		
		//After clicking Login button, the page is redirecting to Admin page. So we are returning Admin page
		return new AdminPage();
		
	}
	
}
