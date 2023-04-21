class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  age = 10; // setting up the property later (like protype property in the last one)
  fullName() {
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
}

const person1 = new Person("Sarvan", "Singh");
console.log(person1);
person1.fullName(); // Hello Sarvan Singh

// Add a method to the Person class using prototype
// Person.prototype.fullName = function fullName() {
//   console.log(`Hello, ${this.firstName} ${this.lastName}`);
// };
// person1.fullName();
// Note:we do not need to follow this way in class

// Note
// - here add the prototype method directly (line 6)(without using keyword separately)
// - however, the prototype property set, will be in the instance, not in the prototype

// Points to remember (including prev lectures)
// - constructor - to create an object
// - prototype property  -to inherit the prop & methods from other objects
// - class - to create a object, we can set up the constructor and prototype in the instance itself
// the prototype property is in the instance itself (not in the prototype obj)
