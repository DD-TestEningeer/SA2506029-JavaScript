

// Assignment 3: Find the Largest Number

// Task: Write a function to find the largest number in an array.

let numbers = [11, 33, 22];

let largestNumber = numbers.at(0); // assumption
 
// iterate over the array 

for(let i=1; i<numbers.length ; i++){
    
    if(numbers.at(i)>largestNumber){

        largestNumber = numbers.at(i); 

    }

}


console.log("The largest number is : " + largestNumber);


