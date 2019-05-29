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
	
	@FindBy(id="phoneNumber")
	WebElement phone;
	
	@FindBy(id="state")
	WebElement state;
	
	@FindBy(id="userRole")
	WebElement userrole;
	
	@FindBy(id="btnSave")
	WebElement UserSave;
	
	@FindBy(id="btnAddMoreUser")
	WebElement Addmoreuser;
	
	
	@FindBy(id="VehicleType")
	WebElement vehicletype;
	
	@FindBy(id="licenseNo")
	WebElement licenseNo;
	
	public AddUserPage() {
		PageFactory.initElements(driver, this);
	}
	
	public void enteruserdetailadmin(String FirstName, String LastName , String Email, String Phone, 
									String Statename, String UserRole, String Vehicletype, String Licenseno) {
		firstname.sendKeys(FirstName);
		lastname.sendKeys(LastName);
		email.sendKeys(Email);
		phone.sendKeys(Phone);
		Select select = new Select(state);
		select.selectByVisibleText(Statename);
		Select select1 = new Select(userrole);
		select1.selectByVisibleText(UserRole);			
		
	}
	
	public void ClickSaveOnAddUser() {
		UserSave.click();
		
	}
	
	public void AddMoreUser() {
		Addmoreuser.click();
	 
		
	}
	
	
}
