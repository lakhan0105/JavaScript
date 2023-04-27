// TEMPLATE STRINGS

// Prior to ES6 we used string concatenation for joining the strings
const firstName = "Lakhan";
let lastName = "Kumar";
let fullName = "Hello, my name is " + firstName + " " + lastName;
console.log(fullName);

// TEMPLATE STRING
console.log(`Hello, my full name is ${firstName} ${lastName}`);

// Template string makes joining the string/variables easy 
// We can also set up an expression inside template string which is not possible in string concatenation 