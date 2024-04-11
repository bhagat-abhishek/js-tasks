// solutions:  array

const prompt = require("prompt-sync")();

// guest list
guestList = ["Abi", "Abby", "man", "sun"];

guestname = prompt("Enter your name: ");

isthere = guestList.includes(guestname);

if (isthere) {
  console.log("welcome to party");
} else {
  console.log("Sorry you are not invited");
}
