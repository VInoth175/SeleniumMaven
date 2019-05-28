package com.webadmin.qa.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.webadmin.qa.base.Testbase;

public class AddUserPage extends Testbase {
	
	@FindBy(id="firstName")
	WebElement firstname;

	@FindBy(id="lastName")
	WebElement lastname;
	
	@FindBy(id="emailAddress")
	WebElement email;
	
	@FindBy(id="state")
	WebElement state;
	
	@FindBy(id="userRole")
	WebElement userrole;
	
	@FindBy(id="btnSave")
	WebElement UserSave;
	
	
	public AddUserPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void enteruserdetailadmin(String FirstName, String LastName , String Email, String Statename, String UserRole) {
		firstname.sendKeys(FirstName);
		lastname.sendKeys(LastName);
		email.sendKeys(Email);
		Select select = new Select(state);
		select.selectByVisibleText(Statename);
		Select select1 = new Select(userrole);
		select1.selectByVisibleText(UserRole);		
	}
	
	public void ClickSaveOnAddUser() {
		UserSave.click();
		
	}
	
	
}
