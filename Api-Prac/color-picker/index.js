const inputForm = document.getElementById("input-form");

inputForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(inputForm);

    const inputData = Object.fromEntries(formData.entries());
    console.log(inputData)
});

