import { menuArr } from "./data.js";

const cartArr = [];
renderItems();
const paymentForm = document.getElementById("payment-form");

document.addEventListener("click", (e) => {
    if (e.target.dataset.add) {
        handleAddBtnClick(e.target.dataset.add);
    } else if (e.target.dataset.remove) {
        removeCartItem(e.target.dataset.remove);
    } else if (e.target.id === "complete-orderBtn") {
        getPaymentForm();
    } else if (e.target.id === "close-btn") {
        handleCloseBtn();
    }
});

paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const getFormData = new FormData(paymentForm);
    const userName = getFormData.get("name");
    console.log(userName);
    document.getElementById("msg-box").classList.remove("hidden");
    document.getElementById("msg-name").textContent = userName;
    document.getElementById("checkout-container").classList.add("hidden");
    cartArr.length = 0;
    renderCart();
});

function getPaymentForm() {
    document.getElementById("checkout-container").classList.remove("hidden");
}

function handleAddBtnClick(cardId) {
    const targetCardObj = menuArr.filter((obj) => obj.id === Number(cardId))[0];

    cartArr.push(targetCardObj);
    if (!document.getElementById("msg-box").classList.contains("hidden")) {
        document.getElementById("msg-box").classList.add("hidden");
    }
    renderCart();
}

function handleCloseBtn() {
    document.getElementById("checkout-container").classList.add("hidden");
}

function renderItems() {
    document.getElementById("menu-cards").innerHTML = getCardsHtml(menuArr);
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceEl = document.getElementById("total-price");

    cartArr.length !== 0
        ? (document.querySelector(".cart-items-container").style.display =
              "block")
        : (document.querySelector(".cart-items-container").style.display =
              "none");

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
    const indexTORemove = cartArr.findIndex(
        (item) => item.id === Number(itemId),
    );

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
