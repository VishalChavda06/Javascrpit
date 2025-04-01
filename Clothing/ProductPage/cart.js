let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const checkoutBtn = document.getElementById("checkout-btn");

function updateCart() {
  cartContainer.innerHTML = "";
  let finalTotal = 0;
  let hasItems = false;

  cartItems.forEach((item, index) => {
    // Fix: Ensure quantity exists and is a number
    if (!item.quantity || isNaN(item.quantity)) {
      item.quantity = 1;
    }
    if (!item.price || isNaN(item.price)) {
      item.price = 0;
    }

    let itemTotal = item.price * item.quantity;
    finalTotal += itemTotal;

    if (item.quantity > 0) hasItems = true;

    let row = document.createElement("tr");
    row.innerHTML = `
              <td><img src="${item.img}" alt="${
      item.name
    }" class="cart-image"></td>
              <td>${item.name || "Unnamed Product"}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>
                  <button class="qty-btn" data-index="${index}" data-action="decrease">-</button>
                  <span>${item.quantity}</span>
                  <button class="qty-btn" data-index="${index}" data-action="increase">+</button>
              </td>
              <td>$${itemTotal.toFixed(2)}</td>
              <td><button class="remove-btn" data-index="${index}">Remove</button></td>
          `;
    cartContainer.appendChild(row);
  });

  totalPriceElement.textContent = finalTotal.toFixed(2);
  localStorage.setItem("cart", JSON.stringify(cartItems));

  // Disable checkout button if cart is empty
  checkoutBtn.disabled = !hasItems;

  // Quantity Buttons
  document.querySelectorAll(".qty-btn").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      let action = this.getAttribute("data-action");

      if (action === "increase") {
        cartItems[index].quantity++;
      } else if (action === "decrease" && cartItems[index].quantity > 0) {
        cartItems[index].quantity--;
      }
      updateCart();
    });
  });

  // Remove Buttons
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      cartItems.splice(index, 1);
      updateCart();
    });
  });

  // Checkout Button
  checkoutBtn.addEventListener("click", function () {
    if (hasItems) {
      alert("Proceeding to Checkout!");
      localStorage.removeItem("cart"); // Clear cart on checkout
      updateCart(); // Refresh cart
    }
  });
}
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    let product = {
      name: this.getAttribute("data-name") || "Unnamed Product",
      price: parseFloat(this.getAttribute("data-price")) || 0,
      image: this.getAttribute("data-image") || "",
      quantity: 0, // Default quantity is now properly set
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let existingItem = cart.find((item) => item.name === product.name);

    if (!existingItem) {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart! Go to cart to increase quantity.");
  });
});

updateCart();
