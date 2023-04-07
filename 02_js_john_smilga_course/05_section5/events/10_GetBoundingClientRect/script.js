/*
innerWidth - the read-oly window prop the interior width of the window in px 
innerHeight - the read-oly prop of the window interface retirns the interior height of the window in px 

The Element.getBoundingClientRect() method returns a DOMRect object providing info abt the size of an el and its position relative to the viewport
- it gives the h,width and loc of any el we want
*/

// console.log("height:" + window.innerHeight);
// console.log("height:" + window.innerWidth);

// if u change the dev tools, resize the window, the height and width will also change

// The Element.getBoundingClientRect()
// add event to btn
const btnEl = document.querySelector(".btn");
const boxEl = document.querySelector(".box");

btnEl.addEventListener("click", function () {
  const values = boxEl.getBoundingClientRect();
  console.log(values);
});

// resize event --------------------------------------------------------------------------
// it fires when the document view (window) has been resized
window.addEventListener("resize", function () {
  console.log(window.innerHeight);
  console.log("width" + window.innerWidth);
});
