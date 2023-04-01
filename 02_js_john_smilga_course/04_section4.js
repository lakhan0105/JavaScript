// SECTION 4

// 56. STRING PROPERTIES AND METHODS -----------------------------------------------------
// How can we acces those methods ?
// - wrapper string object allows us to acces these methods

let myString = " Lakhan";

// length property
console.log(myString.length); // 6

// to lowercase method
console.log(myString.toLowerCase()); // lakhan

// to uppercase
console.log(myString.toUpperCase()); // LAKHAN

// How do we get the character at a particular index?
console.log(myString[0]); // empty space
console.log(myString[1]); // L
console.log(myString[2]); // a

// using charAt() method
console.log(myString.charAt(0)); // empty space
console.log(myString.charAt(1)); // L
console.log(myString.charAt(2)); // a

// Last char of the staring
console.log(myString.charAt(myString.length - 1)); // n

// Get the starting index of a particular char
console.log(myString.indexOf("a")); // 2
// Note: if char is not present in string => -1
// Note: if there are >1 instance of the char in the string, it will return the 1st instance index.

// trim()
console.log(myString.trim()); // removes the spaces

// includes () method
console.log(myString.includes("L")); // true

// slice
// - Creates new string from the existing one by getting the specific parts of the string
// - It excludes the 2nd parameter
console.log(myString.slice(0)); //  Lakhan
console.log(myString.slice(1, 2)); // L (doesn't print the last index)
console.log(myString.slice(1, 3)); // La
console.log(myString.slice(-1)); // n
console.log(myString.slice(-2)); // an

// 57. Template strings ----------------------------------------------------------------
// They allows us to join strings
// Interpolation - (we can even insert expression in them)

const firstName = "Lakhan";
let age = 22;
let sentence = "Hello i am";
console.log(`${sentence} ${firstName} and i am ${age} years old!`);

// 59. Array properties and methods -----------------------------------------------------
const friends = ["sarvan", "dinesh", "prakash", "govu"];
const fruits = ["apple", "orange"];

// length
console.log(friends.length); // 4

// last item
console.log(friends[friends.length - 1]); // govu

// concat
console.log(friends.concat(fruits)); // ['sarvan', 'dinesh', 'prakash', 'govu', 'apple', 'orange']

// reverse
console.log(friends.reverse());

// Remove the last item of the array
console.log(friends.pop()); // returns the popped item => sarvan
console.log(friends); //  ['govu', 'prakash', 'dinesh']

// Add in the last index of the array
console.log(friends.push("new friend")); // returns the length of the array
console.log(friends); // ['govu', 'prakash', 'dinesh', 'new friend']

// Remove the first item of the array
console.log(friends.shift()); // returns the the removed item => govu
console.log(friends); // ['prakash', 'dinesh', 'new friend'] (govu is removed)

// Add item in the beginning
console.log(friends.unshift("new item in the beginning")); // 4
console.log(friends); // ['new item in the beginning', 'prakash', 'dinesh', 'new friend']

// Splice method
// Note: This mutates the array
const splicedFriends = friends.splice(0, 3);
console.log(splicedFriends); // ['new item in the beginning', 'prakash', 'dinesh']
console.log(friends); // ['new friend']

// 60. EXERCISE - Full Name --------------------------------------------------------------
// Arrays and for loops
const names = ["anna", "susy", "bob"];
const lastNames = "shakeandbake";
let newArray = [];

// Using for loop, combine the first and last names and store them in newArray
for (let i = 0; i < names.length; i++) {
  newArray.push(`${names[i]} ${lastNames}`);
}
console.log(newArray); // 'anna shakeandbake', 'susy shakeandbake', 'bob shakeandbake'

// 61. EXERCISE - Calculate total --------------------------------------------------------
// Functions, return, if, arrays, for loop
const gas = [20, 40, 100];
const food = [10, 10, 60];

// fucntion to calc the total of the array
function calcTotal(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  if (sum >= 100) {
    console.log("You are spending too much!");
    return sum;
  } else {
    console.log("You are good to go ");
    return sum;
  }
}

// calculate gas total
const gasTotal = calcTotal(gas);
console.log(gasTotal); // 160

// calculate food total
const foodTotal = calcTotal(food);
console.log(foodTotal); // 180

// 62. Primitive(value) vs Reference types -----------------------------------------------
// Primitives => String, num, booleans, undefined, null, symbol, bigint
// References => Objects, arrays, functions

// Primitives are immutable
// They are stored in stack
// On changing one variable, only that var gets affected
const num1 = 10;
let num2 = num1;
console.log(num1, num2); // 10 10
num2 = 70;
console.log(num1, num2); // 10 70

