// ARRAYS ================================================================================
// Arrays are ordered collection of items and are reference data types
// We can store any data type in a Array
// Create an Array
let fruits = ["Apple", "Mango"];
console.log(fruits); // ['Apple', 'Mango']
console.log(fruits[0]); // Apple

// Arrays are mutable   ==================================================================
fruits[0] = "Bannana";
console.log(fruits); // ['Bannana', 'Mango']
// Note: The reference type are objects in JS
console.log(typeof fruits); //object
// Then how do we know that the given obj is an Array?
console.log(Array.isArray(fruits)); // true

// ARRAY METHODS    ======================================================================
// - push()
// - adds the items at the end of the array and returns the length of the array
fruits.push("tomato");
console.log(fruits); // ['Bannana', 'Mango', 'tomato']
console.log(fruits.push("pomogranate")); // 4
console.log(fruits); // ['Bannana', 'Mango', 'tomato', 'pomogranate']

// - unshift()
// - adds items at the begining of the array & returns the length of the array
fruits.unshift("newfruit");
console.log(fruits); // ['newfruit', 'Bannana', 'Mango', 'tomato', 'pomogranate']
console.log(fruits.unshift("newfruit2")); // 6
console.log(fruits); // ['newfruit2', 'newfruit', 'Bannana', 'Mango', 'tomato', 'pomogranate']

// - pop()
// - removes last element of the array & returns the removed item
fruits.pop();
console.log(fruits); // ['newfruit2', 'newfruit', 'Bannana', 'Mango', 'tomato']

// - shift()
// - removes element from the beginning of the element
fruits.shift();
console.log(fruits); // ["newfruit", "Bannana", "Mango", "tomato"];

// PRIMITIVE VS REFERENCE DATA TYPE ======================================================
// PRIM
let var1 = 1;
let var2 = var1;
console.log(var1 === var2); // true
console.log("value of var1 is : ", var1); // 1
console.log("value of var2 is : ", var2); // 1
var1++;
// after changing the val of var1
console.log(var1 === var2); // false
console.log("value of var1 is : ", var1); // 2
console.log("value of var2 is : ", var2); // 1

// REF
let arr1 = [1, 2];
let arr2 = arr1;
console.log(arr1 === arr2); // true
console.log("value of arr1 is : ", arr1); // [1, 2]
console.log("value of arr2 is : ", arr2); // [1, 2]
arr1.push("item3");
// after changing the val of arr1
console.log(arr1 === arr2); // true
console.log("value of arr1 is : ", arr1); // [1, 2, "item3"]
console.log("value of arr2 is : ", arr2); // [1, 2, "item3"]

// WHY DOES THIS HAPPEN?
// - The primitive types are stored inside stack cuz, primitivie data need small space
// - The ref types store the pointers in the stack, which holds the address of the value which is stored inside the heap memory.

// CLONE A ARRAY    ======================================================================
let arr3 = [1, 2, 3];

// slice mthod
let arr4 = arr3.slice(0);
console.log(arr4); // [1,2,3]

// concat op method
let arr5 = [].concat(arr3);
console.log(arr5); // [1,2,3]

// spread operator method
let arr6 = [...arr3];
console.log(arr6); // [1,2,3]
// Note: slice method is fast but, we use spread mostly

// duplicate more than 1 arrays in one array
let arr7 = [arr3.slice(0)].concat(arr4);
console.log(arr7); // [Array(3), 1, 2, 3]
// let arr7 = arr3.slice(0).concat(arr4); => [1,2,3,1,2,3]

// FOR LOOP IN ARRAY    ==================================================================
let newArray = ["orange", "mango", "5", 12];
// Print the items in the array
for (let i = 0; i < newArray.length; i++) {
  console.log(newArray[i]);
  //   console.log(newArray.toUpperCase()); // error
}

// using const to create an array
const newArray2 = [];
newArray2.push("lakhan"); // newArray2 = [1, 2, 3]; // will give ERROR
console.log(newArray2);
// we can reassign the values of the arrays, even after using const because, we are not changing the address of the array constant, we are changing the values which are present in the heap memory.

// WHILE LOOP IN ARRAY  =================================================================
let newArray3 = ["sravan", "lakhan", "dinesh"];
i = 0;
while (i < newArray3.length) {
  console.log(newArray3[i].toUpperCase());
  i++;
}

