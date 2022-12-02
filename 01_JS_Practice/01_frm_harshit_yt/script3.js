"use strict";
// FUNCTIONS
// Set of statements used to perform some task
// Create a function to print Happy Birthday
function singHappyBirthday() {
  console.log("Happy birthday");
}
singHappyBirthday(); // Happy Birthday

// Function to add 2+4
function twoPlusFour() {
  console.log(2 + 4);
}
twoPlusFour(); // 6

// Functions need to be re-usable
// Create a function to add any 2 numbers
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(1, 1)); // 2
// note: if u do not pass anything => NaN
// - if u pass only 1 arg instead of 2 => number+undefined => NaN

// Function which returns true if odd
function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(1)); // isOdd(1) will not give any o/p, we need to store it/log it.

// Function
// input: string
// output: first char
function firstChar(anyString) {
  return anyString[0];
}
console.log(firstChar("lakhan")); // l

// Function
// i/p=> array,target[no]
// o/p => index of target if present in array
function findTarget(array, target) {
  //   for (let arr of array) {
  //     if (target === arr) {
  //       return ` Target is present in the ${array.indexOf(arr)} index of array`;
  //     } else {
  //       return "target not present in the given array";
  //     }
  //   }
  // // another method
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === target) {
      return i;
    } else {
      return "not present";
    }
  }
}
console.log(findTarget([1, 2, 3], 1));

// FUNCTION EXPRESSION  ==================================================================
// Function exp helps us to create anonymous functions with no names but,
// the name of the variable in which the func is stored is also considered as the name of the function
// we assign the func to a variable
// const singHappyBirthday = function () {
//   console.log("happy birthday");
// };

// ARROW FUNCTIONS  ======================================================================
// - Remove the function keyword and add arrow after parenthesis
// const singHappyBirthday = (){
//     console.log("Happy Birthday");
// }

// HOISTING ==============================================================================
// - we can call the function before declaration in case of func declaration
// - but, not in the case of function exp and arraw functions
// - we will get error saying "cannot access before initialization
// - we will discuss this later

// Note: Errors in accessing the vars before init using let, var,const keyword
console.log(hello); // ERROR: undefined in case of var
var hello = "hello world!";

// console.log(var2); // ERROR: Cannot access 'var2' before initialization in case of const/let keyword
// let var2 = 21;

// FUNCTIONS INSIDE FUNCTIONS and LEXICAL SCOPE ==========================================
// Lexical scope means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. but opposite is not true
// Lexical scope is the definition area of an expression.
// LEXICAL SCOPE EXAMPLE
// Define a variable in the global scope:
const fullName = "Oluwatobi Sofela";

// Define nested functions:
let fullName2 = "Lakhan kumar";
function profile() {
  function sayName() {
    function writeName() {
      return fullName2;
    }
    return writeName();
  }
  return sayName();
}

// How does the scope chain work?
// - 1st profile() function gets invoked -> sayName() -> writeName()
// - After invoking writeName() the comp will call for fullName variable
// - but it won't search for the fullName variable in the global scope directly
// - 1st it will search in writeName() -> sayName() -> profile() -> globally

// BLOCK SCOPE vs FUNCTION SCOPE    ======================================================
// - let and const are block scope
// - which means we can access let and const variables only within a particular block
// - Example
// {
//   let firstName2 = "lakhan";
// }
// console.log(firstName2); //ERROR: is not defined

// var is function scope
// - Which means we can access the var even outside a particular block in JS
// - Example
// {
//   var firstName2 = "lakhan";
// }
// console.log(firstName2); // lakhan