// Reference types are mutable, stored in heap
// on changing one array, both the arrays get affected
const arr1 = ["item1", "item2"];
const arr2 = arr1;
console.log(arr1, arr2); //  ['item1', 'item2']  ['item1', 'item2']
arr2.push("newItem");
console.log(arr1, arr2); //  ['item1', 'item2', 'newItem'] (3) ['item1', 'item2', 'newItem']

// 63. Null and undefined ---------------------------------------------------------------
// both represents 'no value'
// undefined - 'js cannot find the value'
// null - developer sets the value
console.log(20 + null); // 20+0 => 20
console.log(20 + undefined); // 20+undefined => NaN

// 64. Truthy and Falsy values in JS ----------------------------------------------------
// Falsy => '', "", 0, -0, NaN, flase, undefined, null
// Truthy => everything except falsy values

// Example 1
if ("sometext") {
  console.log("truthy"); // true cuz 'sometext'-true
} else {
  console.log("flasy");
}

// Example 2
if ("") {
  console.log("truthy");
} else {
  console.log("flasy"); // false cuz ''- false
}

// 65. TERNARY OPERATOR ------------------------------------------------------------------
// unary operator - typeof
// binary operattor - assignment
// ternary operator - has three operands
// condition ? (runs if true) : (runs if false)

let drink;
age = 21;
age > 18 ? (drink = "beer") : (drink = "milk");
console.log("You drink " + drink);

// 66. GLOBAL SCOPE (some doubts) ------------------------------------------------------
// - any var outside the code block is said to be in global scope
// - can be accessedfrom anywhere
// - disadvantage: name collisions, modify by mistake

// 67. Local Scope (doubts) -------------------------------------------------------------
// Local scope can be accessed only inside the code block

// 69. Callback functions, Higher order functions, Functions as first class objects/citizens
// - Functions are first class objects - stored in a variable (expression)
// - Passed as an arguement to another function
// - Return from another function (closure)

// Higer order function - accepts another function as an arguement or returns another function as a result (It basically accepts callback function)

// Callback function - passed to another function as an arguement and executed inside that function (its that func that we are passing in higher order function)

// callback function
function morning(name) {
  return `Good morning ${name}`;
}

// callback function
function afternoon(name) {
  return `Good afternoon ${name}`;
}

// Higher order function
function greet(userName, cb) {
  const myName = "dinesh";
  console.log(`${cb(userName)}, my name is ${myName}`);
}

// Invoking the greet function with (userName,callbackfunction)
// Note: we did not invoke the callback function
greet("lakhan", morning);
greet("sarvan", afternoon);

// 70. Array Iterators
// Powerful array methods
// forEach, map, filter, find, reduce
// Iterate over array and no for loop reequired
// Accept CALLBACK fuc as an arg, calls Callback against each item of the array.
// Reference Item in the callback parameter

// 71. forEach
// - It iterates over the array
// - It does not return new array
const people = [
  { name: "raj", position: "developer", age: 21 },
  { name: "prakash", position: "designer", age: 51 },
  { name: "niranjan", position: "manager", age: 70 },
];

// setting up callback function
function callPerson(person) {
  console.log(person.position.toUpperCase());
}

// we can pass the callback function by using two ways in forEach
// by passing the function nanme as an arg (set up func separately & passing the ref)
people.forEach(callPerson);

// by writing the function directly in the forEach arg (anonymous function)
// Note: we are not invoking here
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
  // return item.position.toUpperCase(); // does not work
});

// 72. map
// does return new array
// does not change the size of the original array
// uses values from original array when making new one
// Note: if we do not return anything, result => [undefined, undefined, undefined]

const personName = people.map(function (item2) {
  // return as an array
  // return item2.name;

  // return as objects
  return {
    firstName: item2.name,
  };
});

console.log(personName); // ['raj', 'prakash', 'niranjan']

// 73. Filter method
// - Filter also returns a new array
// - We can manipulate the size of the array
// - Because it returns based on conditions
// - If 2 items match our condition, then only two items of the array will be returned
// - If none of the conditions are matched, we get an empty array
const youngPeople = people.filter(function (item3) {
  return item3.age <= 40;
});
console.log(youngPeople); // { name: "raj", position: "developer", age: 21 }

// 74. find method
// It returns first single instance - (in this case object)
// returns 1st match, if no match - undefined
// great for getting unique values
const findPeople = people.find(function (item4) {
  return item4.age === 21;
});
console.log(findPeople); // {name: 'raj', position: 'developer', age: 21}
