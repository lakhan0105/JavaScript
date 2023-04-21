// Prototype Property
// In JavaScript, every object has a special property called the prototype property.
// The prototype property is a way for objects to inherit properties and methods from other objects.

// When you create a new object in JavaScript using a constructor function or object literal syntax,
// it is automatically linked to a prototype object. This prototype object is stored in the object's prototype property.

const Person = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};
const person1 = new Person("Lakhan", "kumar");
const person2 = new Person("dinesh", "king");

// create a method for all the instance of the person obj to use it
const fullName = function () {
  console.log(`Your full name is:${this.firstName} ${this.lastName}`);
};

Person.prototype.fullname = fullName; // creates a func called fullName
Person.prototype.age = 21; // creates a property age:10

// person1.fullName();
console.log(person1);
person1.fullname(); // Your full name is:Lakhan kumar
person2.fullname(); // person2 fullname

console.log(person1.age); // print person1 age

// Note:
// When we type person1.fullName()
// first it will look at the instance for the property
// if not present in instance, it will look at the prototype (parent)
// If it is not even present in the prototype, it will give up
