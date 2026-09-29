import { menuArr } from "./data.js";

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    handleAddBtnClick(e.target.dataset.add);
  }
});

const cartArr = [];
function handleAddBtnClick(cardId) {
  const targetCardObj = menuArr.filter((obj) => obj.id === Number(cardId))[0];

  cartArr.push(targetCardObj);

  renderCart();
}

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("total-price");
  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;
  cartArr.forEach((item) => {
    totalPrice += item.price;
    cartItemsContainer.innerHTML += `
      <div class="container" id="single-item">
        <h3>${item.name}</h3>
        <h3>${item.price}$</h3>
      </div>
    `;
  });

  totalPriceEl.textContent = `${totalPrice}$`;
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

// name: "Cheeseburger",
//         ingredients: ["beef", "cheddar cheese", "pickles", "onion"],
//         price: 10,
//         emoji: "🧀",
//         id: 2
