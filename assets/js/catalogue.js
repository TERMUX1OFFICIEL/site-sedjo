/** Catalogue : recherche textuelle + filtres par categorie. */
import { products, categories } from "../../data/products.js";
import { mountChrome, escapeHtml, productCard, initReveal } from "./ui.js";

const state = {
  query: "",
  category: "all",
  sort: "default",
};

function normalize(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function filtered() {
  const q = normalize(state.query).trim();
  let list = products.filter((p) => {
    const inCat = state.category === "all" || p.category === state.category;
    if (!inCat) return false;
    if (!q) return true;
    const haystack = [p.name, p.summary, p.description, ...(p.highlights || [])]
      .map(normalize)
      .join(" ");
    return haystack.includes(q);
  });

  if (state.sort === "az") {
    list = [...list].sort((a, b) => a.name.localeCompare(b.name, "fr"));
  } else if (state.sort === "za") {
    list = [...list].sort((a, b) => b.name.localeCompare(a.name, "fr"));
  }
  return list;
}

function render() {
  const grid = document.getElementById("productGrid");
  const count = document.getElementById("resultCount");
  const list = filtered();

  if (count) {
    count.textContent =
      list.length === 0
        ? "Aucun produit"
        : `${list.length} produit${list.length > 1 ? "s" : ""} affiché${
            list.length > 1 ? "s" : ""
          }`;
  }

  if (!grid) return;
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <h2>Aucun résultat</h2>
        <p>Essayez un autre mot-clé ou affichez toutes les catégories.</p>
        <button class="btn btn-outline" type="button" id="resetFilters">Réinitialiser</button>
      </div>`;
    const reset = document.getElementById("resetFilters");
    if (reset)
      reset.addEventListener("click", () => resetAll(searchInput, chipsHost));
    return;
  }

  grid.innerHTML = list.map(productCard).join("");
  initReveal(grid);
}

function resetAll(searchInput, chipsHost) {
  state.query = "";
  state.category = "all";
  if (searchInput) searchInput.value = "";
  syncChips(chipsHost);
  render();
}

function syncChips(chipsHost) {
  if (!chipsHost) return;
  chipsHost.querySelectorAll(".chip").forEach((chip) => {
    chip.setAttribute(
      "aria-pressed",
      String(chip.dataset.cat === state.category),
    );
  });
}

function renderCatalogue() {
  const main = document.getElementById("main");
  if (!main) return;

  main.innerHTML = `
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">Catalogue</p>
        <h1>Tous nos produits naturels</h1>
        <p class="lead">Filtrez par catégorie ou recherchez un produit. Prix communiqués sur demande.</p>
      </div>
    </section>

    <section class="section" style="padding-top:32px">
      <div class="wrap">
        <div class="toolbar">
          <div class="search-box">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 4.99L20.49 19Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z"/>
            </svg>
            <label class="visually-hidden" for="searchInput">Rechercher un produit</label>
            <input type="search" id="searchInput" placeholder="Rechercher : cajou, cacao, liqueur…" />
          </div>
          <div class="toolbar-right">
            <p class="result-count" id="resultCount"></p>
            <select class="mini" id="sortSelect" aria-label="Trier les produits">
              <option value="default">Tri par défaut</option>
              <option value="az">Nom (A → Z)</option>
              <option value="za">Nom (Z → A)</option>
            </select>
          </div>
          <div class="filters" id="chips">
            ${categories
              .map(
                (c) =>
                  `<button class="chip" type="button" data-cat="${escapeHtml(
                    c.id,
                  )}" aria-pressed="${c.id === "all"}">${escapeHtml(c.name)}</button>`,
              )
              .join("")}
          </div>
        </div>

        <div class="grid-products" id="productGrid"></div>
      </div>
    </section>
  `;

  const searchInput = document.getElementById("searchInput");
  const chipsHost = document.getElementById("chips");
  const sortSelect = document.getElementById("sortSelect");

  // Categorie initiale depuis l'URL (?cat=boissons)
  const params = new URLSearchParams(window.location.search);
  const wanted = params.get("cat");
  if (wanted && categories.some((c) => c.id === wanted)) {
    state.category = wanted;
  }
  const wantedSort = params.get("sort");
  if (wantedSort && ["default", "az", "za"].includes(wantedSort)) {
    state.sort = wantedSort;
    if (sortSelect) sortSelect.value = wantedSort;
  }
  const q0 = params.get("q");
  if (q0) {
    state.query = q0;
    if (searchInput) searchInput.value = q0;
  }

  if (searchInput) {
    let timer;
    searchInput.addEventListener("input", (event) => {
      state.query = event.target.value;
      clearTimeout(timer);
      timer = setTimeout(render, 150);
    });
  }

  if (chipsHost) {
    chipsHost.addEventListener("click", (event) => {
      const chip = event.target.closest(".chip");
      if (!chip) return;
      state.category = chip.dataset.cat;
      syncChips(chipsHost);
      render();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (event) => {
      state.sort = event.target.value;
      render();
    });
  }

  syncChips(chipsHost);
  render();
}

mountChrome();
renderCatalogue();
