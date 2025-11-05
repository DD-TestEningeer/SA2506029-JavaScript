

let num1 = [11, 22, 33]; // 1 D

let num2 = [44, 55, 66]; // 1 D

let twoDArray = [num1, num2];

console.log(twoDArray);


// How to access the Multidimensional array

console.log(twoDArray.at(0));
console.log(twoDArray.at(1));

console.log(twoDArray.at(0).at(0));
console.log(twoDArray.at(0).at(1));
console.log(twoDArray.at(1).at(0));


let m = twoDArray.at(0).length;
let n = twoDArray.at(1).length;

for(let i=0; i<m; i++){


    for(let j=0; j<n; j++){

console.log(twoDArray.at(i).at(j));

    }


}