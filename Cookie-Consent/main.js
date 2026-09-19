//manually clear locall storage first 
 //localStorage.clear()



const cookiePopup = document.getElementById("popup")
const acceptBtn = document.getElementById("accept-btn")
const checkCookies = localStorage.getItem("cookies")
const closeBtn = document.getElementById("close-btn")

if(checkCookies === "true") {
    cookiePopup.style.display = "none"
} else {
    cookiePopup.style.display = "flex"
}


acceptBtn.addEventListener("click", ()=> {
    cookiePopup.style.display = "none";
    localStorage.setItem("cookies", true)
})

closeBtn.addEventListener("click", ()=>{
    cookiePopup.style.display = "none";
})



