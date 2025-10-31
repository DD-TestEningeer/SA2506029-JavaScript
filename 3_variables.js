// Variable in Javascript

// Local Variable
// Global Variable

var password = "Test@1234"; // global variable

console.log("This is outside of the function : " + password);

function myFunction() {
  // var  - keyword
  // let - keyword
  // const -keyword

  var username = "DemoUser"; // local variable

  console.log("This is inside the function : " + username);

  console.log("This is inside the function : " + password);
}


myFunction();


console.log(username); // ReferenceError: username is not defined
