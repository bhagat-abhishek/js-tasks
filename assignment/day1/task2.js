//  variables: const and vars
const prompt = require("prompt-sync")();

// Cet User input
let length = prompt("Provide length: ");
let width = prompt("Provide width: ");

function calcuateAreaofRectangle(length, width) {
  return length * width;
}

area = calcuateAreaofRectangle(length, width);

console.log(`The area of rectangle is ${area}`);
