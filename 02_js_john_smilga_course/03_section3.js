// SECTION 3 - JAVASCRIPT BASICS

// 20. HELPER METHODS --------------------------------------------------------------------
// console.log("hello from console ");
// alert("hello from alert");
// document.write("hello from document write");

// Disadvantage of document.write()
// - It will delete all the content of the web page after loading it
// - It is not supported by xhtml

// Why use console.log over the other two?
// - we can print/debug an object in console.log but we cannot do that by other two of them
//   console.log({ fname: "lakhan" }); // fname:"lakhan"
//   document.write({ fname: "lakhan" }); // [object Object]
//   alert({ fname: "Lk" }); // [object Object]

// 21. STATEMENTS AND COMMENTS -----------------------------------------------------------
// Statements - set of instructions, ends with ;
// Comments - code ignored by js

// uses of comments
// - documenting the code
// - debugging the code

// 22. VARIABLES -------------------------------------------------------------------------
// They allow us to store, access and modify values

// let firstName = "Lakhan";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// 23. Assign values later and modify the existing vlaues -------------------------------
let firstName = "Lakhan";
let city, state;
console.log(city, state); // undefined undefined

// Assigning values
city = "blr";
state = "KA";
console.log(city, state); // blr KA

// modify existing value
firstName = "not lakhan";
console.log(firstName); // not lakhan

// 24. RULES FOR NAMING VARIABLES -------------------------------------------------
// - var names can contain letters, numbers, _ or $
// - var names can only start with small letters, _ or $
// - cannot start with number
// - var names must follow camelCase letter format
// - it is case sensitive

// 25. const, let, var -------------------------------------------------------------
// let and const were introduced in ES6(2015),
// - const cannot be undefined and const cannot be changed
// - let can be undefined and it can be reassigned
// - var is function level scope and let,const are block level scope

// 27. VARIABLE CHALLENGE ---------------------------------------------------------
let firstName2 = "Lakhan";
let last_name = "Kumar";
// let address2 = "main street";
// address2 = "first street";
// console.log(firstName2, last_name, address2); // Lakhan Kumar first street

// 29. Quotation mark -------------------------------------------------------------
// It doesn't really matter which quotation mark you use, unless your starng has both the quotation marks.
// - We can simply add "" outside the text containing ''
// console.log("John's courses are great");
// - or we can use \ escape char before '
// console.log("John\'s courses are great");

// 30. String concatenation ------------------------------------------------------------
// It means combining string values together
// (backticks) are easier option (string template)
console.log(
  "Your first name is " + firstName2 + " and your last name is " + last_name
);

// 31. String Concatenate challenge (in other file)

// 32. Numbers ---------------------------------------------------------------------------
// Loosely typed = we do not need to declare the data type
let myNum = 44;
let myVariable = 2.445;
myVariable = "I am doing good";

console.log(myNum);
console.log(myVariable);

// Arithmetic operators
console.log("arithemetic ops =======================");
console.log(myNum + myNum);
console.log(myNum - myNum);
console.log(myNum * myNum);
console.log(myNum / myNum);
console.log(myNum % myNum);

myNum = 40;

myNum += 5;
console.log(myNum); // 45

myNum -= 5;
console.log(myNum); // 40

myNum *= 5;
console.log(myNum); // 200

myNum /= 5;
console.log(myNum); // 40 (200/5=40)

myNum %= 5;
console.log(myNum); // 0 (40/5 remainder = 0)

// 35. Implicit Type Conversion ---------------------------------------------------------
// JS converts the data type of the variable automatically
// do not ignore these, as the code from input forms may be string and you will get wrong answers later
console.log(firstName2 - last_name); // NaN
console.log("10" + 10); // 1010
console.log("10" - 10); // 0 (Implicit conversion)
console.log("10" * "10"); // 100
console.log("10" / 10); // 1
console.log("10" % 10); // 0

// 36. DATA TYPES -----------------------------------------------------------------------
// - There are 7 Primitive data types in JS

// - Primivitve data types => immutable
// - Primitive data types => Strings, Numbers, Booleans, Null, undefined, symbol, BigInt

// - Reference types => Mutable
// - Reference types => Objects, Arrays, functions

// - typeof operator => returns the data type of the variable

// Boolean
const value1 = true;
const value2 = false;
console.log(typeof value1); // boolean
console.log(typeof value2); // boolean

// Null
const var3 = null;
console.log(typeof var3); // object [Note: typeof null => object (bug in JS)]

