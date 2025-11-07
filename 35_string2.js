

// 1) charAt()
// Description: Returns the character at the specified index.
// Use Case: Validate or extract a specific character from a string.


let username = "tester123";

console.log(username.charAt(5)); // Output: r


// 2. concat()
// Description: Joins two or more strings.
// Use Case: Combine dynamic values like URLs or identifiers.


let base = "https://testsite.com";
let path = "/login";

let url = base.concat(path);



console.log(url); // Output: https://testsite.com/login


// 3. replace()
// Description: Replaces a part of the string with another value.
// Use Case: Modify test data or clean up extracted text.


let message = "Order ID: 12345";


let updated = message.replace("Order ID: ", "");

console.log(updated); // Output: 12345


// 4. split()
// Description: Splits a string into an array based on a separator.
// Use Case: Handle comma-separated or API-returned text data.

let data = "John,Jane,Mike";

let names = data.split(",");


console.log(names); // Output: ["John", "Jane", "Mike"]


let data2 = "test1 : test2 : test3";

let testArray = data2.split(":");

console.log(testArray);


// 5. toLowerCase()
// Description: Converts a string to lowercase.
// Use Case: Case-insensitive text comparison.


let status1 = "PASSED";
console.log(status1.toLowerCase()); // Output: passed



// 6. toUpperCase()
// Description: Converts a string to uppercase.
// Use Case: Standardize data for validation.


let status2 = "failed";
console.log(status2.toUpperCase()); // Output: FAILED



// 7. trim()
// Description: Removes spaces from both ends of a string.
// Use Case: Clean user input or UI text before checking it.


let input = "   Test Passed   ";
console.log(input);
console.log(input.trim()); // Output: Test Passed


// 8. includes()
// Description: Checks if a string contains a specific word or phrase.
// Use Case: Validate expected text is present in response or message.


let text = "Execution completed successfully";
// console.log(text.includes("successfully")); // Output: true

console.log(text.includes("failed")); // Output: false