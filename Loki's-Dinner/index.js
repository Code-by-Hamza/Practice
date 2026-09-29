import { menuArr } from "./data.js";

document.addEventListener("click", (e) => {
  if (e.target.dataset.add) {
    handleAddBtnClick(e.target.dataset.add);
  }
});

function handleAddBtnClick(cardId) {
  const targetCardObj = menuArr.filter(function(obj) {
    return obj.id === Number(cardId);
  })[0]
  return document.getElementById('cart-items').innerHTML += `<div class="container" id="single-item">
          <h3>${targetCardObj.name}</h3>
          <h3>${targetCardObj.price}$</h3>
        </div>
    `
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
  //  // cardHtml += `<div class="cart-items"></div>`
  return cardHtml;
}

document.getElementById("menu-cards").innerHTML = getCardsHtml(menuArr);

// name: "Cheeseburger",
//         ingredients: ["beef", "cheddar cheese", "pickles", "onion"],
//         price: 10,
//         emoji: "🧀",
//         id: 2
