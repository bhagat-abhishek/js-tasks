// solution : Conditional Statements
const prompt = require("prompt-sync")();

// Get user age
let userage = prompt("Enter a age: ");

// Check for conditionsF
if (userage <= 18) {
  console.log("You get a 20% discount");
} else if (userage > 18 && userage <= 65) {
  console.log("Normal tickets prices apply");
} else if (userage > 65) {
  console.log("You get a 30% discount");
} else {
  console.log("There's a system error");
}
