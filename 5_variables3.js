
var username = "Demo";

// reassignment 

username = "Demo2";

// redeclaration 

var username = "Demo3";

console.log(username);

// ================================== let keyword ============


let password = "Test";

// re-assignment

password = "Test123";

// re-declaration

// let password = "Test1234556"; // this will gives error 


console.log(password);


const url = "www.google.com";

// reassignment 
// url = "www.amazon.com";  // TypeError: Assignment to constant variable.

// re-declaration
// const url = "www.yahoo.com"; // Cannot redeclare block-scoped variable 'url'.ts(2451)

