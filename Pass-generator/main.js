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
const box1El = document.getElementById("box1")
const box2El = document.getElementById("box2")

//generate password

function password() {
    let pool = [...characters]
    if (toggleSymbols.checked) {
        pool.push(...symbols);
    }
    if (toggleNumbers.checked) {
        pool.push(...numbers);
    }

    box1El.textContent = ""
    box2El.textContent = ""
    for (let i = 0; i < 16; i++) {
        box1El.textContent += pool[Math.floor(Math.random() * pool.length)]
    }
    for (let i = 0; i < 16; i++) {
        
        box2El.textContent += pool[Math.floor(Math.random() * pool.length)]
    }
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
    box1El.textContent = "";
    box2El.textContent = "";
});
