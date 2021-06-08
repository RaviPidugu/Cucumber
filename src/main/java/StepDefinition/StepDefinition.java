package StepDefinition;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition 
{
	
		WebDriver driver;
		@Given("^User is already on Facebook Login Page$")
		public void User_already_on_Login_Page()
		{
			 System.setProperty("webdriver.chrome.driver", "D://chromedriver.exe");
			 driver=new ChromeDriver();
			driver.get("https://www.facebook.com/");
			
		}
		
        @When("^Title of Login page should be \"([^\"]*)\"$")
         public void title_of_Login_is_Facebook_with(String title) throws Throwable 
        {
        		 Assert.assertEquals(driver.getTitle(),title);
        }
        @Then("^User enters with \"([^\"]*)\" and \"([^\"]*)\"$")
        public void user_enters_with_and(String user, String pass) throws Throwable 
        {
           
        	WebElement username=driver.findElement(By.xpath("//input[@id='email']"));
			WebElement password=driver.findElement(By.xpath("//input[@type='password']"));
			username.sendKeys(user);
			password.sendKeys(pass);
			password.getCssValue("text-decoration");
        }
  
		@When ("^User clicks on Login button$")
		public void user_clicks_on_Login_button()
		{
			
			WebElement login=driver.findElement(By.xpath("//button[@name='login']"));
			login.click();
			
		}
		/*
		@And("^User is on Home Page$")
		public void User_is_on_home_Page()
		{
			
			driver.close();
		}*/
}
