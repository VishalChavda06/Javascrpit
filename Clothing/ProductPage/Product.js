// const products = [
//   {
//     id: 1,
//     name: "Men's Jacket",
//     price: 40,
//     category: "men",
//     img: "https://static.zara.net/assets/public/c9ce/e60e/2edd45a280a4/2e013619855e/00526320066-p/00526320066-p.jpg?ts=1723796697966&w=1024",
//   },
//   {
//     id: 2,
//     name: "Men's T-Shirt",
//     price: 20,
//     category: "men",
//     img: "https://static.zara.net/assets/public/c9ce/e60e/2edd45a280a4/2e013619855e/00526320066-p/00526320066-p.jpg?ts=1723796697966&w=1024",
//   },
//   {
//     id: 3,
//     name: "Men's Jeans",
//     price: 35,
//     category: "men",
//     img: "https://image.hm.com/assets/hm/bb/07/bb0720a18540582d0a9135822502bf51aeac40a1.jpg?imwidth=657",
//   },
//   {
//     id: 4,
//     name: "Women's Dress",
//     price: 50,
//     category: "women",
//     img: "https://image.hm.com/assets/hm/bb/07/bb0720a18540582d0a9135822502bf51aeac40a1.jpg?imwidth=657",
//   },
//   {
//     id: 5,
//     name: "Women's Handbag",
//     price: 60,
//     category: "women",
//     img: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_3.13.41_PM.jpg?v=1735812102",
//   },
//   {
//     id: 6,
//     name: "Women's Shoes",
//     price: 45,
//     category: "women",
//     img: "https://nobero.com/cdn/shop/files/WhatsApp_Image_2025-01-02_at_3.13.41_PM.jpg?v=1735812102",
//   },
//   {
//     id: 7,
//     name: "Kids' T-shirt",
//     price: 20,
//     category: "kids",
//     img: "https://static.zara.net/assets/public/93cc/801e/4fae4e7b9742/005852cdbd1a/07200420700-p/07200420700-p.jpg?ts=1741166259269&w=1024",
//   },
//   {
//     id: 8,
//     name: "Kids' Shoes",
//     price: 30,
//     category: "kids",
//     img: "https://static.zara.net/assets/public/93cc/801e/4fae4e7b9742/005852cdbd1a/07200420700-p/07200420700-p.jpg?ts=1741166259269&w=1024",
//   },
//   {
//     id: 9,
//     name: "Stylish Watch",
//     price: 80,
//     category: "accessories",
//     img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
//   },
//   {
//     id: 10,
//     name: "Sunglasses",
//     price: 25,
//     category: "accessories",
//     img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
//   },
// ];

// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// function displayProducts(category) {
//   const container = document.getElementById("product-container");
//   container.innerHTML = "";

//   const filteredProducts =
//     category === "all"
//       ? products
//       : products.filter((p) => p.category === category);

//   filteredProducts.forEach((product) => {
//     const productCard = `
//             <div class="product-card">
//                 <img src="${product.img}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <p>$${product.price}</p>
//                 <button onclick="addToCart(${product.id})">Add to Cart</button>
//             </div>
//         `;
//     container.innerHTML += productCard;
//   });
// }

// function addToCart(id) {
//   const product = products.find((p) => p.id === id);
//   cart.push(product);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   document.getElementById("cart-count").innerText = cart.length;
// }

// function filterProducts(category) {
//   displayProducts(category);
// }

// // Load all products initially
// displayProducts("all");

// Make a product

let products = [
  {
    Id: 1,
    name: "Men",
    price: 50000,
    category: "men",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 2,
    name: "Men",
    price: 50,
    category: "Men",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 3,
    name: "Men",
    price: 50,
    category: "Men",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 4,
    name: "Accessories",
    price: 7890,
    category: "Accessories",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 5,
    name: "kids",
    price: 550,
    category: "kids",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 6,
    name: "Women",
    price: 500,
    category: "Women",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
  {
    Id: 7,
    name: "Women",
    price: 500,
    category: "Women",
    img: "https://static.zara.net/assets/public/bde3/c693/4fc94407929b/075aa39a2123/03918607711-e1/03918607711-e1.jpg?ts=1735307340413&w=750",
  },
];
// make asecond array to make a add to cart page
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// filter
const handlefilter = (category) => {
  if (category == "All") {
    UImaker(products);
    return;
  }
  let temp = products.filter((ele) => ele.category == category);
  UImaker(temp);
};

// show a UImaker = >

const UImaker = (products) => {
  let temp = "";
  for (let i = 0; i < products.length; i++) {
    temp += `
    <div class="product-card">
        <img src="${products[i].img}" alt="${products[i].name}">
        <h3>${products[i].name}</h3>
        <p>$${products[i].price}</p>
        <button onclick="addToCart(${products[i].id})">Add to Cart</button>
      </div>`;
  }
  document.getElementById("product-container").innerHTML = temp;
};

// filter call button
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

// Add to crat
const addToCart = (id) => {
  let product = products.find((p) => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").innerText = cart.length;
  // alert("addToCart")
};

// Exixst addToCart
const Exixst = (id) => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id == id) {
      return true;
    }
  }
  return false;
};
UImaker(products);
