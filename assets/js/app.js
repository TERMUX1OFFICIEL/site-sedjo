/** Page d'accueil. Charge aussi le chrome commun (utilisé par 404.html). */
import { store } from "../../data/store.js";
import { products, categories } from "../../data/products.js";
import {
  mountChrome,
  escapeHtml,
  whatsappLink,
  phoneList,
  productCard,
  initReveal,
  renderImage,
} from "./ui.js";

function hero() {
  return `
    <section class="hero">
      <div class="wrap hero-inner">
        <div>
          <p class="hero-badge">100 % naturel · ${escapeHtml(store.country)}</p>
          <h1>${escapeHtml(store.baseline)}</h1>
          <p class="lead">${escapeHtml(store.tagline)}. Pâte de cajou, amandes, biscuits au cacao, liqueurs artisanales, jus et solution hydroalcoolique : un catalogue court, soigné, transformé localement.</p>
          <div class="hero-actions">
            <a class="btn btn-gold" href="catalogue.html">Découvrir le catalogue</a>
            <a class="btn btn-outline-light" href="${whatsappLink()}" target="_blank" rel="noopener">Commander sur WhatsApp</a>
          </div>
        </div>
        <div class="hero-media">
          <img src="assets/img/hero.jpg" alt="Produits naturels Sèdjô" width="640" height="480" />
        </div>
      </div>
    </section>
  `;
}

