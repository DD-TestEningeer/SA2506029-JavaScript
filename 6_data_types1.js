


// Data Types in JavaScript 

// 1) Primitive - 

console.log("Primitive Data Types in JavaScript");

// 1) String 

let username = 'DemoUser'; // single quotes 

let password = "Pass@123"; // double quotes 

console.log("Username : " + username);
console.log("Password : " + password);

console.log(username + ' ' + password);

// typeof() - function is used to identify the type of variable
console.log("The datatype of username variable : " + typeof(username));
console.log("The datatype of password variable : " + typeof(password));


// 2) Number 

let testNumber = 100; // integer 
let passPercentage = 90.50; // decimal

console.log("The datatype of testNumber variable : " + typeof(testNumber));
console.log("The datatype of passPercentage variable : " + typeof(passPercentage));


// 3) BigInt

// let testCaseNumber = 123456789012345678901234567890n;
let testCaseNumber = 1234567890123; // regular int number 

console.log("The datatype of testCaseNumber variable : " + typeof(testCaseNumber));


// 4) Boolean => true or false

let flag = true;

flag = false;

console.log("The datatype of Boolean variable : " + typeof(flag));



// 5) undefined

let randomVar;

console.log("The datatype of random variable : " + typeof(randomVar));
console.log("The value of variable : " + randomVar);

// 6) null

let url = null;
console.log("The datatype of driver variable : " + typeof(url)); // historical bug/error
console.log("The value of variable : " + url);

// 7) Symbol 

let specialData = Symbol('Hello');

specialData = Symbol('Hello2');

console.log("The datatype of specialData variable : " + typeof(specialData)); 
console.log(specialData);

// e.g. 
    const myUniqueId = Symbol('testIdentifier');
    const anotherUniqueId = Symbol('testIdentifier');
    console.log(myUniqueId === anotherUniqueId); // false


// 2) Non-Primitive - Oject 

let make ="A";
let model = "B";

    console.log("Initial Value : " + make);
    console.log("Initial Value : " + model);

    const car = new Object();
    car.make = "Toyota";
    car.model = "Camry";

    console.log("Updated Value : " + car.make);
    console.log("updated Value " + car.model);


//     // Employee 
//     // emp_id, emp_name


//     let emp_id = 101;
//     let emp_name = "John Reddy";

//     const empObj = new Object(); // object creation 


// // object accessing - update values 
//     empObj.emp_id;
//     empObj.emp_name;








