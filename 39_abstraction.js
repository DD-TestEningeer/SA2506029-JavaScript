
class TestExecution {



  runTest() {
    this.setup();
    this.execute();
    this.cleanup();
  }



setup() {
console.log("Setting up test environment...");
}



execute() {
console.log("Executing test case...");
}


cleanup() {
console.log("Cleaning up after test...");
}



}





const test = new TestExecution();
test.runTest();

// test.setup();
// test.execute();
// test.cleanup();