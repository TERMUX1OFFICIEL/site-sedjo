/**
 * Composants partagés : header, footer, bouton WhatsApp flottant, reveal.
 * Utilisés par app.js, catalogue.js, produit.js et 404.
 */
import { store } from "../../data/store.js";
import { categories } from "../../data/products.js";

/* ---------- Utilitaires ---------- */

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

/**
 * Les telephones peuvent etre des chaines ("07-69-18-36-96") ou des objets
 * ({ label, href }). On normalise ici pour que le reste du code n'ait
 * jamais a s'en soucier.
 */
function normalizePhone(p) {
  if (typeof p === "string") {
    return { label: p, href: `tel:${p.replace(/[^\d+]/g, "")}` };
  }
  const label = p.label ?? p.number ?? "";
  return { label, href: p.href ?? `tel:${String(label).replace(/[^\d+]/g, "")}` };
}

export function phoneList() {
  return (store.phones || []).map(normalizePhone);
}

/** Message d'ouverture par defaut, si store.js n'en fournit pas. */
function defaultMessage() {
  return `Bonjour ${store.name} ! Je souhaite avoir plus d'informations sur vos produits.`;
}

/** Construit un lien WhatsApp avec un message pre-rempli. */
export function whatsappLink(message) {
  const text = message || store.ctaMessage || defaultMessage();
  return `https://wa.me/${store.whatsapp}?text=${encodeURIComponent(text)}`;
}

/** Lien WhatsApp pour un produit precis. */
export function productWhatsappLink(product) {
  return whatsappLink(
    `Bonjour ${store.name} ! Je suis intéressé(e) par le produit : ${product.name}`
  );
}

export function categoryName(id) {
  const found = categories.find((c) => c.id === id);
  return found ? found.name : id;
}

/* ---------- Header ---------- */

function currentPage() {
  const file = window.location.pathname.split("/").pop() || "index.html";
  return file;
}

function navLinks() {
  const here = currentPage();
  const isContact = window.location.hash === "#contact";
  const links = [
    { href: "index.html", label: "Accueil", page: "index.html" },
    { href: "catalogue.html", label: "Catalogue", page: "catalogue.html" },
    { href: "index.html#contact", label: "Contact", page: "contact" },
  ];
  return links
    .map((l) => {
      const current =
        l.page === here ||
        (l.page === "contact" && isContact && here === "index.html");
      return `<li><a href="${l.href}"${
        current ? ' aria-current="page"' : ""
      }>${l.label}</a></li>`;
    })
    .join("");
}

export function renderHeader() {
  const host = document.getElementById("header");
  if (!host) return;
  const [phone] = phoneList();
  host.innerHTML = `
    <div class="header-top">
      <div class="wrap">
        <span>${escapeHtml(store.tagline)}</span>
        ${
          phone
            ? `<span><a href="${phone.href}">${escapeHtml(phone.label)}</a></span>`
            : ""
        }
      </div>
    </div>
    <div class="wrap">
      <nav class="nav" aria-label="Navigation principale">
        <a class="brand" href="index.html">
          <img class="logo" src="assets/img/logo-sedjo.png" alt="Logo Sèdjô" width="44" height="44" />
          <span>${escapeHtml(store.name)}</span>
        </a>
        <ul class="nav-links">${navLinks()}</ul>
        <div class="nav-cta">
          <a class="btn btn-wa" href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a>
        </div>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Ouvrir le menu">☰</button>
      </nav>
      <div class="mobile-nav" id="mobileNav">
        <ul>${navLinks()}</ul>
        <a class="btn btn-wa btn-block" href="${whatsappLink()}" target="_blank" rel="noopener">Écrire sur WhatsApp</a>
      </div>
    </div>
  `;

  const toggle = host.querySelector(".nav-toggle");
  const mobile = host.querySelector(".mobile-nav");
  if (toggle && mobile) {
    toggle.addEventListener("click", () => {
      const open = mobile.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
    });
  }
}

/* ---------- Footer ---------- */

export function renderFooter() {
  const host = document.getElementById("footer");
  if (!host) return;
  const phoneLinks = phoneList()
    .map(
      (p) => `<a href="${p.href}">${escapeHtml(p.label)}</a>`
    )
    .join("");
  host.innerHTML = `
    <div class="wrap footer-inner">
      <div>
        <img class="footer-logo" src="assets/img/logo-sedjo.png" alt="Logo Sèdjô" width="72" height="72" loading="lazy" />
        <p class="footer-brand">${escapeHtml(store.name)}</p>
        <p class="footer-tag">${escapeHtml(store.baseline)}</p>
        <p class="footer-tag">${escapeHtml(store.tagline)}</p>
        ${store.hours ? `<p class="footer-tag">${escapeHtml(store.hours)}</p>` : ""}
      </div>
      <div class="footer-col">
        <strong>Navigation</strong>
        <a href="index.html">Accueil</a>
        <a href="catalogue.html">Catalogue</a>
        <a href="index.html#contact">Contact</a>
      </div>
      <div class="footer-col">
        <strong>Contact</strong>
        ${phoneLinks}
        <a href="${whatsappLink()}" target="_blank" rel="noopener">WhatsApp</a>
      </div>
    </div>
    <div class="wrap footer-bottom">
      <p>© ${new Date().getFullYear()} ${escapeHtml(store.name)} — ${escapeHtml(
    store.country
  )}.</p>
    </div>
  `;
}