// FOR OF LOOP IN ARRAYS [returns items of the array]   ==================================
let newArray4 = ["mango", "orange", "bannana"];
for (newArray of newArray4) {
  console.log(newArray.toUpperCase());
}

// FOR IN LOOP IN ARRAYS [returns index]    ==============================================
let newArray5 = ["father", "mother", "sister"];
for (index in newArray5) {
  console.log(index); // 0 1 2
  console.log(newArray5[index]); // father mother sister
}

// ARRAY DESTRUCTURING  ==================================================================
const newArray6 = ["value1", "value2", , 1, 2, 3];

// Create variables and assign the values of the array to the variables
var1 = newArray6[0];
var2 = newArray6[1];
console.log(var1, var2); // value1 value2

// We follow this method in all the other langs as well, but JS has a shortcut
const [myvar1, myvar2, myvar3, ...myvarArray] = newArray6;
// let [myvar1, myvar2] = newArray6;
console.log(myvar1, myvar2, myvar3); // value1 value2 undefined
console.log(myvarArray); // [1, 2, 3]

// OBJECTS IN JS
// -  The single most important reason to care about objects is their capacity to improve your code's representation of the data and processes you're implementing
// - arrays are good but, not suffecient for real world data
// - Objects store key value pairs and they don't have index

// Create an object
const person = {
  firstName: "Lakhan",
  age: 21,
};
console.log(person);

// Access data from objects
// Dot
console.log(person.firstName); // Lakhan
console.log(person.age); // 21
// Bracket
console.log(person["firstName"]); // Lakhan
console.log(person["age"]); // 21

// Add key value pair to the object
// Dot
person.language = "Kannada";
console.log(person); // {firstName: 'Lakhan', age: 21, language: 'Kannada'}
// Bracket
person["gender"] = "Male"; // " " is important
console.log(person); // {firstName: 'Lakhan', age: 21, language: 'Kannada',gender: 'Male'}

// DIFF B/T DOT AND BRACKET NOTATION    ==================================================
// - to write a key with more than one word
// - "person gender"  [not person gender ]
person["person hobbies"] = ["eating", "sleeping", "music", "coding", "reading"];
console.log(person); //{firstName: 'Lakhan', age: 21, language: 'Kannada', gender: 'Male', person hobbies: Array(5)}

const key = "email";
const student = {
  grade: "12th",
};
// Challenge: Add the value of the key variable as the key value pair and assign its value in the student object
student[key] = "lakhan0105@gmail.com";
console.log(student); // {grade: '12th', email: 'lakhan0105@gmail.com'}

// ITERATION IN OBJECTS ==================================================================
// for in loop
for (let key in person) {
  console.log(key); // returns the key names
  console.log(person.key); // undefined
  console.log(person["key"]); // undefined
  console.log(person[key]); // returns their value
}

// Object.keys
console.log(Object.keys(person)); // returns an array of key names ['firstName', 'age', 'language', 'gender', 'person hobbies']

// Object.keys in for of loop
for (let key of Object.keys(person)) {
  console.log(key); // key names
  console.log(person[key]); // key values
}

// COMPUTED PROPERTIES  ==================================================================
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

// Create a obj {objkey1 : myvalue1, objkey2: myvalue2};
const obj = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj); // {objkey1: 'myvalue1', objkey2: 'myvalue2'}

// Another way [computed property way]
const obj2 = {
  [key1]: value1,
  [key2]: value2,
};
console.log(obj2); // {objkey1: 'myvalue1', objkey2: 'myvalue2'}

// SPREAD OPERATOR IN ARRAYS AND OBJECTS
// Spread op in arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];
const newArray7 = [...array1, ...array2];
console.log(newArray7); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newArray8 = [...array1, array2]; // [1, 2, 3, 4, 5, Array(4)]

console.log([..."abc"]); // ['a', 'b', 'c']
console.log([..."12345678"]); // ['1', '2', '3', '4', '5', '6', '7', '8']
// console.log([...12345678]); // ERROR=> not iterable

// Spread op in objects
const newobj1 = {
  key1: "value1",
  key2: "value2",
};

const newobj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObj = {
  ...newobj1,
  ...newobj2,
};
console.log(newObj); // {key1: 'valueUnique', key2: 'value2', key3: 'value3', key4: 'value4'}
// Note: we cannot have same keys in an object
// - if there are same keys in a object, it will take the value of the key which comes in the end
