package com.webadmin.qa.page;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.webadmin.qa.base.Testbase;
import com.webadmin.qa.util.TestUtil;

public class AdminPage extends Testbase{
	
	
	//page factory for Admin Page
	
	//title "Administrative User Management"
	@FindBy(xpath="//*[text()='Administrative User Management']")
	WebElement admintitle;
	
	//title "Search by Name/Email ID"
	@FindBy(xpath="/html/body/div[1]/div/div[3]/div[2]/div/form/div/div[1]/div/h4")
	WebElement srhname;
	
	// title "Search by CDL#"
	@FindBy(xpath="/html/body/div[1]/div/div[3]/div[2]/div/form/div/div[3]/div/h4")
	WebElement srchcdl;

	@FindBy(className="dashboard-logo")
	WebElement occimg;
	
	@FindBy(id="btnAddUser")
	WebElement adduser;
	
	//xpath for LOGS link
	@FindBy(xpath="//*[@id=\"2\"]/a")
	WebElement logspage;
	
	
	//xpath for DVIR link
	@FindBy(xpath="//*[@id=\"3\"]/a")
	WebElement dvirpage;
	
	@FindBy(xpath="//*[@id=\"4\"]/a")
	WebElement hrsavailbydriver;
	
	@FindBy(xpath="//*[@id=\"5\"]/a")
	WebElement unassignedeventpage;
	
	
	//Creating the constructor this class. This will initiate all the elements
	public AdminPage() {
		PageFactory.initElements(driver, this);	
	}
	
	//Get titile
	public String TitleOfthepageAdmin() {
		driver.manage().timeouts().implicitlyWait(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		return driver.getTitle();
	}
	
	//to verify whether search by email address content
	public boolean SearchByNameandEmail() {
		return srhname.isDisplayed();
	}
	
	//To verify adduser and click, this return the Add user page
	public AddUserPage clickadduser() {	
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		adduser.click();
		return new AddUserPage();
	}
	
	//to verify the search by cdl content
	public boolean searchybycdl() {
		return srchcdl.isDisplayed();
	}
	
	//To verify the occ image on Admin page
	public boolean occimage() {
		return occimg.isDisplayed();
	}
	
	//Cicking Logs page link
	public LogsPage clickAdmin() {
		logspage.click();
		return new LogsPage() ;	
	}
	
	//Click dvir page
	public DvirPage clickDvir() {
		dvirpage.click();
		return new DvirPage();
	}
	
	//click hours available by drivers page
	public HoursAvailableByDriversPage hoursAvailablebyDrivers() {
		hrsavailbydriver.click();
		return new HoursAvailableByDriversPage();
	}
	
	// click Unassigned Driving Events page
	public UnassignedEventPage unassignedEvents() {
		unassignedeventpage.click();
		return new UnassignedEventPage();
	}
}
