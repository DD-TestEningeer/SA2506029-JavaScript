// Working with objects in Javascript

const { type } = require("os");

// class MyParent{}

// MyParent obj = new MyParent(); in java

// +++++++++++++++++++++++++++++++++++++++++++++++++++

const employee = {
  emp_name: "DD",
  emp_id: 110,
  emp_status: true
};

console.log(typeof(employee));

console.log(employee);
console.log(employee.emp_id);
console.log(employee.emp_name);
console.log(employee.emp_status);