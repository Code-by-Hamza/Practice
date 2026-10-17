const inputForm = document.getElementById("input-form");


inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(inputForm);

    const inputData = Object.fromEntries(formData.entries());
    const baseUrl = "https://www.thecolorapi.com";
    const endPoint = `/scheme?hex=${inputData.color.replace("#", "")}&mode=${inputData.mode}&count=6`;
    getColors(baseUrl +  endPoint)
});

function getColors(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const colorsArr = data.colors
            
            const hexValues = colorsArr.map(color => color?.hex?.value)
            renderColors(hexValues)
        })
    
}
function renderColors(hexArr){
    let html = ''
    for (let i=0; i<hexArr.length; i++){
        html += `<div style="background-color: ${hexArr[i]};" class="color"><span class="single-color">${hexArr[i]}</span></div>`
    }
    document.getElementById('color-container').innerHTML = html
}