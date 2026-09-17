/*
1 meter = 3.281 feet
1 liters = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById("input-el");
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const btnEl = document.getElementById("convert-btn")


//limit input to 2 digits
numberInput.addEventListener("input", function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2);
    }
});

btnEl.addEventListener("click", () => {
    const inputValue = numberInput.valueAsNumber
    lengthEl.textContent = lengthF(inputValue)
    volumeEl.textContent = volumeF(inputValue)
    massEl.textContent = massF(inputValue)
    console.log(inputValue)

})

//convertion functions
function lengthF(input) {
    let feet = input * 3.281
    let meters = input / 3.281
    return `${input} meters = ${feet.toFixed(3)} | ${input} feet = ${meters.toFixed(3)} meters`
}
function volumeF(input) {
    let gallons = input * 0.264
    let liters = input / 0.264
    return `${input} gallons = ${liters.toFixed(3)} liters | ${input} liters = ${gallons.toFixed(3)} gallons`
}
function massF(input) {
    let pounds = input * 2.204
    let kilos = input / 2.204
    return `${input} kilos = ${pounds.toFixed(3)} pounds | ${input} pounds = ${kilos.toFixed(3)} kilos`
}








