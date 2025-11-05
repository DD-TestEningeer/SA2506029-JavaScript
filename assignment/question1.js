

// Assignment 1: Factorial Calculator

// Task: Write a function to calculate the factorial of a given number.

//  5! => 5x4x3x2x1 => 120


let number = 5;
let factorial = 1;

for(let i=number; i>=1 ; i-- ){

    factorial = factorial * i;

}

console.log("The factorial of the number is : " + factorial);