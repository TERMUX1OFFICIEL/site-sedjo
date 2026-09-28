# SÈDJÔ — site vitrine

Site statique (HTML / CSS / JavaScript) de SÈDJÔ : produits naturels du terroir ivoirien.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil |
| `catalogue.html` | Catalogue filtrable avec recherche |
| `produit.html` | Fiche produit (détail via paramètre d'URL) |
| `404.html` | Page d'erreur |
| `assets/css/styles.css` | Styles du site |
| `assets/js/app.js` | Logique de la page d'accueil + composants partagés |
| `assets/js/catalogue.js` | Logique du catalogue |
| `assets/js/produit.js` | Logique de la fiche produit |
| `assets/js/ui.js` | En-tête, pied de page, bouton WhatsApp |
| `data/products.js` | Catalogue des produits |
| `data/store.js` | Coordonnées et réglages du site |

## Technologies

- Aucun framework, aucune dépendance.
- JavaScript en modules natifs (`type="module"`).
- 100 % statique : hébergeable sur GitHub Pages sans build.

## Publier sur GitHub Pages

1. Pousser ce dépôt sur GitHub.
2. **Settings → Pages → Source** : *Deploy from a branch*, branche `main`, dossier `/ (root)`.
3. Le site est en ligne sur `https://TERMUX1OFFICIEL.github.io/site-sedjo/`.

## En local

Ouvrir `index.html` directement, ou lancer un serveur pour respecter les modules :

```powershell
python -m http.server 8000
```

Puis <http://localhost:8000>.
