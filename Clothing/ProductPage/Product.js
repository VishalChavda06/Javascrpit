// Make a array
let products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 500,
    category: "Men",
    img: "https://i.imgur.com/u3mXfsD.jpg",
  },
  {
    id: 2,
    name: "Men's Shirt",
    price: 789,
    category: "Men",
    img: "https://i.imgur.com/BL6PqJ3.jpg",
  },
  {
    id: 3,
    name: "Men's Jacket",
    price: 1500,
    category: "Men",
    img: "https://i.imgur.com/4qz7Wwy.jpg",
  },
  {
    id: 4,
    name: "Men's Sneakers",
    price: 3200,
    category: "Men",
    img: "https://i.imgur.com/oL7hImF.jpg",
  },
  {
    id: 5,
    name: "Women's Dress",
    price: 2500,
    category: "Women",
    img: "https://i.imgur.com/TCwmnex.jpg",
  },
  {
    id: 6,
    name: "Women's Jacket",
    price: 3200,
    category: "Women",
    img: "https://i.imgur.com/Ar7DMMc.jpg",
  },
  {
    id: 7,
    name: "Women's Handbag",
    price: 1800,
    category: "Women",
    img: "https://i.imgur.com/qBv7vP4.jpg",
  },
  {
    id: 8,
    name: "Women's Boots",
    price: 4500,
    category: "Women",
    img: "https://i.imgur.com/nE8XtZo.jpg",
  },
  {
    id: 9,
    name: "Kids' Jacket",
    price: 1800,
    category: "Kids",
    img: "https://i.imgur.com/g76eKwb.jpg",
  },
  {
    id: 10,
    name: "Kids' Sneakers",
    price: 1600,
    category: "Kids",
    img: "https://i.imgur.com/tTq3M5a.jpg",
  },
  {
    id: 11,
    name: "Kids' Hoodie",
    price: 1300,
    category: "Kids",
    img: "https://i.imgur.com/yNLvL8n.jpg",
  },
  {
    id: 12,
    name: "Kids' Pants",
    price: 900,
    category: "Kids",
    img: "https://i.imgur.com/KRP7DPG.jpg",
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 1200,
    category: "Accessories",
    img: "https://i.imgur.com/yOLa8nI.jpg",
  },
  {
    id: 14,
    name: "Men's Watch",
    price: 5500,
    category: "Accessories",
    img: "https://i.imgur.com/cd4CqQc.jpg",
  },
  {
    id: 15,
    name: "Women's Earrings",
    price: 1100,
    category: "Accessories",
    img: "https://i.imgur.com/VcGg7kU.jpg",
  },
];

// make a localStorage array
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//  handlefilter
const handlefilter = (category) => {
  if (category == "All") {
    UImaker(products);
    return;
  }
  let temp = products.filter((ele) => ele.category == category);
  UImaker(temp);
};

// Make a UImaker
const UImaker = (products) => {
  let temp = "";
  for (let product of products) {
    temp += `
    <div class="product-card">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>`;
  }
  document.getElementById("product-container").innerHTML = temp;
};

// Add to Cart button
const addToCart = (id) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find((p) => p.id === id);

  if (!cart.some((item) => item.id === id)) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    alert("Product already in cart!");
  }

  document.getElementById("cart-count").innerText = cart.length;
};

//  filter-buttons
document
  .getElementById("Men")
  .addEventListener("click", () => handlefilter("Men"));
document
  .getElementById("Women")
  .addEventListener("click", () => handlefilter("Women"));
document
  .getElementById("kids")
  .addEventListener("click", () => handlefilter("kids"));
document
  .getElementById("Accessories")
  .addEventListener("click", () => handlefilter("Accessories"));
document
  .getElementById("All")
  .addEventListener("click", () => handlefilter("All"));

UImaker(products);
