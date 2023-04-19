// Objects basics

/*
Objects are collections of key(property) and value pairs 
property calue can be strings, num, bool,... and even functions
if the prop val id a func we call them method
*/

// obj literal syntax {}
// dot notation

const person = {
  name: "lakahn",
  age: 22,
  married: false,
  friends: ["sarvan", "dinesh"],
  greet: function (name) {
    return name;
  },
};
console.log(person.greet(person.name));

// delete a property
delete person.age;
console.log(person);

// 208. Nested objects -----------------------------------------------------------------
// set variable as a property value
// dot vs bracket notation
let age = 42;
let random = "random-value";

const person2 = {
  firstName: "max",
  age: age, // set the val as variable
  married: false,
  friends: ["sarvan", "dinesh"],
  greet: function (firstName) {
    console.log(`Hello my name is ${firstName}`);
  },
  sayHello: function () {
    console.log(`hello i am ${firstName}`);
  },
  job: {
    role: "dev",
    company: {
      companyName: "abc",
      "company-address": "xyz",
    },
  },
  "random-value": "neifneiwf",
};

// Note:
// we can have any number of nested objects
// when our object prop name has - we use "" around the prop name
// Ex: "company-address":"xyz", to access this we use bracket notation

// Bracket Notation
const companyAddress = person2.job.company["company-address"];
console.log(companyAddress); // xyz

// we can dynamically access the object property using bracket notation
console.log(person2[random]); // random="random-value" if we change var, obj prop also changes

// we can also modify the obj key values
console.log((person2[random] = "new value"));

// 209. "this" keyword basics ***********************************************************
// points to the left of the dot

const lakhan = {
  firstName: "lakhan",
  lastName: "kumar",
  fullname: function () {
    console.log(`My full name is : ${this.firstName} ${this.lastName}`);
  },
};
lakhan.fullname();

// 210. "this"- keyword advanced *********************************************************
/*
In regular func (not arrow) "this"
is deterined by "HOW!" a function is invoked (left of.)

defaults to global - window
arrow funcs - pump the breaks
*/

// create a function which prints the this
function showThis() {
  console.log(this);
}

const person3 = {
  firstName: "din",
  showThis: showThis,
};

const person4 = {
  firstName: "sach",
  showThis: showThis,
};

showThis(); // window
person3.showThis(); // points to the person 3 obj
person4.showThis(); // points to the person 4 obj

// Another ex -----------------------------------
const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", showThis); // points to the clicked btn
btn2.addEventListener("click", showThis); // points to the clicked btn

// if u call this func inside a func in add event listener
btn1.addEventListener("click", function () {
  showThis(); // 1st clicked btn and then global window
  person3.showThis(); // 1st clicked btn and then the person3 obj
});
