

const likeBtns = document.querySelectorAll(".like-btn");


likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
    });
});