// Data
const productsData = [
  {
    category: "furniture",
    img: "./images/furniture/aditya-wardhana-ooZ3a5k7GFQ-unsplash.jpg",
    productName: "Table and book-shelf",
    price: 20000,
  },
  {
    category: "furniture",
    img: "./images/furniture/spacejoy-RqO6kwm4tZY-unsplash.jpg",
    productName: "living room essentials",
    price: 2000,
  },
  {
    category: "fruits",
    img: "./images/fruits/an_vision-gDPaDDy6_WE-unsplash-apple.jpg",
    productName: "apple",
    price: 2000,
  },
  {
    category: "fruits",
    img: "./images/fruits/danilo-alvesd-bmaWArQQY-M-unsplash-orange.jpg",
    productName: "orange",
    price: 2000,
  },
  {
    category: "fruits",
    img: "./images/fruits/phoenix-han-ZS_RypKo9sk-unsplash-pineapple.jpg",
    productName: "pineapple",
    price: 2000,
  },
  {
    category: "fruits",
    img: "./images/fruits/rajesh-rajput-y2MeW00BdBo-unsplash-grapes.jpg",
    productName: "grapes",
    price: 2000,
  },
  {
    category: "mobile-phones",
    img: "./images/mobile_phones/emiliano-cicero-1mdV8fuUzZs-unsplash-s10.jpg",
    productName: "samsung s10",
    price: 2000,
  },
  {
    category: "mobile-phones",
    img: "./images/mobile_phones/marc-andre-julien-vJ24hBps1qY-unsplash-6s.jpg",
    productName: "iphone 6s",
    price: 2000,
  },
];

// Selecting the Elements
const productsContainer = document.querySelector(".products-container");
const btns = document.querySelectorAll(".btn");

// Mapping the data
function displayProducts(arr) {
  const mappedProducts = arr.map((item) => {
    const { category, img, productName, price } = item;

    return ` <article class="product ${category}" data-id="${category}">
                <img src="${img}">
                <div class="footer">
                    <p class="product-name">${productName}</p>
                    <p class="price">${price}</p>
                </div>
            </article>`;
  });
  return mappedProducts.join("");
}

// Buttons forEach
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnId = e.currentTarget.dataset.id;

    const filteredProducts = productsData.filter((item) => {
      if (item.category === btnId) {
        return item;
      }
    });

    if (btnId === "all") {
      productsContainer.innerHTML = displayProducts(productsData);
    } else {
      productsContainer.innerHTML = displayProducts(filteredProducts);
    }
  });
});
