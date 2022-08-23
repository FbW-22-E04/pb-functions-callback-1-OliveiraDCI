"use strict";
console.clear();

function greetMessage(str) {
  return `Good morning, ${str}`;
}

function greetUsers(arr, cb) {
  for (let name of arr) {
    console.log(cb(name));
  }
}

greetMessage("John"); // print "Good Morning, John"

greetUsers(["John", "Peter", "Mark"], greetMessage);
// "Good Morning, John"
// "Good Morning, Peter"
// "Good Morning, Mark"
