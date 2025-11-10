

// Received JSON string from API response
const response = '{"userId": 101, "name": "Amit", "status": "active"}';

// Convert (parse) JSON string into JavaScript object
const userData = JSON.parse(response);

// Now you can verify specific fields from the response
console.log(userData.userId);  // Output: 101
console.log(userData.name);    // Output: Amit
console.log(userData.status);  // Output: active

// QA validation (example checks)
if (userData.status === "active") {
  console.log("Test Passed: User is active.");
} else {
  console.log("Test Failed: User status mismatch.");
}