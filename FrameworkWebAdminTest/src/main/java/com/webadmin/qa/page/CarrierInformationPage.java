package com.webadmin.qa.page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.webadmin.qa.base.Testbase;

public class CarrierInformationPage extends Testbase{

	
	@FindBy(id="emailAddress")
	WebElement carrieremail;
	
	@FindBy(xpath="//a[contains(@href ='/WebAdminFmcsa/Company/Edit/')]")
	WebElement carriersetting;
	
	
	public String readcarrieremail() {
		return carrieremail.getText();	
	}
	
	
	public CarrierInformationPage clickcarriersetting() {
		carriersetting.click();
		return new CarrierInformationPage();
		
	}
	
}
