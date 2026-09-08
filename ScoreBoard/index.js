let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
const buttonsA = document.querySelectorAll(".buttons-a")
buttonsA.forEach(button => button.disabled = true)
let homeResult = 0
let guestResult = 0


function addScore(team, points) {
    if (team === "home") {
        homeResult += points
        homeScore.textContent = homeResult
    } else {
        guestResult += points
        guestScore.textContent = guestResult
    }
}

//newGame
function newGame() {
    homeResult = 0
    guestResult = 0
    homeScore.textContent = homeResult
    guestScore.textContent = guestResult
    resetTimer()
}

//timer
let timeInterval;
let timeRemaining = 1800;
let isRunning = false;

const display = document.getElementById("timer")
const startBtn = document.getElementById("start-btn")

function updateDisplay() {
    let minutes = Math.floor(timeRemaining / 60)
    let seconds = timeRemaining % 60

    let minutesStr = minutes.toString().padStart(2, "0")
    let secondsStr = seconds.toString().padStart(2, "0")

    display.textContent = `${minutesStr} : ${secondsStr}`
}

function startTimer() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    if (isRunning) return;
    isRunning = true;
    startBtn.disabled = true;
    buttonsA.forEach(button => button.disabled = false)


    timeInterval = setInterval(() => {
        if (timeRemaining === 0) {
            clearInterval(timeInterval)
            display.textContent = "Time's Up!"
            display.classList.add("time-up")
            isRunning = false
        } else {
            timeRemaining--
            updateDisplay()
        }

    }, 1000);
}

function resetTimer() {
    display.classList.remove("time-up")
    clearInterval(timeInterval);
    timeRemaining = 1800
    isRunning = false
    startBtn.disabled = false
    buttonsA.forEach(button => button.disabled = true)
    updateDisplay()
}