function perks() {
  return `
    <section class="section section-alt" id="avantages">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Nos engagements</span>
          <h2>Pourquoi choisir Sèdjô ?</h2>
          <p>Une exigence simple : des produits naturels, préparés avec soin, disponibles en Côte d'Ivoire.</p>
        </div>
        <div class="grid-3">
          ${store.promises
            .map(
              (p) => `
            <article class="perk reveal">
              <h3>${escapeHtml(p.title)}</h3>
              <p>${escapeHtml(p.text)}</p>
            </article>`
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function featured() {
  const list = products.slice(0, 3);
  return `
    <section class="section" id="produits">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Sélection</span>
          <h2>Nos produits phares</h2>
          <p>Un aperçu de la boutique, le catalogue complet est à un clic.</p>
        </div>
        <div class="grid-products">${list.map(productCard).join("")}</div>
        <p style="margin-top:30px"><a class="btn btn-primary" href="catalogue.html">Voir tout le catalogue</a></p>
      </div>
    </section>
  `;
}

function categoriesSection() {
  // Image de chaque categorie deduite du premier produit qui la compose.
  // Une table en dur ici se desynchronisait des renommages de fichiers ;
  // comme ceci, ajouter un produit suffit a tout mettre a jour.
  const imageFor = (categoryId) => {
    const produit = products.find((p) => p.category === categoryId);
    return produit ? produit.image : "assets/products/produit-sans-photo.jpg";
  };
  const tiles = categories
    .filter((c) => c.id !== "all")
    .map((c) => {
      return `
        <a class="cat-tile reveal" href="catalogue.html?cat=${encodeURIComponent(c.id)}">
          <span class="cat-media">
            <img src="${escapeHtml(imageFor(c.id))}" alt="" loading="lazy" width="400" height="266" />
          </span>
          <span class="cat-label">${escapeHtml(c.name)}</span>
        </a>`;
    })
    .join("");
  return `
    <section class="section section-alt" id="categories">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Catégories</span>
          <h2>Alimentation, boissons, gourmandises, hygiène</h2>
        </div>
        <div class="grid-3">${tiles}</div>
      </div>
    </section>
  `;
}

function contact() {
  const phones = phoneList()
    .map((p) => `<a href="${p.href}">${escapeHtml(p.label)}</a>`)
    .join("");
  const socials = (store.socials || [])
    .map(
      (s) =>
        `<a href="${escapeHtml(s.href)}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`
    )
    .join("");
  return `
    <section class="section" id="contact">
      <div class="wrap">
        <div class="section-head reveal">
          <span class="eyebrow">Contact</span>
          <h2>Commander simplement</h2>
          <p>Un appel, un message WhatsApp, et nous préparons votre commande. Retrait ou livraison, à votre convenance.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-card reveal">
            <div class="contact-item">
              <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z"/></svg></div>
              <div><strong>Téléphone</strong>${phones}</div>
            </div>
            <div class="contact-item">
              <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.5 3.68 1.4 5.24L2 22l5.06-1.55a9.8 9.8 0 0 0 4.98 1.35c5.43 0 9.84-4.4 9.84-9.84C21.9 6.4 17.48 2 12.04 2Zm5.76 14.03c-.24.68-1.4 1.3-1.94 1.34-.5.05-.98.24-3.3-.7-2.78-1.1-4.54-3.94-4.68-4.12-.13-.19-1.11-1.48-1.11-2.83 0-1.34.7-2 .95-2.27.24-.27.53-.34.7-.34h.5c.16 0 .38-.06.6.46.24.57.8 1.98.87 2.12.07.14.12.3.02.49-.1.19-.15.3-.3.47l-.44.5c-.14.14-.29.3-.13.6.17.3.75 1.24 1.6 2 1.1.98 2.03 1.29 2.33 1.43.3.15.47.13.64-.08.17-.2.74-.86.94-1.16.2-.3.4-.25.64-.15.24.1 1.6.75 1.87.89.27.14.46.21.53.32.07.11.07.64-.17 1.32Z"/></svg></div>
              <div><strong>WhatsApp</strong><a href="${whatsappLink()}" target="_blank" rel="noopener">Discuter maintenant</a></div>
            </div>
            <div class="contact-item">
              <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z"/></svg></div>
              <div><strong>Zone</strong><span>${escapeHtml(store.address)}${
    store.hours ? ` · ${escapeHtml(store.hours)}` : ""
  }</span></div>
            </div>
            <div class="contact-item">
              <div class="ico"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Zm3.5 12.5a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 0 1-1.5-1.5V8A1.5 1.5 0 0 1 8 6.5h10A1.5 1.5 0 0 1 19.5 8Z"/></svg></div>
              <div><strong>Réseaux</strong>${socials}</div>
            </div>
          </div>

          <form class="contact-card reveal" id="orderForm" novalidate>
            <div class="form-grid">
              <label class="field">Nom complet
                <input type="text" name="nom" required autocomplete="name" />
              </label>
              <label class="field">Téléphone
                <input type="tel" name="tel" required autocomplete="tel" />
              </label>
              <label class="field">Produit souhaité
                <select name="produit" class="mini">
                  <option value="">Je ne sais pas encore</option>
                  ${products.map((p) => `<option value="${escapeHtml(p.name)}">${escapeHtml(p.name)}</option>`).join("")}
                </select>
              </label>
              <label class="field">Message
                <textarea name="message" placeholder="Quantité, format, lieu de livraison…"></textarea>
              </label>
              <button class="btn btn-wa btn-block" type="submit">Envoyer sur WhatsApp</button>
              <p class="form-status" id="orderStatus" role="status"></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const main = document.getElementById("main");
  // 404.html fournit son propre contenu : on ne l'ecrase pas.
  if (!main || main.children.length > 0) return;
  main.innerHTML = hero() + perks() + featured() + categoriesSection() + contact();

  const form = document.getElementById("orderForm");
  const status = document.getElementById("orderStatus");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const nom = (data.get("nom") || "").toString().trim();
      const tel = (data.get("tel") || "").toString().trim();
      if (!nom || !tel) {
        status.className = "form-status err";
        status.textContent = "Merci d'indiquer votre nom et votre téléphone.";
        return;
      }
      const produit = (data.get("produit") || "").toString().trim();
      const message = (data.get("message") || "").toString().trim();
      const lines = [
        `Bonjour ${store.name}, je souhaite commander.`,
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        produit ? `Produit : ${produit}` : "",
        message ? `Message : ${message}` : "",
      ].filter(Boolean);
      status.className = "form-status ok";
      status.textContent = "Ouverture de WhatsApp…";
      window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
    });
  }

  initReveal(main);
  renderImage(main);
}

mountChrome();
renderHome();
