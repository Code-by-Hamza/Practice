/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const btnEl = document.getElementById("convert-btn")


//limit input to 2 digits
numberInput.addEventListener('input-el', function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
});

btnEl.addEventListener("click", () => {
    const inputValue = numberInput.valueAsNumber
    lengthEl.textContent = length(inputValue)
    console.log(inputValue)

})

//convertion functions
function length(input) {
    let feet = input * 3.281
    let meters = input / 3.281
    return `${input} meters = ${feet.toFixed(3)} | ${input} feet = ${meters.toFixed(3)} meters`
}








