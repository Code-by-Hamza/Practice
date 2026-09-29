import { menuArr } from "./data.js";


function getCardsHtml(menucards) {
    let cardHtml = ''
    menucards.forEach(card => {
        cardHtml += `<section class="card-section">
        <span class="card-icon">${card.emoji}</span>
            <div>
                <h2 class="card-name">${card.name}</h2>
                <p class="card-recipe">${card.ingredients.join(',')}</p>
                <p class="card-price">${card.price}$</p>
            </div>
        <div class="plus-btn">
            <span class="plus">+</span>
        </div>
    </section>`
    });
    return cardHtml
}

document.getElementById('menu-cards').innerHTML = getCardsHtml(menuArr)

    // name: "Cheeseburger",
    //         ingredients: ["beef", "cheddar cheese", "pickles", "onion"],
    //         price: 10,
    //         emoji: "🧀",
    //         id: 2
