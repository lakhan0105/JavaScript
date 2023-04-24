// CLOSURE BASIC EXAMPLE
function newAccount(name, initialBal) {
  let balance = initialBal;
  function showBal() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }
  return showBal;
}

const sarvan = newAccount("sarvan", 1000);
const dinesh = newAccount("dinesh", 500);
sarvan();
dinesh();
