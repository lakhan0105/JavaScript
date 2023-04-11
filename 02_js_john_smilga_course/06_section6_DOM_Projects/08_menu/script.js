const menuItemsArray = [
  {
    id: 1,
    image: "/images/item-1.jpeg",
    title: "Buttermilk pancakes",
    category: "breakfast",
    price: "₹271",
    text: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock copper mug whatever cold-pressed",
  },
  {
    id: 2,
    image: "./images/item-2.jpeg",
    title: "Diner Double",
    category: "lunch",
    price: "₹400",
    text: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 3,
    image: "./images/item-3.jpeg",
    title: "Godzilla Milkshake",
    category: "shakes",
    price: "₹324",
    text: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 4,
    image: "./images/item-4.jpeg",
    title: "Country Delight",
    category: "dinner",
    price: "200",
    text: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 5,
    image: "./images/item-5.jpeg",
    title: "Egg Attack",
    category: "breakfast",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 6,
    image: "./images/item-6.jpeg",
    title: "Oreo Dream",
    category: "lunch",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 7,
    image: "./images/item-7.jpeg",
    title: "Bacon Overflow",
    category: "shakes",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 8,
    image: "./images/item-8.jpeg",
    title: "American Classic",
    category: "dinner",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 9,
    image: "./images/item-9.jpeg",
    title: "Quarantine Buddy",
    category: "breakfast",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 10,
    image: "./images/item-10.jpeg",
    title: "Steak Dinner",
    category: "dinner",
    price: "150",
    text: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
];

// Selecting the elements
const menuContainerEl = document.querySelector(".menu-container");
const btnsContainerEl = document.querySelector(".btns-container");

// Initialisation
// let displayMenu;

// Display menu function
const displayMenu = function (arr) {
  const mappedMenu = arr.map(function (item) {
    return `
    <article class="menu-item">
        <div class="item-image">
            <img src="${item.image}" alt="not found">
        </div>
        <div class="item-info">
            <div class="header">
                <h2 class="${item.title}">Buttermilk pancakes</h2>
                <h2 class="${item.price}">₹271</h2>
            </div>
            <p class="item-text">${item.text}</p>
        </div>
    </article>`;
  });
  return mappedMenu.join("");
};

// reduce
// we need to make an arry of categories with only one instatnce of items
const red = menuItemsArray.reduce(
  function (values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["all"]
);

const displayBtns = function () {
  // map the categories array items to create buttons
  const catBtnMap = red
    .map(function (category) {
      return `<button class="btn ${category}-btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  btnsContainerEl.innerHTML = catBtnMap;
  const btnsEl = document.querySelectorAll(".btn");

  // Event Listeners for btns --------------------------------------------------------
  btnsEl.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // get the data-id from the clicked btn
      const id = e.currentTarget.dataset.id;

      // filter array
      const filtered = menuItemsArray.filter(function (item) {
        if (item.category === id) {
          return item;
        }
      });

      // when id==="all"
      if (id === "all") {
        menuContainerEl.innerHTML = displayMenu(menuItemsArray);
      } else {
        menuContainerEl.innerHTML = displayMenu(filtered);
      }
    });
  });
};

// DOMContentLoaded
window.addEventListener("DOMContentLoaded", function () {
  menuContainerEl.innerHTML = displayMenu(menuItemsArray);
  displayBtns();
});
