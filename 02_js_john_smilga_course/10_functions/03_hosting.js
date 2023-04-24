// HOISTING
// Note: Hoisting only applies to declarations made using the var and function keywords, not to declarations made using let or const.
// function and var declarations are hoisted
// but, it is safer to access only after initialized

// try to access the variables before initialising
// console.log(firstName, lastNAme, age); // const and let will give error, var - undefined
// with var u can access the dec but not the value

const firstName = "Lakhan";
let lastNAme = "kumar";
var age = 22;

console.log(firstName, lastNAme, age);
