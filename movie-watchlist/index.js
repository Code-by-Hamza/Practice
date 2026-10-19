import { API_KEY } from "./config.js";

const searchForm = document.getElementById('search-form')

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const formData = new FormData(searchForm);
    const searchName = formData.get('search')
    console.log(searchName)

})