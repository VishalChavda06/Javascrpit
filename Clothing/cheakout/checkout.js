let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
const orderItemsList = document.getElementById("order-items");
const finalPriceElement = document.getElementById("final-price");
const placeOrderBtn = document.getElementById("place-order-btn");
const cardDetails = document.querySelector(".card-details");
const error = document.getElementById("error");

let finalTotal = 0;

// Display Cart Items in Order Summary
cartItems.forEach((item) => {
  let itemTotal = item.price * item.quantity;
  finalTotal += itemTotal;

  let listItem = document.createElement("li");
  listItem.innerHTML = `${item.name} x${item.quantity} - $${itemTotal.toFixed(
    2
  )}`;
  orderItemsList.appendChild(listItem);
});

finalPriceElement.innerHTML = finalTotal.toFixed(2);

// Handle Payment Selection
document.querySelectorAll("input[name='payment']").forEach((radio) => {
  radio.addEventListener("change", () => {
    if (this.value === "card") {
      cardDetails.style.display = "block";
    } else {
      cardDetails.style.display = "none";
    }
  });
});

// Place Order
placeOrderBtn.addEventListener("click", () => {
  let name = document.getElementById("name").value.trim();
  let address = document.getElementById("address").value.trim();
  let city = document.getElementById("city").value.trim();
  let zipcode = document.getElementById("zipcode").value.trim();
  let number = document.getElementById("number").value.trim();
  let paymentMethod = document.querySelector(
    "input[name='payment']:checked"
  ).value;

  if (!name || !address || !city || !zipcode || !number) {
    // alert("Please fill in all address details.");
    error.style.display = "block";
    return;
  }

  if (paymentMethod === "card") {
    let cardNumber = document.getElementById("card-number").value.trim();
    let expiryDate = document.getElementById("expiry-date").value.trim();
    let cvv = document.getElementById("cvv").value.trim();

    if (!cardNumber || !expiryDate || !cvv) {
      alert("Please enter valid card details.");
      return;
    }
  }

  alert("Order placed successfully!");
  localStorage.removeItem("cart"); // Clear cart after order
  window.location.href = "/Clothing/HomePage/Home.html"; // Redirect to homepage
});
