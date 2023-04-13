const info = [
  {
    id: 1,
    tabName: "history",
    title: "history",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum distinctio, modi culpa similique molestiae ad eaque sequi assumenda consequuntur!",
  },
  {
    id: 2,
    tabName: "vision",
    title: "vision",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum distinctio, modi culpa similique molestiae ad eaque sequi assumenda consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum distinctio, modi culpa similique molestiae ad eaque sequi assumenda consequuntur!",
  },
  {
    id: 3,
    tabName: "goals",
    title: "goals",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum distinctio, modi culpa similique molestiae ad eaque sequi assumenda consequuntur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum distinctio, modi culpa similique molestiae ad eaque ",
  },
];

// Selecting the elements
const btnEl = document.querySelectorAll(".btn");
const tabContent = document.querySelector(".tab-content");
const tabContentTitle = document.querySelector(".tab-content-title");
const tabContentInfo = document.querySelector(".tab-content-info");

// Event Listener when the tab btns are clicked
btnEl.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // get data-id of the clicked btn
    let tabName = e.currentTarget.dataset.id;

    // filter the items by their title
    let filteredArray = info.filter(function (item) {
      if (item.title === tabName) {
        console.log(item.title === tabName);
        return item;
      }
    });

    // add the content dynamically by map
    const mapped = filteredArray
      .map(function (item) {
        return `<h2 class="tab-content-title" id="history">${item.title}</h2>
                <p class="tab-content-info">${item.info}</p>`;
      })
      .join("");

    // change the innerHTML of tabContent to mapped array item
    tabContent.innerHTML = mapped;
  });
});

