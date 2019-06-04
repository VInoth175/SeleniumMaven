package com.webadmin.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.webadmin.qa.util.TestUtil;

//This is the Parent class
public class Testbase {

	
    public static WebDriver driver;
	public static Properties prop;
	
	
	
	//Constructor of Testbase class
	// After writing the FileInputstream class, select all codes and surround with try catch. So that we can use this constructor in child class.
	public Testbase()   {
		
		try {
			//reading the properties file located in property package
			prop = new Properties(); //Initializing the prop variable
			
			//C:\Users\Vinoth\git\repository1\FrameworkWebAdminTest\src\main\java\com\webadmin\qa\config\config.properties
			//C:\\Selenium\\Project\\FrameworkWebAdminTest\\src\\main\\java\\com\\webadmin\\qa\\config\\config.properties
			FileInputStream ip = new FileInputStream("C:\\Users\\Vinoth\\git\\repository1\\FrameworkWebAdminTest\\src\\main\\java\\com\\webadmin\\qa\\config\\config.properties");
			prop.load(ip);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	//Initialization method
	public static void initilialization() {
		
		//Read the Browser from property file
		String browserName = prop.getProperty("browser");
		
		if (browserName.equals("chrome"))
				{
				System.setProperty("webdriver.chrome.driver", "C:\\chromedriver_win32\\chromedriver.exe");
				driver = new ChromeDriver();
				}else if (browserName.equals("Firefox"))
					{
					//System.setProperty("webdriver.gecko.driver", "C:\\chromedriver_win32\\chromedriver.exe");
					driver = new FirefoxDriver();
					}
		
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
		
		driver.get(prop.getProperty("url"));
	//	System.out.println("Test");
		
		
	}
	
	
}
