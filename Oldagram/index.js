// Posts Data
const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 475
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Html
const feed = document.querySelector("#feed");
posts.forEach(post => {
    const html = `
    <section>
        <div class="container">
            <img class="avatar" src="${post.avatar}">
            <div>
                <span class="name bold-text">${post.name}</span><br>
                <span class="location">${post.location}</span>
            </div>
        </div>
        <div class="img-container">
            <img class="post" src="${post.post}" alt="A Selfie Post.">
            <img class="overlay-heart" src="images/heart.png">
        </div>
        <div class="container-two">
            <div>
                <button class="like-btn heart-icon"></button>
                <img class="icon" src="images/icon-comment.png">
                <img class="icon" src="images/icon-dm.png">
            </div>
            <div class="likes-container">
                <span class="likes bold-text">${post.likes} Likes</span>
            </div>
            <p><span class="bold-text">${post.username}</span> ${post.comment}</p>
        </div>
    </section>
    `;
    feed.innerHTML += html;
})

// Likes logic
const likeBtns = document.querySelectorAll(".like-btn");
const postContainers = document.querySelectorAll(".img-container")
const likesContainers = document.querySelectorAll(".likes-container")

likeBtns.forEach(likeBtn => {
    likeBtn.addEventListener("click", () => {
        const section = likeBtn.closest("section");
        toggleLike(section)
    });
});

postContainers.forEach(container => {
    container.addEventListener("dblclick", () => {
        const overlayHeart = container.querySelector(".overlay-heart")
        const section = container.closest("section");
        toggleLike(section)

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

function toggleLike(section) {
    const likes = section.querySelector(".likes");
    const likeBtn = section.querySelector(".like-btn");

    if (!likeBtn.classList.contains("liked")) {
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
}