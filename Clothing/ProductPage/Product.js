// Define products with unique ids and consistent keys
let products = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 500,
    category: "Men",
    img: "https://i.pinimg.com/736x/c9/5b/8b/c95b8b10325ae0feefaa570fc5ac382c.jpg",
  },
  {
    id: 2,
    name: "Men's Shirt",
    price: 789,
    category: "Men",
    img: "https://i.pinimg.com/736x/69/28/58/6928580f902f47636c98947dd63a3ec5.jpg",
  },
  {
    id: 3,
    name: "Men's Jacket",
    price: 1500,
    category: "Men",
    img: "https://i.pinimg.com/736x/5f/e4/bc/5fe4bcb195b6bc7e7b8e02a5cb1bf75f.jpg",
  },
  {
    id: 4,
    name: "Men's Sneakers",
    price: 3200,
    category: "Men",
    img: "https://i.pinimg.com/736x/cf/47/a1/cf47a1c49f83341bb6ff4fc2087ae16f.jpg",
  },
  {
    id: 5,
    name: "Women's Dress",
    price: 2500,
    category: "Women",
    img: "https://i.pinimg.com/736x/b1/15/db/b115db234b39e19fe738fd55d1b8fabc.jpg",
  },
  {
    id: 6,
    name: "Women's Jacket",
    price: 3200,
    category: "Women",
    img: "https://i.pinimg.com/736x/7e/fd/c4/7efdc4ff014d8fb86131d8eadb5d678c.jpg",
  },
  {
    id: 7,
    name: "Women's Handbag",
    price: 1800,
    category: "Women",
    img: "https://i.pinimg.com/736x/b0/6f/c7/b06fc75af00784e2175ecb30fd8dfca4.jpg",
  },
  {
    id: 8,
    name: "Women's Boots",
    price: 4500,
    category: "Women",
    img: "https://i.pinimg.com/736x/db/eb/34/dbeb344f3f10617c18c489a28e146f47.jpg",
  },
  {
    id: 9,
    name: "Kids' Jacket",
    price: 1800,
    category: "Kids",
    img: "https://i.pinimg.com/736x/68/41/2f/68412f611f709e99824decb6e08e2953.jpg",
  },
  {
    id: 10,
    name: "Kids' Sneakers",
    price: 1600,
    category: "Kids",
    img: "https://i.pinimg.com/736x/1b/7b/85/1b7b85d1af36e87b0fdb73552a84e224.jpg",
  },
  {
    id: 11,
    name: "Kids' Hoodie",
    price: 1300,
    category: "Kids",
    img: "https://i.pinimg.com/736x/f6/c3/53/f6c3532b3914ef97a60401c33e5fff54.jpg",
  },
  {
    id: 12,
    name: "Kids' Pants",
    price: 900,
    category: "Kids",
    img: "https://i.pinimg.com/736x/8a/17/d5/8a17d51325f4e039ff7136ed975c7ca8.jpg",
  },
  {
    id: 13,
    name: "Sunglasses",
    price: 1200,
    category: "Accessories",
    img: "https://i.pinimg.com/736x/79/e7/32/79e7327aa2b36c8df907ae1956640eac.jpg",
  },
  {
    id: 14,
    name: "Men's Watch",
    price: 5500,
    category: "Accessories",
    img: "https://i.pinimg.com/736x/7b/e1/fb/7be1fbd875a8e1f1ab99860e60ae6b34.jpg",
  },
  {
    id: 15,
    name: "Women's Earrings",
    price: 1100,
    category: "Accessories",
    img: "https://i.pinimg.com/736x/5b/28/d1/5b28d13d780620ca16fe61f9b1981e32.jpg",
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

// lth-htl sorting

const sorting = (Orderby) => {
  if (Orderby === "lth") {
    let temp = products.sort((a, b) => a.price - b.price);
    UImaker(temp);
  } else if (Orderby === "htl") {
    let temp = products.sort((a, b) => b.price - a.price);
    UImaker(temp);
  }
};

// lth-htl btn
document.getElementById("lth").addEventListener("click", () => sorting("lth"));
document.getElementById("htl").addEventListener("click", () => sorting("htl"));

// live-search
const search = (value) => {
  let temp = products.filter((ele) =>
    ele.name.toLowerCase().includes(value.toLowerCase())
  );
  UImaker(temp);
};

document.getElementById("search-bar").addEventListener("input", () => {
  let value = document.getElementById("search-bar").value;
  search(value);
});
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
