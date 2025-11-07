

class BasePage { // Parent Class

  navigateTo(url) {  // parent method 
    console.log(`Navigating to: ${url}`);
  }

}




class LoginPage  extends BasePage{ // child class

login() { // child class method
console.log("Performing login...");
}



}



// Object Creation
const login = new LoginPage();



login.navigateTo("https://testsite.com"); // parent method 
login.login(); // child method