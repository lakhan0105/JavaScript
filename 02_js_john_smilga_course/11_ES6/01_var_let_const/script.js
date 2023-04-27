// var, let, const

// var **********************************************************************************
// var - we can define, update, redefine a variable using var
// redefining is not a good thing, so we use let and const

// define
var num1 = 100;
// console.log(num1); // 100

// update
num1 = 200;
// console.log(num1); // 200

// redefine
var num1 = 5000;
// console.log(num1); // 5000

// Note:
// we can see that the num1 is redefined and JS did not give us any error

// let **********************************************************************************
// define
let amount = 0;
console.log(amount); // 0

// update
amount = 2522;
console.log(amount);

// redefine
// let amount = 444; // ERROR: identifier 'amount' has already been declared
console.log(amount);

// Note: so we cannot redefine the variable with let

// const ********************************************************************************
const pi = 3.14; //define
console.log(pi); // 3.14

// update
pi = 4.14; // ERROR: assignment to constant variable.

// redefine is also not possible 

// NOte: we cannot mutate primitive const 