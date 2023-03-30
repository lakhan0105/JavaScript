// EXERCISE FROM PROGRAMIZ WEBSITE

// INRODUCTION
// JavaScript Program To Print Hello World
console.log("Hello World"); // using console.log()
// alert("Hello World"); // using alert();
document.write("hello world"); // using document.write(); [print content to HTML doc]

// JS pgm to add 2 numbers
let num1 = 1;
let num2 = 2;
const sum = num1 + num2;
console.log(sum); // 3

// JS pgm to find the square root
let num3 = 5;
console.log(Math.sqrt(num3)); // 2.23
console.log(Math.sqrt(-2)); // NaN
console.log(Math.sqrt("hello")); // NaN

// JS pgm to find Area of triangle [DOUBT]
// FORMULA: (base*height)/2 => if base & height is known
// FORMULA [if all sides are known]: s= (a+b+c)/2 => area = √(s(s-a)*(s-b)*(s-c))
let triBase = 4;
let triHeight = 6;
let triArea = (triBase * triHeight) / 2;
console.log(`The Area of triangle is: ${triArea}`); // 12

// JS PGM TO SWAP 2 NUMBERS
let num4 = 10;
let num5 = 15;
let temp;

temp = num4;
num4 = num5;
num5 = temp;
// [num4, num5] = [num5, num4]; // using destructuring assignment

console.log(num4);
console.log(num5);

// JS PGM TO CONVERT KM TO MILES
// 1km = 0.621 miles
let km = 50;
let miles = 0.621 * km;
console.log(`${km} kms is ${miles} miles`); // 31.05

// JS PGM TO CONVERT CELSIUS TO FAHRENHEIT
// F = C*(9/5)+32;
let celsius = 20;
let faren = celsius * (9 / 5) + 32;
console.log(`${celsius}C is ${faren}F`);

// JS PGM TO WORK WITH CONSTANTS
const a = 5;
console.log(a); // 5
// constants are block-scoped
{
  const a = 50;
  console.log(a); // 50
}
console.log(a); // 5

const arr = ["work", "exercise", "eat"];
console.log(arr);

// add elements to arr array [we can change the val but not the reference ]
arr[3] = "hello";
console.log(arr);
// a = 8; // changing the value of a throws an error
// const x; // throws an error
