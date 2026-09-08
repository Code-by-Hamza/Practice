let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeResult = 0
let guestResult = 0

function homeone() {
    homeResult++
    homeScore.textContent = homeResult
}
function hometwo() {
    homeResult += 2
    homeScore.textContent = homeResult
}
function homethree() {
    homeResult += 3
    homeScore.textContent = homeResult
}

function guestone() {
    guestResult++
    guestScore.textContent = guestResult
}
function guesttwo() {
    guestResult += 2
    guestScore.textContent = guestResult
}
function guestthree() {
    guestResult += 3
    guestScore.textContent = guestResult
}