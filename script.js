// script.js
const categories = [
  { name: "All", icon: "", id: "All" },
  { name: "Breakfast", icon: "🍳", id: "breakfast" },
  { name: "Lunch", icon: "🥗", id: "lunch" },
  { name: "Dinner", icon: "🍝", id: "dinner" },
  { name: "Dessert", icon: "🍰", id: "dessert" },
  { name: "Snacks", icon: "🥪", id: "snacks" },
  { name: "Drinks", icon: "🍹", id: "drinks" },
];

const categoryGrid = document.getElementById("categoryGrid");
if (categoryGrid) {
  categories.forEach(category => {
    const card = document.createElement("div");
    card.classList.add("dashboard-card");

    card.innerHTML = `
      <a href="recipes.html#${category.id}">
        ${category.icon} ${category.name}
      </a>
    `;
    categoryGrid.appendChild(card);
  });
}
function filterRecipes() {
  const input = document.getElementById("recipeSearchInput");
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll(".recipe-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const match = title.includes(filter);
    card.style.display = match ? "block" : "none";
    if (match) visibleCount++;
  });

  document.getElementById("noResultsMessage").style.display = visibleCount === 0 ? "block" : "none";
}

function filterByTag(tag) {
  const cards = document.querySelectorAll(".recipe-card");
  let visibleCount = 0;

  cards.forEach(card => {
    const tags = card.dataset.tag.toLowerCase();
    const match = tag === "all" || tags.includes(tag);
    card.style.display = match ? "block" : "none";
    if (match) visibleCount++;
  });

  document.getElementById("recipeSearchInput").value = "";
  document.getElementById("noResultsMessage").style.display = visibleCount === 0 ? "block" : "none";

  document.querySelectorAll(".category-nav li").forEach(li => {
    li.classList.remove("active");
    if (li.textContent.toLowerCase() === tag) {
      li.classList.add("active");
    }
  });
}

