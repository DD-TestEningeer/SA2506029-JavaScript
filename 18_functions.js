

// functions => methods in java

// function - keyword

// function definition
function printUsername(){

    console.log("DemoUser");

}

// function calling
//  printUsername();


 // 2 function with parameters

 function printUsername2(username, password){

    console.log(username + " : " + password);
     console.log();

}

// printUsername2("Demo", "Pass");
// printUsername2("Demo2", "Pass2");

// 3 function with return type 

function getUsername(username){

    let text = "this is the username : " + username

    return text;

}

let myUsername = getUsername("TestUser");

console.log(myUsername);