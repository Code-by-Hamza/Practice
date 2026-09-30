import { menuArr } from "./data.js";

const cartArr = [];

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    handleAddBtnClick(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    removeCartItem(e.target.dataset.remove);
  } else if (e.target.id === "complete-orderBtn") {
    getPaymentForm();
  } else if (e.target.id === "pay-btn") {
    removePaymentForm()
  }
});

function handleAddBtnClick(cardId) {
  const targetCardObj = menuArr.filter((obj) => obj.id === Number(cardId))[0];

  cartArr.push(targetCardObj);

  renderCart();
}

function getPaymentForm() {
  document.getElementById("checkout-container").style.display = "block";
  cartArr.length = 0
  renderCart()
}
function removePaymentForm(){
    document.getElementById("checkout-container").style.display = "none";

}
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");

  cartArr.length !== 0
    ? (document.querySelector(".cart-items-container").style.display = "block")
    : (document.querySelector(".cart-items-container").style.display = "none");

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;
  cartArr.forEach((item) => {
    totalPrice += item.price;
    cartItemsContainer.innerHTML += `
      <div class="container" id="single-item">
        <h3>${item.name}<button class="remove-btn" data-remove="${item.id}">Remove</button></h3>
        <h3>${item.price}$</h3>
      </div>
    `;
  });

  totalPriceEl.textContent = `${totalPrice}$`;
}

function removeCartItem(itemId) {
  const indexTORemove = cartArr.findIndex((item) => item.id === Number(itemId));

  if (indexTORemove !== -1) {
    cartArr.splice(indexTORemove, 1);
  }
  renderCart();
}

function getCardsHtml(menucards) {
  let cardHtml = "";
  menucards.forEach((card) => {
    cardHtml += `<section class="card-section">
        <span class="card-icon">${card.emoji}</span>
            <div>
                <h2 class="card-name">${card.name}</h2>
                <p class="card-recipe">${card.ingredients.join(",")}</p>
                <p class="card-price">${card.price}$</p>
            </div>
        <div class="plus-btn">
            <span class="plus" data-add="${card.id}">+</span>
        </div>
    </section>`;
  });
  return cardHtml;
}

document.getElementById("menu-cards").innerHTML = getCardsHtml(menuArr);
