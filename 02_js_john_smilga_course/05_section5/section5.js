// DOM
// - When a web page is loaded, the browser creates a Document Object Model of the page.
// - It is a tree of objects, created by browser to make the web page more dynamic.
// - To change the content of HTML elements
// - To change the style (CSS) of HTML elements
// - To react to HTML DOM events
// - To add and delete HTML elements

// 89. General DOM concepts [Doubt] ------------------------------------------------------
// - similar to css
// - selecting the el, decide the effect u want to apply

// we are selecting the els and assigning it to a variable
// then, we apply, methods to the variable

// once we set up our index.html, we have access to a global window object
// console.log(window);
// within the window object, we have many properties and their values
// in that, document property, is an gaint object itself
// in that document obj, we have acces to various methods
// that is where we are getting our getElebyid etc....

// returns a node object or a node list, which is an array like object
const btn = document.getElementById("btn");
const nodeName = btn.nodeName;
const css = btn.style;

console.log(btn); // btn element
console.log(nodeName); // BUTTON
console.log(css);

// [DOUBT]
// Note: nodelist is array like object, means some methods we can use same how we used on arrays/arrays like object but somme methods we cannot use

// 90. Window and Document overview ------------------------------------------------------
// Window object - browser api, gives access to methods that we can use to access the browser
// if u want to find out the properties of the node => console.dir(document);

// 91. getElementById -------------------------------------------------------------------
// - Allows us to select the methods by their id
// - chenge the color of the h1 el by using getElbyId
const h1El = document.getElementById("title");
h1El.style.color = "red";

// change the color of the btn without assigning it to a var
// document.getElementById("btn").style.backgroundColor = "blue";
// document.getElementById("btn").style.color = "white";

// do it by assigning it to a var
// const btn = document.getElementById("btn"); // (already declared so commented it)
btn.style.backgroundColor = "blue";
btn.style.color = "white";

// 92. get elements by tag name [can sel multiple els] -----------------------------------
// getElementsByTagName('tagname');
// returns HTMLCollection - array like objects
// However, if we want it in arrays, we can convert the HTMLCol-> array & perform forEach
// index, length method works but - not array methods like (forEach)
// select all h2 els
const h2El = document.getElementsByTagName("h2");
console.log(h2El); // HTMLCollection(2) [h2, h2]

// index method
h2El[0].style.color = "red"; // turns red color
// length method
console.log(h2El.length); // 2

// for each method (will not work)
// h2El.forEach(function (item) {}); // ERROR: h2El.forEach is not a function

// convert HTMLCollection to arrays
const liEL = document.getElementsByTagName("li");
liEL[2].style.color = "orange"; // item3 is orange now
// create a new var and assign the liEl vals to it
const betterLi = [...liEL];
// print liEl and betterEl
console.log(liEL); // HTMLCollection(3) [li, li, li]
console.log(betterLi); // [li, li, li] => we can perform forEach cuz its array now

// Note: querySelectorAll retruns nodelist and we can perform for each ops on them

// 93. get elements by class name --------------------------------------------------------
// Helps us to sel el/group of els by class name
// HTMLCollection
const listItem = document.getElementsByClassName("special");
console.log(listItem); // HTMLCollection(2) [li.special, li.special]
listItem[0].style.color = "blue"; // item1 turns blue

// 94. QuerySel and QuerySelAll
// - querySelector('any css') - selects single
// - querySelectorAll ('any css') - selects all
// - we can use forEach()
const resultEl = document.querySelector(".result");
resultEl.style.backgroundColor = "blue";

const item = document.querySelector(".special");
console.log(item); // we get only item1 (we do not get item3)
// Reason: querySel only selects 1st instance of the element

// sel last item
const lastitem = document.querySelector("li:last-child");
console.log(lastitem); // li.special.last => (item 3)

const list = document.querySelectorAll(".special");
list.forEach(function (item) {
  item.style.color = "green"; // item1 and 2 with 'special' class turns green
});

// 95. nav/traverse the dom [DOUBT]
console.log(resultEl.childNodes); // gives all the child nodes => text,li,text,li....
// NodeList(7) [text, li.special, text, li, text, li.special.last, text]
console.log(resultEl.children); // gives only children => li,li....
// HTMLCollection(3) [li.special, li, li.special.last]
console.log(resultEl.firstChild); // text
console.log(resultEl.lastChild); // text (whitespace)
