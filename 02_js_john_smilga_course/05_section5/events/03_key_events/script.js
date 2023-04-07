// key events ---------------------------------
// key press - when key is pressed
// key down - when key is down
// key up - when key is released (last)

const firstNameEl = document.getElementById("firstName");

// keypressed
firstNameEl.addEventListener("keypress", function () {
  console.log("You pressed the key");
});

// keydown
firstNameEl.addEventListener("keydown", function () {
  console.log("You pressed the keydown");
});

// key up
// grab the input value when key is up ?
firstNameEl.addEventListener("keyup", function () {
  console.log(firstNameEl.value);
});

// Order
// keydown => keypressed => keyup
