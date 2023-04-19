const person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(`my full name is: ${this.firstName} ${this.lastName}`);
  };
  console.log(this);
};

const person1 = new person("lakhan", "kumr");
person1.fullName(); // my full name is: lakhan kumr

const person2 = new person("dinesh", "king");
person2.fullName(); //my full name is: dinesh king

// Note:
// if u do not put new keyword, this will point to global window and the result=undefined
// here, it helps us to omit the return keyword
// new - creates object, points to it, omit return

// CONSTRUCTOR PROPERTY **************************************************************
// All objects in js have access to constructor prop that returns a constructor function that created it.
// built in construtor functions
// objs,arrays,functions are also objects in js
// we can also use constructor for cerating new objects (new person.constructor("lakhan","kumar"))

console.log(person1.constructor); // logs the fullName() func of person1
console.log(person2.constructor); // logs the fullName() func of person2

// built in construtor functions ------------------------------
const bob = {};
console.log(bob.constructor); // ƒ Object() { [native code] }

function greet() {
  console.log("hello");
}
console.log(greet.constructor); // ƒ Function() { [native code] }

const list = [];
console.log(list.constructor); // ƒ Array() { [native code] }
// this tells that objs,arrays,functions are also objects in js
