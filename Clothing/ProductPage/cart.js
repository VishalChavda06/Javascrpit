// let cart = JSON.parse(localStorage.getItem("cart")) || [];

// const displayCart = () => {
//   const container = document.getElementById("cart-container");
//   container.innerHTML = "";
//   if (cart.length === 0) {
//     container.innerHTML = "<p>Your cart is empty.</p>";
//     return;
//   }

//   cart.forEach((product, index) => {
//     container.innerHTML += `
//             <div class="cart-item">
//             <img src="${product.img}" alt="${product.name}">
//                 <h3>${product.name}</h3>
//                 <p>$${product.price}</p>
//                 <button onclick="removeFromCart(${index})">Remove</button>
//             </div>
//         `;
//   });
// };

// const removeFromCart = (index) => {
//   cart.splice(index, 1);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   displayCart();
// };

// const checkout=()=> {
//   alert("Thank you for your purchase!");
//   localStorage.removeItem("cart");
//   window.location.href = "product.html";
// }

// displayCart();

document.addEventListener("DOMContentLoaded",  ()=> {
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");

  const updateCart=()=> {
    cartContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
      let cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}" class="cart-image">
              <div class="cart-details">
                  <h3>${item.name}</h3>
                  <p>Price: $${item.price.toFixed(2)}</p>
                  <button class="remove-btn" data-index="${index}">Remove</button>
              </div>
          `;
      cartContainer.appendChild(cartItem);
    });

    localStorage.setItem("cart", JSON.stringify(cartItems));

    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", function () {
        let index = this.getAttribute("data-index");
        cartItems.splice(index, 1);
        updateCart();
      });
    });
  }

  updateCart();
});

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    let product = {
      name: this.getAttribute("data-name"),
      price: parseFloat(this.getAttribute("data-price")),
      image: this.getAttribute("data-image"),
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  });
});
