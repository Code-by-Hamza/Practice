const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
//include symbols
const toggleSymbols = document.querySelector("#symbols")
const toggleNumbers = document.querySelector("#numbers")

document.getElementById("generate").addEventListener("click", password);
const passwordOneEl = document.getElementById("box1")
const passwordTwoEl = document.getElementById("box2")

//generate password
const lengthSlider = document.querySelector("#length-slider")
const passwordLength = [8,12,16]
function password() {
    let pool = [...characters]
    if (toggleSymbols.checked) {
        pool.push(...symbols);
    }
    if (toggleNumbers.checked) {
        pool.push(...numbers);
    }

    passwordOneEl
.textContent = ""
    passwordTwoEl.textContent = ""
    const length = passwordLength[lengthSlider.value - 1]
    for (let i = 0; i < length; i++) {
        passwordOneEl
    .textContent += pool[Math.floor(Math.random() * pool.length)]
    }
    for (let i = 0; i < length; i++) {
        
        passwordTwoEl.textContent += pool[Math.floor(Math.random() * pool.length)]
    }
    document.getElementById("generate").disabled = true
}

//click to copy
const copySpans = document.querySelectorAll(".box")
copySpans.forEach(span => {
    span.addEventListener("click", () => {
        const original = span.textContent
        navigator.clipboard.writeText(span.textContent).then(() => {
            span.textContent = "copied"
        });
        setTimeout(() => {
            span.textContent = original
        }, 2000);
    });

});

//Reload
document.getElementById("icon").addEventListener("click", () => {
    passwordOneEl
.textContent = "";
    passwordTwoEl.textContent = "";
    document.getElementById("generate").disabled = false
});
