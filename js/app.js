const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

const cards = document.getElementById("cards");

if (cards && typeof ANIME !== "undefined") {
  cards.innerHTML = ANIME.map((anime) => `
    <a class="anime-card" href="anime.html?id=${anime.id}">
      <img class="poster" src="${anime.poster}" alt="${anime.title}">
      <div class="info">
        <h3>${anime.title}</h3>
        <p>${anime.genre} • ⭐ ${anime.rating}</p>
      </div>
    </a>
  `).join("");
}
