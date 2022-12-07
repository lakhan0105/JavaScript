// JS EXERCISE PROBLEMS ON FUNCTIONS

// Write a JS function that reverse a number.
function reverse(number) {
  number = String(number);
  return number.split("").reverse().join("");
}
console.log(reverse(123));

// Write a JS function that checks whether a passed string is palindrome or not?
function checkPalindrome(anyString) {
  let reversedStr = anyString.split("").reverse().join("");
  if (anyString === reversedStr) {
    return `${anyString} is a Palindrome`;
  } else {
    return `${anyString} is not a palindrome`;
  }
}
console.log(checkPalindrome("noon")); // noon is a Palindrome

// Write a JavaScript function that generates all combinations of a string
let genComb = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      // j=i+1 not j=1[cuz it will print unwanted spaces ]
      arr.push(str.slice(i, j));
    }
  }
  return arr;
};
console.log(genComb("dog"));

// Write a JS function that returns a passed string with letters in alphabetical order
function genUpperCase(anyString) {
  return anyString.toUpperCase();
}
console.log(genUpperCase("lakhan")); // LAKHAN

// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function upperCase(anyString) {
  splitStr = anyString.split(" ");
  console.log(splitStr); // ['lakhan', 'kumar','is', 'a', 'good', 'boy']

  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
}
console.log(upperCase("lakhan kumar is a good boy")); // Lakhan Kumar Is A Good Boy

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string
function longStr(anyString) {
  let strLength = [];
  let largest = "";
  splitStr = anyString.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > largest.length) {
      largest = splitStr[i];
    }
  }
  console.log(`${largest} is the longest word in the string`);
}
longStr("Sarvan Singh is a gooooood boy"); // good

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function hasVowels(anyString) {
  let vowels = ["a", "e", "i", "o", "u"];
  let stringVowels = [];
  let vowelsCount = 0;
  for (let i = 0; i < anyString.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (anyString[i] === vowels[j]) {
        stringVowels.push(vowels[j]);
        vowelsCount++;
      }
    }
  }
  console.log(`Vowels in the given string are: ${stringVowels}`);
  console.log(
    `There are ${vowelsCount} vowels in the given string [Repetition is also counted]`
  );
}
hasVowels("lakhsneeu");

// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  if (count === 2) {
    console.log("The number is prime ");
  } else {
    console.log("not a prime no");
  }
}
isPrime(68);

// Write a JavaScript function which accepts an argument and returns the type
function type(arg) {
  return typeof arg;
}
console.log(type("lakhan")); // string

// Write a JavaScript function which returns the n rows by n columns identity matrix.
// STILL LEARNING

// Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively
function secLowHigh(arr) {
  let largest = arr[0];
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log(`largest : ${largest}`);
  console.log(`smallest : ${smallest}`);
}

secLowHigh([4, 2, 8, 6, 5]);
