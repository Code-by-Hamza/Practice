let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let subTotal = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    subTotal += count
    totalEl.textContent = "SubTotal: " + subTotal
    countEl.textContent = 0
    count = 0

}

function reset() {
    count = 0
    subTotal = 0
    totalEl.textContent = "SubTotal: 0"
    saveEl.textContent = "Previous entries: "
    countEl.textContent = 0
}
