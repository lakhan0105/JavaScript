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

// STRING TEMPLATE
// - It lets us insert variables and expressions with the strings without needing to concatenate like in older versions of JavaScript.
// By string concatenation
console.log("My name is " + firstName + " and i am " + age + " years old.");
// By template string
console.log(`My name is ${firstName} and i am ${age} years old.`);

// undefined DATA TYPE
// - variable with no data asssigned to it
// - var firstName;
// - let lastName;
// - const pi; // IS WRONG [cuz const cannot be undefined]
// - we can assign values later, to the undefined variable
console.log(typeof undefined); // undefined

// null DATA TYPE
// - variable with null value assigned to it
// - null means empty/unknown value
// - It is treated as falsy for boolean expressions
console.log(typeof null); // Object

// bigint DATA TYPE
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
