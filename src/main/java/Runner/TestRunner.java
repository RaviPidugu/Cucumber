package Runner;

import org.junit.runner.RunWith;
import org.testng.annotations.DataProvider;
//import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.*;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\workspacee\\Cucumber_Initial\\src\\main\\java\\Cucumber\\Cucumber_Initial\\Login.feature",
		glue={"StepDefinition"},
		format={"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
				strict=true,
				dryRun=false,
				monochrome=true,
				tags={"@facebooklogin"}
		
		)

public class TestRunner extends AbstractTestNGCucumberTests {

    @Override
    @DataProvider(parallel = true)
    public Object[][] scenarios() {
        return super.scenarios();
    }
}
