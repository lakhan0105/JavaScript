// select the elements
const resultEl = document.querySelector(".result");

const firsName = "Lakhan";
const lastName = "Kumar";

const fullName = highLight`Your first name is ${firsName} and last name is ${lastName}`;

// resultEl.innerHTML = fullName;

// Lets say u want to add strong tag before firstName and second name
// OPTION 1 => you will directly add the strong tag in the fullName template string

// OPTION 2 => you can create a function and place before the firstName var in fullName template string
// this func takes 1st arg as the text and next arg as the tags
/*
function highLight(text, tag1) {
  console.log(text); // ['Your full name is ', ' ', '', raw: Array(3)]
  console.log(tag1); // Lakhan
}
*/

// OPTION 2 (part2) => lets say there are n no of vars in your template string fullName
// - you need to access them all -> use the spread operator while passing the parameter
// - Note: the text.length is always greater than 1 from the tags.length
/*
function highLight(text, ...tags) {
  console.log(text); // (3) ['Your full name is ', ' ', '', raw: Array(3)]
  console.log(tags); // (2) ['Lakhan', 'Kumar']
}
*/

function highLight(text, ...tags) {
  const styledTxt = text.map((item, index) => {
    return `${item} <strong>${tags[index] || ""}</strong>`;
  });
  return styledTxt.join("");
}

resultEl.innerHTML = fullName;
