


class Report { // Parent Class


  generate() {
    console.log("Generating basic report...");
  }


  test1(){

       console.log("Generating test data for parent class...");
  }


}


class DetailedReport extends Report {

generate() {
console.log("Generating detailed report with test data...");
}


  test1(){

       console.log("Generating test data for child class...");
  }


}









const basic = new Report(); // Parent Class
basic.test1();




const detailed = new DetailedReport(); // Child Class

detailed.test1();



// basic.generate();     // Output: Generating basic report...
// detailed.generate();  // Output: Generating detailed report with test data...