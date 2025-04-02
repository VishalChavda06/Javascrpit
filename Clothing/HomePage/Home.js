// Get a elements
const searchInput = document.querySelector(".search-bar");
const productCards = document.querySelectorAll(".product-card");

// Search Functionality
searchInput.addEventListener("input", () => {
  let query = searchInput.value.toLowerCase();
  productCards.forEach((card) => {
    let productName = card.querySelector("h3").textContent.toLowerCase();
    if (productName.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
