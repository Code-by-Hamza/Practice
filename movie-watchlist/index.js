import { API_KEY } from "./config.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const mainFeed = document.getElementById("feed");

let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!query) return;

    try {
        const res = await fetch(`${API_KEY}&s=${encodeURIComponent(query)}`);
        const data = await res.json();

        if (data.Response === "False") {
            mainFeed.innerHTML = `
                <div class="error">
                    <h2>Unable to find what you’re looking for. Please try another search.</h2>
                </div>`;
            return;
        }

        const detailedMoviePromises = data.Search.map(async (movie) => {
            const detailRes = await fetch(`${API_KEY}&i=${movie.imdbID}`);
            return await detailRes.json();
        });

        const movies = await Promise.all(detailedMoviePromises);
        renderFeed(movies);
    } catch (error) {
        console.error("Error fetching movies:", error);
    }
});

function renderFeed(movies) {
    let html = "";
    movies.forEach((movie) => {
        const poster = movie.Poster !== "N/A" ? movie.Poster : "./img/Icon.png";
        const rating = movie.imdbRating !== "N/A" ? movie.imdbRating : "N/A";
        const isAlreadyAdded = watchlist.includes(movie.imdbID);

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
                    <button class="watchlist-btn" type="button" data-id="${movie.imdbID}">
                        ${
                            isAlreadyAdded
                                ? `<i class="fa-solid fa-check" style="color: #00e5ff;"></i> <span>Added</span>`
                                : `<i class="fa-solid fa-circle-plus"></i> <span>Watchlist</span>`
                        }
                    </button>
                </div>
                <p class="description">${movie.Plot}</p>
            </div>
        </article>`;
    });
    mainFeed.innerHTML = html;
}

mainFeed.addEventListener("click", (e) => {
    const btn = e.target.closest(".watchlist-btn");
    if (!btn) return;

    const movieId = btn.dataset.id;
    if (!watchlist.includes(movieId)) {
        watchlist.push(movieId);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        btn.innerHTML = `<i class="fa-solid fa-check" style="color: #00e5ff;"></i> <span>Added</span>`;
    }
});
