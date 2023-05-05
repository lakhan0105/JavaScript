/*
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

// ARROW FUNCTIONS - Object and 'this' --------------------------------------------------
// reg funns : 'this' refers to the parent (left of the dot)
// Arrow funcs : 'this' refres to it's current surrounding scope.
const bob = {
  firstName: "bob",
  lastName: "vance",
  fullName: function () {
    console.log(this);
    console.log(`My full name is: ${this.firstName} ${this.lastName}`);
  },
};
bob.fullName(); // My full name is: bob vance

const john = {
  firstName: "john",
  lastName: "kumar",
  fullName: () => {
    console.log(this);
    console.log(`My full name is: ${this.firstName} ${this.lastName}`);
  },
};
john.fullName(); // My full name is: undefined undefined

// Let's say u have a settimeout inside the obj
const bob = {
  firstName: "bob",
  lastName: "vance",
  fullName: function () {
    console.log(this);
    // setTimeout(function () {
    //   console.log(`My full name is: ${this.firstName} ${this.lastName}`);
    //   console.log(this); // ppoints to window
    // }, 2000);

    // - {firstName: 'bob', lastName: 'vance', fullName: ƒ}
    // - My full name is: undefined undefined
    // - Note: when i call the settimeout, its showing undefined, cuz the this is pointing to the window (so use arrow function)

    setTimeout(() => {
      console.log(`My full name is: ${this.firstName} ${this.lastName}`);
      console.log(this); // points to bob
    }, 2000);
  },
};
bob.fullName(); // My full name is: bob vance
*/

// DOUBT
// ARROW functions while selecting the elements

// DEFAULT PRAMAS AND HOISTING
// DEFAULT PARAMS are the values that are passed as arg, if no arguments are passing in the function
