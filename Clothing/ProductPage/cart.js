let cart = JSON.parse(localStorage.getItem("cart")) || [];

const displayCart = () => {
  const container = document.getElementById("cart-container");
  container.innerHTML = "";
  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((product, index) => {
    container.innerHTML += `
            <div class="cart-item">
            <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
  });
};

const removeFromCart = (index) => {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
};

const checkout=()=> {
  alert("Thank you for your purchase!");
  localStorage.removeItem("cart");
  window.location.href = "product.html";
}

displayCart();
