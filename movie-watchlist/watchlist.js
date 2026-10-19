import { API_KEY } from "./config.js";

const watchlistFeed = document.getElementById("watchlist-feed");

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

async function renderWatchlist() {
    if (watchlist.length === 0) {
        watchlistFeed.innerHTML = `
            <div class="empty-feed">
                <span>Your watchlist is looking a little empty...</span>
                <a href="index.html" class="nav-link" style="margin-top: 1rem; color: #00e5ff;">
                    <i class="fa-solid fa-circle-plus"></i> Let's add some movies!
                </a>
            </div>`;
        return;
    }

    try {
        const moviePromises = watchlist.map(async (id) => {
            const res = await fetch(`${API_KEY}&i=${id}`);
            return await res.json();
        });

        const movies = await Promise.all(moviePromises);

        let html = "";
        movies.forEach((movie) => {
            const poster =
                movie.Poster !== "N/A" ? movie.Poster : "./img/Icon.png";
            const rating =
                movie.imdbRating !== "N/A" ? movie.imdbRating : "N/A";

            html += `
            <article class="card">
                <img src="${poster}" alt="${movie.Title} Poster" class="poster"/>
                <div class="card-details">
                    <div class="card-header">
                        <h2>${movie.Title}</h2>
                        <span class="rating">⭐ ${rating}</span>
                    </div>
                    <div class="card-meta">
                        <span>${movie.Runtime}</span>
                        <span>${movie.Genre}</span>
                        <button class="remove-btn" type="button" data-id="${movie.imdbID}">
                            <i class="fa-solid fa-circle-minus"></i>
                            <span>Remove</span>
                        </button>
                    </div>
                    <p class="description">${movie.Plot}</p>
                </div>
            </article>`;
        });

        watchlistFeed.innerHTML = html;
    } catch (error) {
        console.error("Error fetching watchlist movies:", error);
    }
}

watchlistFeed.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".remove-btn");
    if (!removeBtn) return;

    const movieId = removeBtn.dataset.id;

    watchlist = watchlist.filter((id) => id !== movieId);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));

    renderWatchlist();
});

renderWatchlist();
