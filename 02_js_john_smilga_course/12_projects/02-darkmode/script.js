// Information
const data = [
  {
    title: "The WET Codbase",
    date: "October 4th, 2020",
    readTime: "11 min",
    content:
      "I'm baby ramps kombucha gluten-free ennui swag tattooed street art. Marfa biodiesel letterpress blue bottle subway tile, pop-up pok pok of.",
  },
  {
    title: "Goodby, Clean Code",
    date: "November 22nd, 2019",
    readTime: "5 min",
    content:
      "Biodiesel artisan seitan plaid sriracha copper mug venmo shabby chic. Kickstarter raclette kombucha, yr post-ironic jianbing try-hard flexitarian vaporware normcore.",
  },
  {
    title: "My Decade In Review",
    date: "August 11th, 2018",
    readTime: "5 min",
    content:
      "Direct trade shabby chic four dollar toast, tilde actually try-hard bicycle rights aesthetic forage. Meditation keytar asymmetrical tacos artisan truffaut. Pabst jean shorts roof party scenester.",
  },
  {
    title: "What Are The React Team Principles",
    date: "June 4th, 2015",
    readTime: "5 min",
    content:
      "Selvage street art hammock affogato VHS. Mustache shaman literally wayfarers schlitz. Direct trade four loko narwhal VHS pop-up, chartreuse trust fund typewriter street art swag thundercats art party.",
  },
];

// Selecting the elements
const htmlEl = document.querySelector("html");
const articleContainerEl = document.querySelector(".articles-container");
const articleTitleEl = document.querySelector(".article-title");
const dateEl = document.querySelector(".date");
const readTime = document.querySelector(".read-time");
const articleContent = document.querySelector(".article-content");
const toggleBtn = document.querySelector(".toggle-btn");

const mappedArticles = data
  .map((item) => {
    return ` 
            <article>
                <div class="article-title">
                    ${item.title}
                </div>
                <div class="article-info">
                    <span class="date">${item.date}</span>
                    <span class="read-time">${item.readTime} read</span>
                </div>
                <p class="article-content"> ${item.content}
                </p>
            </article>`;
  })
  .join("");

articleContainerEl.innerHTML = mappedArticles;

// Event Listner for toggle btn
toggleBtn.addEventListener("click", () => {
  htmlEl.classList.toggle("dark-mode");
});
