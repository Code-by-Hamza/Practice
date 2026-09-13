const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

document.getElementById("generate").addEventListener("click", password);
const box1El = document.getElementById("box1")
const box2El = document.getElementById("box2")

//generate password
function password() {
    for (let i = 0; i < 17; i++) {
        box1El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
    for (i = 0; i < 17; i++) {
        box2El.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
    document.getElementById("generate").disabled = true
}

//click to copy
const copySpans = document.querySelectorAll(".box")
copySpans.forEach(span => {
    span.addEventListener("click", () => {
        const original = span.textContent
        navigator.clipboard.writeText(span.textContent).then( ()=> {
            span.textContent = "copied"
        });
        setTimeout(() => {
            span.textContent = original
        }, 2000);
    });

});

//Reload
document.getElementById("icon").addEventListener("click", ()=> {
    document.getElementById("generate").disabled = false
    box1El.textContent = "";
    box2El.textContent = "";
});
