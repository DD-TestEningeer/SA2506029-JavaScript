


// Assignment 4 : Testing Dropdown Functionality
// Task: Count Vowels in a String

let stringData = "abcdeeA";

let vowelsString = "aeiouAEIOU";

let count = 0;


for(let i=0 ; i<stringData.length; i++){

//  console.log(stringData.charAt(i));

if(vowelsString.includes(stringData.charAt(i))){

 count ++;

}

}


console.log("The count of vowels is : " + count);