/* ---------- Bouton WhatsApp flottant ---------- */

export function renderWhatsAppFloat() {
  const btn = document.getElementById("waFloat");
  if (!btn) return;
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" width="26" height="26">
      <path fill="currentColor" d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.5 3.68 1.4 5.24L2 22l5.06-1.55a9.8 9.8 0 0 0 4.98 1.35h.01c5.43 0 9.84-4.4 9.84-9.84C21.9 6.4 17.48 2 12.04 2Zm5.76 14.03c-.24.68-1.4 1.3-1.94 1.34-.5.05-.98.24-3.3-.7-2.78-1.1-4.54-3.94-4.68-4.12-.13-.19-1.11-1.48-1.11-2.83 0-1.34.7-2 .95-2.27.24-.27.53-.34.7-.34h.5c.16 0 .38-.06.6.46.24.57.8 1.98.87 2.12.07.14.12.3.02.49-.1.19-.15.3-.3.47l-.44.5c-.14.14-.29.3-.13.6.17.3.75 1.24 1.6 2 1.1.98 2.03 1.29 2.33 1.43.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.64-.15.24.1 1.6.75 1.87.89.27.14.46.21.53.32.07.11.07.64-.17 1.32Z"/>
    </svg>
  `;
  btn.addEventListener("click", () => {
    window.open(whatsappLink(), "_blank", "noopener");
  });
}

/* ---------- Animations d'apparition ---------- */

export function initReveal(root = document) {
  renderImage(root);
  const items = root.querySelectorAll(".reveal");
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );
  items.forEach((el) => io.observe(el));

  // Filet de securite : tout element encore masque apres un court delai
  // est revele. Sans cela, un contenu peut rester invisible (opacite 0)
  // si l'observateur ne le croise jamais.
  setTimeout(() => {
    items.forEach((el) => {
      if (!el.classList.contains("is-visible")) el.classList.add("is-visible");
    });
  }, 1200);
}

/* ---------- Images produit ---------- */

const FALLBACK_IMAGE = "assets/products/produit-sans-photo.jpg";

/**
 * Toutes les images produit partagent le meme fallback.
 *
 * A poser sur chaque <img> via renderImage() : si le fichier est absent ou
 * illisible, le navigateur bascule sur le visuel de repli. Sans ca, une
 * photo manquante laisse un cadre vide sur la page.
 */
export function renderImage(root = document) {
  const useFallback = (img) => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "1";
    img.src = FALLBACK_IMAGE;
    img.alt = img.alt || "Visuel à venir";
  };

  root.querySelectorAll("img").forEach((img) => {
    // Fichier absent : le navigateur declenche "error".
    img.addEventListener("error", () => useFallback(img), { once: true });

    // Fichier present mais corrompu ou vide (1x1 px) : le chargement
    // REUSSIT, donc "error" ne se declenche pas. Il faut tester la taille
    // reelle une fois l'image chargee — ce que le test au moment du binding
    // ne peut pas faire, les images lazy n'etant pas encore chargees.
    img.addEventListener(
      "load",
      () => {
        if (img.naturalWidth <= 1) useFallback(img);
      },
      { once: true }
    );

    // Images deja chargees au moment du binding (cache navigateur).
    if (img.complete && img.naturalWidth <= 1) useFallback(img);
  });
}

/* ---------- Carte produit réutilisable ---------- */

export function productCard(product) {
  return `
    <article class="card reveal">
      <a class="card-media" href="produit.html?id=${encodeURIComponent(product.id)}">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" width="320" height="240" />
        <span class="badge-cat">${escapeHtml(categoryName(product.category))}</span>
      </a>
      <div class="card-body">
        <h3><a href="produit.html?id=${encodeURIComponent(product.id)}">${escapeHtml(product.name)}</a></h3>
        <p>${escapeHtml(product.summary)}</p>
        <p class="price-note">${escapeHtml(product.price || "Prix sur demande")}</p>
        <a class="btn btn-outline btn-block" href="produit.html?id=${encodeURIComponent(product.id)}">Voir le produit</a>
      </div>
    </article>
  `;
}

/* ---------- Amorçage commun ---------- */

export function mountChrome() {
  renderHeader();
  renderFooter();
  renderWhatsAppFloat();
  renderImage();
  initReveal();
}
