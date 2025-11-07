


class LoginPage { // class Name

  #username;  // private variable
  #password;  // private variable


setCredentials(user, pass) {   // initialization 

if(user!="" & pass!="") { // validation
this.#username = user;
this.#password = pass;

}  else{

    console.log("The username or password is empty");
}


}


login() { // function/method
console.log(`Logging in with: ${this.#username}`);
}



}



const login = new LoginPage();


login.setCredentials("TestUser", "pass123");


login.login(); 