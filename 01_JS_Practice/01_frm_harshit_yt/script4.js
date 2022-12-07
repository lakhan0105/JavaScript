// IMPORTANT ARRAY METHODS

// forEach METHOD   ======================================================================
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// PARAMETERS => currentValue, index, array[optional]
// forEach as a input takes callback
const numbers = [4, 2, 5, 8];

// Create a function which multiples each item with 2 and also prints its index
function multiply2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2 + " at Index " + i);
  }
}
multiply2(numbers);

// Same thing can be achieved by using forEach method
numbers.forEach(function (value, index) {
  console.log(value * 2 + " at Index " + index);
});

// map METHOD   ==========================================================================
// Note: Always use return for map method
const numbers2 = [3, 4, 6, 1, 8];
function square(number) {
  //   console.log(number ** 2); // no console.log
  return number ** 2;
}
const squareNumber = numbers2.map(square);
console.log(squareNumber); // [9, 16, 36, 1, 64]
