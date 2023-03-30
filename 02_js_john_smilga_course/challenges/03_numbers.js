// NUMBERS CHALLENGE
/*
- create score1,2,3 vars and assign values frm 1-100 
- cal total and avg score and assign them to variables 
- log ttl and avg scores 

- create "plates" = 20
- create people = 7
- cal remaining plates and assign to the var 
- add one to the remaining plates
- create message var and display 'There are (ur val goes here) plates available' - string concatenation 
- log the message 
*/

let score1 = 30;
let score2 = 60;
let score3 = 90;

let totalScore = score1 + score2 + score3;
let avgScore = totalScore / 3;

console.log("Total score is:" + totalScore);
console.log("Average score is:" + avgScore);

let plates = 20;
let people = 7;

let remainingPlates = plates % people;
console.log(remainingPlates);

remainingPlates++;

const message = "There are " + remainingPlates + " plates available";
console.log(message);
