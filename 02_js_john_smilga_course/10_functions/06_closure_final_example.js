// CLOSURE FINAL EXAMPLE

function newAccount(name, initialBal) {
  let balance = initialBal;

  function showBal() {
    console.log(`Hey ${name}, your balance is ${balance}`);
  }

  function deposit(amount) {
    balance += amount;
    console.log(
      `Hi ${name}, deposit of ${amount} is successfull, Balance:${balance}`
    );
  }

  function withdraw(amount) {
    if (balance < amount) {
      console.log("Not enough balance");
    } else {
      balance -= amount;
      console.log(
        `Hi ${name}, withdraw of ${amount} is successfull, Balance:${balance}`
      );
    }
  }

  return { showBal: showBal, deposit: deposit, withdraw: withdraw };
}

// Create an account for sarvan and do some actions
const sarvan = newAccount("sarvan", 1000);
// Invoke the methods of the function
sarvan.showBal();
sarvan.deposit(1000);
sarvan.withdraw(2000);

// create dinesh account
const dinesh = newAccount("dinesh", 500);
// Invoke the methods of the function
dinesh.showBal();
dinesh.deposit(1000);
dinesh.withdraw(500);
