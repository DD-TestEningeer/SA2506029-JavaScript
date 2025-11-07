
// 1) push() - It will add element to array in the end

let results = ["Passed", "Failed"];
results.push("Skipped");
console.log(results); // Output: ["Passed", "Failed", "Skipped"]


// 2) unshift()
// Description: Adds an element to the beginning of an array.
// Use Case: Insert high-priority data or prepend values.

let tests = ["Test2", "Test3"];
tests.unshift("Test1");
console.log(tests); // Output: ["Test1", "Test2", "Test3"]


// 3. pop()
// Description: Removes the last element of an array.
// Use Case: Clean up or remove unwanted last test data.

let queue = ["Job1", "Job2", "Job3"];
queue.pop();
console.log(queue); // Output: ["Job1", "Job2"]


// 4. shift()
// Description: Removes the first element of an array.
// Use Case: Remove the first executed or processed test case.

let tasks = ["Setup", "Run", "Validate"];
tasks.shift();
console.log(tasks); // Output: ["Run", "Validate"]


// 5. splice()
// Description: Removes or replaces elements from a specific index.
// Use Case: Delete a failed test entry or modify a specific index.


let tests2 = ["Login", "Dashboard", "Logout"];


tests2.splice(1, 1); // Remove element at index 1


console.log(tests2); // Output: ["Login", "Logout"]


// 6. length
// Description: Returns the number of elements in an array.
// Use Case: Validate total number of records or results.


let logs = ["Start", "Run", "End"];
console.log(logs.length); // Output: 3

// 7. includes() (Array version)
// Description: Checks if an array contains a certain element.
// Use Case: Confirm expected values exist in an array of results.


let roles = ["Admin", "Tester", "Viewer"];
console.log(roles.includes("QA")); // Output: false


// forEach()
// Description: Executes a function once for each array element.
// Use Case: Iterate through test results or list of values.


let steps = ["Open App", "Login", "Validate Page"];

let logArray = [];

// iteration /loop
steps.forEach((step) => {
//   console.log("Executing Step:", step);
  logArray.push("Executing Step:" + step);
});


console.log(logArray);


// forEach()

// To iterate over the array elements 


let numbers = [11, 22, 33];

// 1 - for loop 


for(let i=0; i<numbers.length ; i++){

 console.log(numbers.at(i));

}


// 2 - using while loop 

let len = numbers.length;

let index = 0;
while(index<len){


    console.log(numbers.at(index));

    index++;


}

// forEach 


numbers = [44, 55 , 66]; // numbers


numbers.forEach(
    (num)=>{

     console.log(num);

    }
);