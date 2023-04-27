// FUNCTION VS BLOCK SCOPE

// var is only function scoped
// let and const are block scoped

// FUNCTION SCOPE: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function
// BLOCK SCOPE: A variable when declared inside the if/switch or inside for/while loops, are accessible within that particular condition or loop.

// Function scope of var
function greet() {
  var firstName = "Lakhan";
  console.log(firstName);
}
// console.log(firstName); //ERROR

function hello() {
  if (true) {
    var a = "Hello";
    let b = "world";
    const c = "22";

    console.log(a); // Hello
    console.log(b); // world
    console.log(c); // 22
  }

  console.log(a); //  hello
  console.log(b); //  ERROR
  console.log(c); //  ERROR
}
hello();

// As u can see that var is accessible within the function and let, const are not accessible outside the {} that is if statement

// one more diff
// var can be accessed before declaration whereas let and const cannot be accessed before declaration
