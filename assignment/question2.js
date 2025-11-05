


// Assignment 2: Array Sum

// Task: Write a function to calculate the sum of all elements in an array.


let numbers = [1, 2, 3, 4, 5];

let len = numbers.length;
let sum = 0;

for(let i=0; i<len ; i++){

    sum = sum + numbers.at(i);

}

console.log("The sum of array elements is : " + sum);