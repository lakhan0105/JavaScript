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
  let secondL = arr[0];
  let secondS = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondL = largest;
      largest = arr[i];
    }
    if (arr[i] < largest && secondL < arr[i]) {
      secondL = arr[i];
    }

    if (arr[i] < smallest) {
      secondS = smallest;
      smallest = arr[i];
    }
    if (arr[i] > smallest && secondS > arr[i]) {
      secondS = arr[i];
    }
  }
  console.log(`largest : ${largest}`); // 8
  console.log(`secondL : ${secondL}`); // 6
  console.log(`smallest : ${smallest}`); // 2
  console.log(`secondS : ${secondS}`); //3
}
secLowHigh([4, 2, 8, 6, 5, 3]);

/*  Write a JavaScript function which says whether a number is perfect. Go to the editor
According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.
*/

// Write a JavaScript function to compute the factors of a positive integer.
function factors(anyInt) {
  let factorsArr = [];
  for (let i = 1; i <= anyInt; i++) {
    if (anyInt % i === 0) {
      factorsArr.push(i);
    }
  }
  console.log(factorsArr); //! do not change line else ERROR
}
factors(15); // [1,3,5,15]

// Write a JavaScript function to convert an amount to coins.
