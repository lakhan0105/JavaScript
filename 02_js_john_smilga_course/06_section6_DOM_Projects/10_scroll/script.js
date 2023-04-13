// Select the elements
const navToggleEl = document.querySelector(".nav-toggle");
const listContainer = document.querySelector(".nav-list-container");
const list = document.querySelector(".list");
const navCenter = document.querySelector(".nav-center");
const topBtnEl = document.querySelector(".top-btn");
const linkEl = document.querySelectorAll(".link");
const navSection = document.querySelector(".nav-section");
const positionFixed = document.querySelector(".fixed-position");

// Event Listener for nav-toggle btn
navToggleEl.addEventListener("click", function () {
  const listHeight = list.getBoundingClientRect().height; // get height of list dynamicly
  const containerHeight = listContainer.getBoundingClientRect().height; // listCont height
  
  // hide/display the navbar list container
  if (containerHeight === 0) {
    listContainer.style.height = `${listHeight}px`;
  } else {
    listContainer.style.height = 0;
  }
});

// scroll event listener to display fixed navbar when scrolled>navbar height
window.addEventListener("scroll", function () {
  const navCenterHeight = navCenter.getBoundingClientRect().height;
  if (window.scrollY > navCenterHeight) {
    navCenter.classList.add("position-fixed");
    topBtnEl.classList.remove("hide");
  } else {
    navCenter.classList.remove("position-fixed");
    topBtnEl.setAttribute("display", "none");
    topBtnEl.classList.add("hide");
  }
});

// Event listener when pressed on link btn
linkEl.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default func of link

    // fetch the href value of clicked link
    const id = e.currentTarget.getAttribute("href").slice(1);
    // get the el with id of the clicked id (fetched id)
    const element = document.getElementById(id);

    // get navbar height
    let navHeight = navCenter.getBoundingClientRect().height;
    let containerHeight = listContainer.getBoundingClientRect().height;
    const hasPositionFixed = navCenter.classList.contains("position-fixed");
    console.log(hasPositionFixed);
    // element position
    let elTopPosition = element.offsetTop - navHeight;

    // minus again when the fixedPosition is not present
    if (!hasPositionFixed) {
      elTopPosition = elTopPosition - navHeight;
    }

    // for smaller window
    if (navHeight > 82) {
      elTopPosition = elTopPosition + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: elTopPosition,
    });

    // hide the listContainer el
    listContainer.style.height = 0;
  });
});
