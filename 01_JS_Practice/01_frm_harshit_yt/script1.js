// JS PRACTICE FROM HARSHIT VASHISTH YT CHANNEL

/**
 * HISTORY OF JS
 * In the year 1995, Netscape navigator was one the popular browsers, realised that they needed a programing language to add interactivity in the websites
 * So, Brendan Eich, developed JS in 1995 within 10days
 * JS was named "Mocha" => "LiveScript" => "JavaScript"[to make it popular]
 * Seeing this, Internet Explorer also came up with its own language called JScript in the year 1996
 
 * PROBLEM
 * If i use JS, my website would be more compatible in NetScape Navigator browser
 * If i use Jscript, my website is more compatible in Internet Explorer
 
 * SOLUTION
 * This is where ECMA came into picture
 * It standarizes the technologies, It standardized the JS and came up with ECMAscript
 
 * ECMASCRIPT VERSIONS 
 * ES1:1997...............ES5:2009, ES6:2015(Biggest update)
 */

// HOW TO EXECUTE JS CODE   ========================================
// Best practice is to link the external script file at the ending of the <body> tag in the HTML doc

// HELLO WORLD in console   =========================================
console.log("Hello World"); // using " "
console.log("Hello World"); // using ' '
console.log(`Hello World`); // using backticks [useful in string templates]

// COMMENTS ==========================================================
// this is single line comment
/*
 this is 
 multi-line comment 
*/

// INTRO TO VARIABLES   ===================================================
// - They are used to store, use and change the information
// Declare a variable
let firstName = "Lakhan";

// Use the variable
console.log(firstName); // Lakhan

// Change the information in the variable
firstName = "Sarvan"; // using var will not show any error
console.log(firstName); // Sarvan
// Rules for naming the variables
// - var names must not start with numbers/
// - capital letters/
// - symbols except $ and _
// - follow camelCase naming convention
// - No spaces are allowed in var names

// let KEYWORD  ==========================================================
// Why use let instead of var?
// - let has block-level scope and var has global-level scope
// - while changing the value of a variable, we do not need to mention the let keyword, unlike in the case of var
// Example
// - var firstName = "Lakhan";
// - var firstName ="Sarvan"; // will not give any error [but it is not good for us]

// CONSTANTS   ===========================================================
// - constants value cannot be changed and undefined
// - const pi = 3.14; // we cannot change its value
// - const pi;        // will give error cuz its undefined and const cannot be undefined

// STRING INDEXING  =======================================================
// - String indexing is used to access the char in the string
// - String indexing starts with 0
// - INDEX OF 1ST LETTER    => firstName[0];
// - LENGTH OF THE STRING   => firstName.length;
// - LAST INDEX OF firstName=> firstName[firstName.length-1];

// STRING METHODS   ========================================================
// trim() => removes the spaces BEFORE and AFTER the string [not in b/t]
let oldString = "   Lakha n ";
console.log(oldString.length); // 11
oldString.trim();
console.log(oldString.length); // 11 itself cuz strings r immutable
let newString = oldString.trim(); // store in a new variable
console.log(newString.length); // 7

// toUpperCase() => changes string to uppercase letters
newString = newString.toUpperCase();
console.log(newString); // LAKHA N

// toLowerCase()
newString = newString.toLowerCase();
console.log(newString); // lakha n

// slice()
// - Let's say u want to print only particular chars from a string
// - We use slice() method to achieve that
// - start index, end index [but, it won't include the last index]
console.log(newString.slice(0, 2)); // la [not lak]
console.log(newString.slice(0)); // lakha n [includes the whole string cuz end index not provided]

// typeof OPERATOR  ====================================================================
// - Tells the data type of the variable
console.log(typeof newString); // string
console.log(typeof 5); // number

// CONVERT STRING TO NUMBER =============================================================
console.log(typeof +newString); // number [+sign before the string]
console.log(typeof parseInt(newString)); // number [parseInt() method]
console.log(typeof Number(newString)); // number [Number() method]

// CONVERT NUMBER TO STRING =============================================================
let age = 21;
console.log(typeof (age + "")); // string [adding empty string after the number ]
console.log(typeof String(age)); // string [String() method]

// STRING CONCATENATION =================================================================
// Joining the strings is called string concatenation
// Note: String concatenation will not add spaces after joining
// Examples
console.log(firstName + newString); // Sarvanlakha n
console.log("1" + "1"); // 11
console.log("1" - "1"); // 0
console.log("1" - 1); // 0
console.log("1" * "1"); // 1
console.log("1" / "1"); // 1
console.log(typeof ("1" - "1")); // number
console.log(typeof ("1" + "1")); // string

