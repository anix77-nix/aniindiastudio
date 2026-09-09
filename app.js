const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
if (menuBtn && menu) {
 menuBtn.addEventListener("click", () => {
 menu.classList.toggle("open");
 });
 document.addEventListener("click", (e) => {
 if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
 menu.classList.remove("open");
 }
 });
}
function card(anime) {
 return `
 <a class="anime-card" href="anime.html?id=${anime.id}">
 <img class="poster" src="${anime.poster}" alt="${anime.title}">
 <div class="info">
 <h3>${anime.title}</h3>
 <p>★ ${anime.rating} • ${anime.genre}</p>
 </div>
 </a>
 `;
}
function renderCards(id, list) {
 const el = document.getElementById(id);
 if (el) el.innerHTML = list.map(card).join("");
}
renderCards("trending", ANIME.slice(0, 4));
renderCards("popular", ANIME.slice().reverse());
renderCards("latest", ANIME.slice(1));
