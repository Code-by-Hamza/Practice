

const likeBtns = document.querySelectorAll(".like-btn");
const postContainers = document.querySelectorAll(".img-container")
const likesContainers = document.querySelectorAll(".likes-container")
let liked = false

// like icon color
likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        const section = likeBtn.closest("section");
        const likes = section.querySelector(".likes");
        if (!liked) {
            // Increment the likes
            let currentLikes = parseInt(likes.textContent) || 0;
            likes.textContent = (currentLikes + 1) + " Likes";
            liked = true
            section.querySelector(".like-btn").classList.toggle("liked")

        } else {
            // Decrement the likes
            currentLikes = parseInt(likes.textContent) || 0;
            likes.textContent = (currentLikes - 1) + " Likes";
            liked = false
            section.querySelector(".like-btn").classList.toggle("liked")
        }
    });
});


//posts heart effect
postContainers.forEach(container => {
    container.addEventListener("dblclick", () => {
        const overlayHeart = container.querySelector(".overlay-heart")
        const section = container.closest("section");
        const likes = section.querySelector(".likes");
        if (!liked) {
            // Increment the likes
            let currentLikes = parseInt(likes.textContent) || 0;
            likes.textContent = (currentLikes + 1) + " Likes";
            liked = true
            section.querySelector(".like-btn").classList.toggle("liked")

        } else {
            // Decrement the likes
            currentLikes = parseInt(likes.textContent) || 0;
            likes.textContent = (currentLikes - 1) + " Likes";
            liked = false
            section.querySelector(".like-btn").classList.toggle("liked")
        }


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

// increase likes 
function increaseLikes() {
    likesContainers.forEach(container => {

        const likes = container.querySelector(".likes")

        let currentLikes = parseInt(likes.textContent) || 0;
        likes.textContent = currentLikes + 1;
        likes.textContent += " Likes"
        console.log(likes)
    })
}



//const text = "(32 Likes)";
//const count = parseInt(text.match(/\d+/)[0], 10);

//console.log(count); // Output: 32
