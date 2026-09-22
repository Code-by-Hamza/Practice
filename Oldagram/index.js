

const likeBtns = document.querySelectorAll(".like-btn");

likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        likeBtn.classList.toggle("liked");
    });
});

const postContainers = document.querySelectorAll(".img-container")

postContainers.forEach(container => {
    container.addEventListener("dblclick", () => {
        const overlayHeart = container.querySelector(".overlay-heart")

        if (!overlayHeart) return;

        overlayHeart.classList.remove("is-hiding", "is-visible");

        void overlayHeart.offsetWidth

        overlayHeart.classList.add("is-visible");

        setTimeout(() => {
            overlayHeart.classList.add("is-hiding");

            overlayHeart.addEventListener("animationend", function handler() {
                overlayHeart.classList.remove("is-hiding", "is-visible");
                overlayHeart.removeEventListener("animationend", handler)
            }, { once: true })
        }, 700);
    })
})