// undefined
let var4;
console.log(typeof var4); // undefined

// 37. Arrays -------------------------------------------------------------------------
// - Arrays are used to store ordered list of items
// - They can also store objects, even arrays
// - we can access and assign values using index of the array
const friends = ["sarvan", "dinesh", "sachin"];
console.log(friends);

// assign the value of the array to a variable
let bestFriend = friends[0];
console.log(bestFriend); // sarvan

// change the value of the array
friends[1] = "not dinesh";
console.log(friends); // ['sarvan', 'not dinesh', 'sachin']

// 38. Challenge

// 39. Functions - Declare, Invoke ------------------------------------------------------
// - Block of code which can be invoked any no of time
// - Functions help us to write re usable code

// Declare the function
function hello() {
  console.log("Hello lakhan");
  console.log("Hello dinesh");
  console.log("Hello sarvan");
}

// Invoke the function
hello();

// Function parameters and arguments
// Params => when we declare/define (placeholders)
// Arguments => when we invoke/call

/*
  function hello(firstName) {
    console.log("hello " + firstName + "!");
  }
  hello("lakhan"); // arguments 
*/

// 41. Function return ------------------------------------------------------------------
// Func to convert inch to cm [1inch = 2.54cm]
function calc(value) {
  return value * 2.54;
}

const width = calc(100);
const height = calc(200);

const dimensions = [width, height];
console.log(dimensions); // returns a array [254,508]

// 42. Function expression
// - Another way to define a function

// Function to add 2 values
const add = function (num1, num2) {
  console.log(num1 + num2);
};
add(1, 1); // 2

// 44. Objects --------------------------------------------------------------------------
// Objects - unordered collection of key/value pairs
// - if values = function, then it is called a method

const person = {
  firstName: "Lakhan",
  age: 22,
  friends: ["sarvvan", "dinesh", "prakash"],
  greeting: function () {
    console.log("hello there");
  },
};

// Access these values using dot notation
console.log(person.firstName); // Lakhan
console.log(person.friends); // ['sarvvan', 'dinesh', 'prakash']
console.log(person.friends[0]); // sarvan
person.greeting(); // hello there

// We can even assign the obj values to a variable
const age = person.age;
console.log(age); // 22

// We can even modify the key vaues of the object
person.firstName = "not lakhan";
console.log(person.firstName); // not lakhan

// 45. Challenge (Objects)

// 46. Conditional statements (basics)
// - It consists of if() and we write our condition inside the ()
// - Then {} where we write our code

/* ex1
if (true) {
  console.log("Hello"); // hello
}
*/

/* ex2
if (2 > 1) {
  console.log("2 is bigger than 1");
}
*/

const value = 2 > 1;
console.log(typeof value); // boolean
// Even though we didn't make it boolean explicitly, it is  boolean
if (value) {
  console.log("hello"); // hello
} else {
  console.log("hello from else block");
}

// Comparision operators
// >, <, >=, <=, ===, ==, !=, !==
// else if and !

// Equality
// == checks only values [performs implicit conversion]
// === checks values and data types
console.log("2" == 2); // true [but its not]
console.log("2" === 2); // false [right answer]

// That is why we prefer === over ==

// 49. LOGICAL OPERATORS
// &&, ||, ! are logical operators
// They are used to perfom logical operations, most useful when we have more than one condition to be checked
// && => true when all the conditions are statisfied
// || => true Even if one condition is statisfied

// 50. Switch statements
// Another way of writing ifelse statement
const dice = 1;
switch (dice) {
  case 1:
    console.log("dice value is 1");
    break;

  case 2:
    console.log("dice value is 2");
    break;

  case 3:
    console.log("dice value is 3");
    break;

  case 4:
    console.log("dice value is 4");
    break;

  case 5:
    console.log("dice value is 5");
    break;

  case 6:
    console.log("dice value is 6");
    break;

  default:
    console.log("Invalid input");
    break;
}

// 52. While loops
// - Allows us to repeatedly run the block of code while the condition is true
let amount = 10;
while (amount > 5) {
  console.log("I have " + amount + " rupees and i am going to the mall");
  amount--;
}

// 53. do while loops
// runs a block of code untill the condition is true
// do while = code block first, condition second
// do while = runs at least once
do {
  console.log("You have " + amount + " rupees left");
  amount--;
} while (amount > 0);

// 54. for loop
// Print 1 to 10 using for loop
// let i;
// for (i = 1; i <= 10; i++) {
//   console.log(i);
// }

// print 10-1 in descending order
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
