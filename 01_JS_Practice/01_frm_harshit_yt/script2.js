// ARRAYS ================================================================================
// Arrays are ordered collection of items and are reference data types
// We can store any data type in a Array
// Create an Array
let fruits = ["Apple", "Mango"];
console.log(fruits); // ['Apple', 'Mango']
console.log(fruits[0]); // Apple

// Arrays are muttable
fruits[0] = "Bannana";
console.log(fruits); // ['Bannana', 'Mango']
// Note: The reference type are objects in JS
console.log(typeof fruits); //object
// Then how do we know that the given obj is an Array?
console.log(Array.isArray(fruits)); // true
