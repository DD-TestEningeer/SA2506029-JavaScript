


const json = '{"result": true, "count": 42}';

console.log(typeof(json));


const obj = JSON.parse(json);

console.log(typeof(obj));

console.log(obj.count);  // Output: 42
console.log(obj.result); // Output: true