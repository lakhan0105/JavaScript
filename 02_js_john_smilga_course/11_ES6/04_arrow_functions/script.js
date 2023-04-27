// ARROW FUNCTIONS
// no name, always expressions, assign to variable
// no function keyword
// 'this' is treated diffrently

// Function Declaration -------------------------------------------------------------
// function greet() {
//   console.log("Hello world");
// }
// greet();

// Fucntion Expression -------------------------------------------------------------
// const firstName = function (firstName) {
//   console.log(`hello ${firstName}`);
// };
// firstName("lakhan");

// Arrow Functions -------------------------------------------------------------
// Arrow function which prints hi
const sayHi = () => console.log("hi");
sayHi();

// Arrow function to multiply an value with 2
const multiply = (value) => value * 2; // in 1 line return keyword is implicitly applied
const mulResult = multiply(4);
console.log(mulResult); // 8

// add two numbers, multiple lines of code
// In multiple lines of code rerturn is explicit (we need to write it in the code)
const add = (num1, num2) => {
  return num1 + num2;
};
const sum = add(1, 1);
console.log(sum); // 2

// Returning the objects --------------------------------------------------------------
// const obj = ()=> {firstName:"dinesh",age:21}; // ERROR

// single line (without return keyword) (we need to add () outside the object)
const obj = () => ({ firstName: "dinesh", age: 21 });
const person = obj();
console.log(person); // {firstName: 'dinesh', age: 21}

// multi-line (with return keyword) (no need of ())
const obj2 = () => {
  return {
    firstName: "Sachin",
    age: 21,
  };
};
const person2 = obj2();
console.log(person2); // {firstName: 'Sachin', age: 21}

// Arrow functions as callback -----------------------------------------------------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Now return the numbers which are > 3
// Normal way (passing the anonymous func without arrow func)
const greater = numbers.filter(function (item) {
  return item > 3;
});
console.log(greater);

// with arrow anonymous function
const greater2 = numbers.filter((item) => {
  return item > 5;
});
console.log(greater2); // [6, 7, 8, 9]

// shorterned version of the above (without return and curly braces)
const greater3 = numbers.filter((item) => item > 3);
console.log(greater3); // [4, 5, 6, 7, 8, 9]

// Arrow function as a callback in EventListener
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => console.log("clicked"));
