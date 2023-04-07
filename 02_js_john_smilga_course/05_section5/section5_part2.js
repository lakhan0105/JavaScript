// 105 [html on index2.html]
// prepend
// innerText

// insert a heading 2 infront of the h1
const heading2El = document.createElement("h2");
// insert the text using innerText
heading2El.innerText = "I am heading 2 inserted dynamically";
// prepend (adds at the beginnig unlike append which adds at the end)
document.body.prepend(heading2El); //  h2 will be created and added at the beginning

// Doubt: diff b/t prepend and append

// 106
// remove
// removeChild
const result = document.querySelector("#result");
// result.remove(); // second hello world will be removed

result.removeChild(result.querySelector("h1")); // 2nd hello world will be removed
// Note: here we are selecting the h1 which is inside the result

// 107
// innerHTML
// textContent
// Doubts
// - difference b/t textcontent and innertext (no spaces) and innerHTML
// innerText returns the visible text contained in a node, while textContent returns the full text.
// textContent - gives only the text content inside the selected el
// innerHTML - gives the html els with their text in a selected el
const firstEl = document.getElementById("first");
const secondEl = document.getElementById("second");
const listItemEl = document.querySelector(".list-item");

// create  new list-items in second ul
const liEl = document.createElement("li");
liEl.innerHTML = `<li>third list item</li>`;
// append the liEl to somewhere
secondEl.appendChild(liEl);

// another way
// secondEl.innerHTML += `<li>second list item</li>`;
