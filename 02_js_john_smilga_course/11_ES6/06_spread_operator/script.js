/*
// SPREAD OPERATOR
// It allows an iterable to spread/expand individually inside the receiver
// Split into simgle items and copy them

// Note
// In JavaScript, an iterable is an object that can be iterated over using a loop.
// arrays,strings,sets
// we can use for of loop on iterables

const udemy = "udemy";
const str = [...udemy];
console.log(str); //  ['u', 'd', 'e', 'm', 'y']

const fruits = ["orange", "apple"];
const friends = ["john", "peter"];
const newArr = [...fruits, ...friends];
console.log(newArr); //  ['orange', 'apple', 'john', 'peter']

// Note: always make the copy of the spread array (newArr)
// Lets say u add a new item to the newArr
// If u change one array, the other will also be changed, and we don need that

// referenece
// const newArr2 = newArr;
// newArr[0] = "new item";

// console.log(newArr);  //  ['new item', 'apple', 'john', 'peter']
// console.log(newArr2); //  ['new item', 'apple', 'john', 'peter']

// so we store the copy into a variable
const newArr2 = [...newArr];
newArr2[0] = "new item";

console.log(newArr); // ['orange', 'apple', 'john', 'peter'] // new item will not appear here
console.log(newArr2); // ['new item', 'apple', 'john', 'peter']

// SPREAD OPERATORS OBJECTS -------------------------------------------------------------------------------
// Starting from ES2018 - Split into simgle items and copy them is easy by using objects
const person = { name: "Lakhan", age: 55 };
const newPerson = { ...person, city: "ladak" };

console.log(person); // {name: 'Lakhan', age: 55} // (remains same)
console.log(newPerson); // {name: 'Lakhan', age: 55, city: 'ladak'}

// We cannot use some methods like map on nodeList items
// to fix that we use spread operator to convert them to arrays
const heading = document.querySelectorAll("h1");
const result = document.querySelector(".result");

// It returns a nodelist and we cannot perform some array methods on them
// console.log(heading); // NodeList(2) [h1, h1]
// heading.map((item) => {
//   console.log(item); // heading.map is not a function
// });

const text = [...heading];
const mappedText = text
  .map((item) => {
    return `<p>${item.textContent}<p>`;
  })
  .join(" ");
result.innerHTML = mappedText;

// SPREAD OPERATOR - FUNCTION ARGUMENT
// Lets say u want to pass in the individual items of arrays as an arg, we can use spread operator
const numbers = [22, 32, 11, 880];
console.log(Math.max(numbers)); // NaN // won't work
console.log(Math.max(22, 32, 11, 880)); // 880
console.log(Math.max(...numbers)); // 880;

const lakhan = ["lakhan", "kumar"];
function sayHello(firstName, lastName) {
  console.log(`hello ${firstName} ${lastName}`);
}
sayHello(lakhan[0], lakhan[1]); // hello lakhan kumar
sayHello(...lakhan); // hello lakhan kumar

// DIFFERENCE B/T SPREAD OPERATOR AND REST PARAMETER
// Spread operator - spreads a iterables like arr/obj into another array/object, can be passed in args 
// Rest param - is used to collect all the remaining arguments into an array within the func param

*/

// REST PARAMS -------------------------------------------------------------------------------------------
// When do we use rest param ?
// - when we are destructuring
// - in the func param to collect the remaining arguments into an array

// Example - use the rest param while destructuring
const fruits = ["apple", "mango", "orange", "grapes"];
const [fruit1, fruit2, ...restFruits] = fruits;
console.log(fruit1); // apple
console.log(fruit2); // mango
console.log(restFruits); // ['orange', 'grapes']

// Example - use the rest pram in function param
function printFruits(param1, ...restParms) {
  console.log(param1); // apple
  console.log(restParms); // ['mango', 'orange']
}
printFruits("apple", "mango", "orange");
