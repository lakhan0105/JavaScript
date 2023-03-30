"use strict";
// Javascript Program to Solve Quadratic Equation
// DOUBT

// JS Pgm to Check if a number is Positive, Negative, or Zero
let num1 = -1;
if (num1 > 0) {
  console.log("The number is positive ");
} else if (num1 === 0) {
  console.log("Number is zero");
} else if (num1 < 0) {
  console.log("Number is Negative");
} else {
  console.log("Invalid Number");
}

// Check if a Number is Odd or Even
let num2 = 0;
if (num2 % 2 === 0) {
  console.log(`${num2} is a even number `);
} else if (num2 % 2 !== 0) {
  console.log(`${num2} is odd number`);
}

// JavaScript Program to Find the Largest Among Three Numbers
let a = 100;
let b = 100;
let c = 100;
if (a > b && a > c) {
  console.log(`a:${a} is the Largest number`);
} else if (b > a && b > c) {
  console.log(`b:${b} is the Largest number`);
} else if (c > a && c > b) {
  console.log(`c:${c} is the Largest number`);
} else if ((a, b, c === a, b, c)) {
  console.log("All are equal");
}

// JS Pgm to Find the largest number in a array
let arr1 = [1, 2, 3, 4, 50, 70, 60, 5, 10];
let arr = [];
let largest = [];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > largest) {
    largest = arr1[i];
  }
}
console.log("Largest num in the arr1 is : " + largest);

// JS Pgm to find 1st 3 largest numbers in an Array
// DOUBT

// JavaScript Program to Check Prime Number
let num3 = 4;
let count = 1;
for (let i = 0; i < num3; i++) {
  if (num3 % i === 0) {
    count++;
  }
}
if (count === 2) {
  console.log(`${num3} is a Prime Number`);
} else {
  console.log(`${num3} is not a Prime Number`);
}
