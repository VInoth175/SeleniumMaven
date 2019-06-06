package com.webadmin.qa.util;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.webadmin.qa.base.Testbase;

public class TakeScreenshot extends Testbase{

	public void screehshot() throws IOException
	{
		
	File SrcFile=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(SrcFile, new File("C:\\Users\\Vinoth\\git\\repository1\\FrameworkWebAdminTest\\target\\CaptureScreenshot"));
		
	}
	
}
