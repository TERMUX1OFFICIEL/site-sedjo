/** Page detail produit (?id=...). Redirige vers le catalogue si introuvable. */
import { store } from "../../data/store.js";
import { products } from "../../data/products.js";
import {
  mountChrome,
  escapeHtml,
  productWhatsappLink,
  phoneList,
  categoryName,
  initReveal,
  renderImage,
} from "./ui.js";

function notFound(main) {
  main.innerHTML = `
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">Introuvable</p>
        <h1>Ce produit n'existe pas</h1>
        <p class="lead">Le produit demandé n'est plus disponible ou le lien est incorrect.</p>
        <a class="btn btn-primary" href="catalogue.html">Retour au catalogue</a>
      </div>
    </section>`;
}

function renderDetail(main, product) {
  const [firstPhone] = phoneList();
  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  main.innerHTML = `
    <section class="section" style="padding-top:24px">
      <div class="wrap">
        <nav class="breadcrumb" aria-label="Fil d'Ariane">
          <a href="index.html">Accueil</a> ›
          <a href="catalogue.html">Catalogue</a> ›
          <a href="catalogue.html?cat=${encodeURIComponent(product.category)}">${escapeHtml(
            categoryName(product.category)
          )}</a> › ${escapeHtml(product.name)}
        </nav>

        <div class="product-detail">
          <div class="gallery">
            <div class="gallery-main">
              <img id="mainImage" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" width="600" height="600" />
            </div>
          </div>

          <div>
            <p class="eyebrow">${escapeHtml(categoryName(product.category))}</p>
            <h1 class="pd-title">${escapeHtml(product.name)}</h1>
            <p class="pd-price">${escapeHtml(product.price || "Prix sur demande")}</p>
            <p>${escapeHtml(product.description)}</p>

            ${
              (product.highlights || []).length
                ? `<h2 class="pd-subtitle">Bienfaits / caractéristiques</h2>
            <ul class="benefit-list">
              ${(product.highlights || [])
                .map((h) => `<li>${escapeHtml(h)}</li>`)
                .join("")}
            </ul>`
                : ""
            }

            ${
              (product.usages || []).length
                ? `<h2 class="pd-subtitle">Usages</h2>
            <ul class="benefit-list">
              ${(product.usages || [])
                .map((u) => `<li>${escapeHtml(u)}</li>`)
                .join("")}
            </ul>`
                : ""
            }

            <div class="pd-actions">
              <a class="btn btn-wa" href="${productWhatsappLink(product)}" target="_blank" rel="noopener">Commander sur WhatsApp</a>
              ${
                firstPhone
                  ? `<a class="btn btn-outline" href="${firstPhone.href}">Appeler ${escapeHtml(firstPhone.label)}</a>`
                  : ""
              }
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="wrap">
        <div class="section-head">
          <span class="eyebrow">À découvrir</span>
          <h2>Autres produits</h2>
        </div>
        <div class="grid-products">
          ${related
            .map(
              (p) => `
            <article class="card reveal">
              <a class="card-media" href="produit.html?id=${encodeURIComponent(p.id)}">
                <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" width="320" height="240" />
              </a>
              <div class="card-body">
                <h3><a href="produit.html?id=${encodeURIComponent(p.id)}">${escapeHtml(p.name)}</a></h3>
                <p>${escapeHtml(p.summary)}</p>
                <a class="btn btn-outline btn-block" href="produit.html?id=${encodeURIComponent(p.id)}">Voir le produit</a>
              </div>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap"><a class="link-back" href="catalogue.html">← Retour au catalogue</a></div>
    </section>
  `;

  initReveal(main);
  // La grande image de la fiche est hors des .reveal : on la surveille aussi.
  renderImage(main);
}

function render() {
  const main = document.getElementById("main");
  if (!main) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const product = products.find((p) => p.id === id);
  if (!product) {
    notFound(main);
    return;
  }
  document.title = `${product.name} — ${store.name}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", product.summary);
  renderDetail(main, product);
}

mountChrome();
render();