// STRING TEMPLATE  ======================================================================
// - It lets us insert variables and expressions with the strings without needing to concatenate like in older versions of JavaScript.
// By string concatenation
console.log("My name is " + firstName + " and i am " + age + " years old.");
// By template string
console.log(`My name is ${firstName} and i am ${age} years old.`);

// undefined DATA TYPE  ==================================================================
// - variable with no data asssigned to it
// - var firstName;
// - let lastName;
// - const pi; // IS WRONG [cuz const cannot be undefined]
// - we can assign values later, to the undefined variable
console.log(typeof undefined); // undefined

// null DATA TYPE   ======================================================================
// - variable with null value assigned to it
// - null means empty/unknown value
// - It is treated as falsy for boolean expressions
console.log(typeof null); // Object

// bigint DATA TYPE ======================================================================
// - The number in JS has a limit to store the numbers
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// - So, Number can store only 9007199254740991 intergers
// - If we want to store more than that, we use Bigint
let bigIntVariable = 21n; // by adding n to the number
let bigIntVariable2 = BigInt(21); // by using BigInt object
console.log(typeof bigIntVariable); // bigint
console.log(typeof bigIntVariable2); // bigint
// - we can perform any operations with bigint
// - we cannot mix bigint with other data types

// BOOLEANS and COMPARISON OPERATORS    ==================================================
// - The Comparison operators are used to compare values and the result of the comparison is in Boolean [True/False]
let hasDl;
console.log(typeof hasDl); // Undefined
hasDl = true;
console.log(typeof hasDl); // Boolean
// Another Example
let num1 = 1;
let num2 = 2;
console.log(num1 > num2); // false
console.log(num2 > num1); // true

// == vs ===
// == is equality operator which checks only the value and not the data type
// === is strict equality checker which checks both, value and data types
num1 = "7";
num2 = 7;
console.log(num1 == num2); // returns true, but "7" is not same as 7
console.log(num1 === num2); // returns false, cuz "7" is not strictly equal to 7

// != vs !==
console.log(num1 != num2); // false
console.log(num1 !== num2); // true

// TRUTHY AND FALSY VALUES  ==============================================================
// Falsy values
// - false
// - 0
// - "" [Note: "" is flasy and " " is truthy]
// - null
// - undefined are the falsy values

// Truthy values are all the values except for the falsy values

// if STATEMENT ==========================================================================
// - The if statement is used to check the condition
// - if, the condition is true the block of code will be executed else nothing will happen
age = 18;
if (age >= 18) {
  console.log("You can drive!");
}

// if-else STATEMENT    ==================================================================
// When the stmt is true, if block will be exectued otherwise else block will be executed
if (age >= 18) {
  console.log("you can drive!");
} else {
  console.log("cannot drive");
}

// if-else if STATEMENT ==================================================================
// - When we need to make decisions based on multiple conditions, we use this
if (age < 18) {
  console.log("You are below 18");
} else if (age <= 60) {
  console.log("You can drive!");
} else if (age > 60) {
  console.log("You are too old to be driving!");
} else {
  console.log("Invalid input");
}

// Nested if-else
let userGuess = 19; // user input
let winningNumber = 19;
if (userGuess === winningNumber) {
  console.log("You guessed it right!!!");
} else {
  if (userGuess > winningNumber) {
    console.log("too high!");
  } else {
    console.log("too low");
  }
}
// o/p => "You guessed it right!!!"

// SWITCH STATEMENT ======================================================================
// - It is same as if else if else.
// - The switch statement starts with a switch keyword followed by a parenthesis and code block.
// - Inside the code block we will have different cases.
// - Case block runs if the value in the switch statement parenthesis matches with the case value.
// - The break statement is to terminate execution so the code execution does not go down after the condition is satisfied.
// - The default block runs if all the cases don't satisfy the condition.
// Example: Tell if its a working day or weekend
let day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It is a working day!");
    break;

  case "Sunday":
  case "Saturday":
    console.log("Enjoy your weekend!");
    break;

  default:
    console.log("Invalid input");
    break;
}

// TERNARY OPERATOR ======================================================================
// They are used to write small conditional statements
let drink;
age >= 5 ? (drink = "coffee") : (drink = "Milk");
console.log(drink); // coffee as age>5

// LOGICAL AND, LOGICAL OR OPERATORS    ==================================================
// - They are used when we need to check more than one conditions once at a time
// - && all the conditions must be true, for it to be true
// - || any one condition is true, then the result is true

// Example for AND operator
hasDl = true;
if (age >= 18 && hasDl === true) {
  console.log("can drive"); // can drive
}

// Example for OR operator
hasDl = true;
if (age >= 18 || hasDl === true) {
  console.log("can drive"); // can drive
}

