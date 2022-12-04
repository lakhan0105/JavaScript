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
  let largest = 0;

  splitStr = anyString.split(" ");
  for (let i = 0; i < splitStr.length; i++) {
    strLength.push(splitStr[i].length);
    if (strLength[i] > largest) {
      largest = strLength[i];
    }
  }
  console.log(largest);
}

longStr("Sarvan Singh is a gooooood boy"); // 8
