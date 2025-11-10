
function User(name) {
  this.name = name;
}

// it will share the same copy across all the objects

User.prototype.greet = function() {
  console.log("Hello " + this.name);
};


// create the new copy of function for each object 
// function greet() {
//   console.log("Hello " + this.name);
// };

let u1 = new User("Amit");
let u2 = new User("Priya");

u1.greet(); // Hello Amit
u2.greet(); // Hello Priya