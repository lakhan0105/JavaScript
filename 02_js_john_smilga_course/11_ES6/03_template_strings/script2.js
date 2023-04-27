// TEMPLATE STRINGS - HTML
// template strings allows us to set up html inside it

// Create a onject
const person = {
  firstName: "dinesh",
  job: "social media manager",
  hobbies: ["singing", "coding", "cricket"],
};

// Select the result el in html
const resultEl = document.querySelector(".result");

// use the template string and change the innerHTML if the selected el
// resultEl.innerHTML = `<h2>${person.firstName} is a ${person.job}</h2>`;

// we can also return the template string inside a template string
resultEl.innerHTML = `
<h2>${person.firstName} is a ${person.job}</h2>
<ul>
    ${person.hobbies
      .map((item) => {
        return `<li>${item}</li>`;
      })
      .join("")}
</ul>
`;
