

// JSON.stringify() converts a JavaScript object back into a JSON string.
// Useful when sending data to a web server or saving test data in JSON format.

// JavaScript Object to Json String 


const userObj = {
    name : "Amol",
    age : 20,
    isWorking: false
}

console.log(typeof(userObj));

const jsonString = JSON.stringify(userObj);

console.log(jsonString);
console.log(typeof(jsonString));