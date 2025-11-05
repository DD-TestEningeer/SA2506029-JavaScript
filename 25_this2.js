


// Use of this keyword in Javascript 


const tester = {
    name : "DemoTester",
    password : "Test@1234",
    testing : function (){

        console.log("I'm performing regression testing");
        console.log(`Username is : ${this.name}`);
        console.log(`Password is : ${this.password}`);
    }

}


tester.testing();

console.log(tester.name);