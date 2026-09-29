/**
 * Catalogue produits SEDJO.
 * Source unique de donnees : ajouter un produit ici suffit pour l'afficher
 * sur l'accueil, le catalogue et la page detail.
 * Aucun prix n'etant communique, les produits sont affiches sur demande.
 * Les accents sont ecrits en sequences \uXXXX pour garantir un encodage fiable.
 */
export const products = [
  {
    id: "pate-cajou",
    name: "P\u00e2te de noix de cajou",
    category: "alimentation",
    image: "assets/products/pate-cajou.jpeg",
    summary:
      "P\u00e2te onctueuse \u00e0 base de noix de cajou torr\u00e9fi\u00e9es et broy\u00e9es \u00e0 la demande.",
    description:
      "Notre p\u00e2te de noix de cajou est pr\u00e9par\u00e9e \u00e0 partir de noix de cajou s\u00e9lectionn\u00e9es, torr\u00e9fi\u00e9es puis broy\u00e9es \u00e0 la demande afin de pr\u00e9server tout leur go\u00fbt. Sans huile ajout\u00e9e, sans conservateur et sans colorant, elle concentre naturellement le go\u00fbt et les nutriments de la noix de cajou. Id\u00e9ale \u00e0 tartiner sur du pain, en p\u00e2tisserie ou simplement \u00e0 d\u00e9gouter seule.",
    highlights: [
      "Noix de cajou torr\u00e9fi\u00e9es",
      "Sans huile ni additif ajout\u00e9",
      "Texture onctueuse et homog\u00e8ne",
    ],
    formats: ["Pot 250 g", "Pot 500 g"],
  },
  {
    id: "noix-cajou-fraiches",
    name: "Noix de cajou fraîches",
    category: "alimentation",
    image: "assets/products/noix-cajou-fraiches.jpg",
    summary: "Noix de cajou entières et fraîches, 100 % naturelles et sans conservateur.",
    description:
      "Noix de cajou entières, récoltées et conservées dans leur coque pour préserver leur fraîcheur et leur croquant Naturel. 100 % naturelles et sans conservateur, elles sont riches en nutriments essentiels et apportent une énergie naturelle. À consommer en apéritif, en salade ou en snacking, telles quelles ou légèrement grillées.",
    highlights: [
      "Noix de cajou entières et fraîches",
      "100 % naturelle, sans conservateur",
      "Source de protéines, vitamines, minéraux et acides gras",
      "Bonne pour la santé cardiovasculaire",
      "Apporte une énergie naturelle",
      "Poids net : 250 g",
    ],
    formats: ["Sachet 250 g"],
  },
  {
    id: "amandes-cajou",
    name: "Amandes de noix de cajou",
    category: "alimentation",
    image: "assets/products/amandes-cajou.jpg",
    summary:
      "Amandes enti\u00e8res de noix de cajou, grill\u00e9es nature et tri\u00e9es pour un croquant nature.",
    description:
      "Des amandes de noix de cajou enti\u00e8res, tri\u00e9es une \u00e0 une puis grill\u00e9es \u00e0 feu doux afin de d\u00e9velopper leur parfum sans les alt\u00e9rer. Naturelles par excellence, elles se consomment telles quelles en ap\u00e9ritif, dans une salade ou en accompagnement. Un produit simple, gourmand et riche en \u00e9nergie.",
    highlights: [
      "Amandes enti\u00e8res tri\u00e9es",
      "Grill\u00e9es nature, sans sel ajout\u00e9",
      "Source d'\u00e9nergie,riche en vitamine E et min\u00e9raux",
      "100 % naturelle",
    ],
    formats: ["Sachet 250 g"],
  },
  {
    id: "poudre-cacao",
    name: "Poudre de cacao brute",
    category: "alimentation",
    image: "assets/products/poudre-cacao.jpg",
    summary: "Poudre de cacao 100 % pur cacao, sans sucre ni additif.",
    description:
      "Poudre de cacao brute, 100 % pur cacao, obtenue par broyage de fèves de cacao. Non alcalin\u00e9e, elle conserve l'ensemble des substances aromatiques et des nutriments de la f\u00e8ve, pour un go\u00fbt plus intense qu'un cacao trait\u00e9. Sans sucre et sans additif : elle convient aux pr\u00e9parations sucr\u00e9es maison comme aux recettes sal\u00e9es.",
    highlights: [
      "100 % pur cacao",
      "Sans sucre",
      "Sans additif",
      "Non alcalinis\u00e9e",
      "Riche en antioxydants",
      "Source de magn\u00e9sium et de fer",
      "\u00c9nergie naturelle",
    ],
    formats: ["Sachet 200 g"],
  },
  {
    id: "amandes-cacao",
    name: "Amandes de cajou enrob\u00e9es au cacao",
    category: "gourmandises",
    image: "assets/products/amandes-cacao.jpg",
    summary: "Amandes de cajou enrob\u00e9es au cacao, 100 % naturelles et sans additif.",
    description:
      "Des amandes de cajou enti\u00e8res, enrob\u00e9es d'une couche de cacao fonc\u00e9 puis s\u00e9ch\u00e9es, pour un croquant\u00e0 l'ext\u00e9rieur et une fondant\u00e9e en bouche. 100 % naturelles, sans conservateur ni additif, elles se consomment telles quelles en ap\u00e9ritif ou en gourmandise, et \u00e9gallent aussi bien au caf\u00e9 qu'au th\u00e9. Le go\u00fbt naturel du bien-\u00eatre, dans un format pratique \u00e0 emporter.",
    highlights: [
      "Amandes de cajou enti\u00e8res enrob\u00e9es au cacao",
      "100 % naturel",
      "Riche en bons nutriments",
      "Source d'\u00e9nergie",
      "Sans conservateurs ni additifs",
    ],
    formats: ["Sachet 80 g"],
  },
  {
    id: "biscuits-cacao",
    name: "Biscuits au cacao",
    category: "gourmandises",
    image: "assets/products/biscuits-cacao.jpg",
    summary: "Biscuits fondants au cacao, recette simple sans exc\u00e8s de sucre.",
    description:
      "Des biscuits pr\u00e9par\u00e9s avec du cacao de qualit\u00e9, pour un go\u00fbt g\u00e9n\u00e9reux et une texture fondante. Ils accompagnent id\u00e9alement le caf\u00e9 ou le th\u00e9, et conviennent aussi \u00e0 la d\u00e9gustation telle quelle. Recette volontairement simple, sans conservateur artificiel, pour un plaisir quotidien.",
    highlights: [
      "Cacao de qualit\u00e9",
      "Texture fondante",
      "Sans conservateur artificiel",
    ],
    formats: ["Paquet de biscuits"],
  },
  {
    id: "liqueur-cremeuse",
    name: "Liqueur cr\u00e9meuse \u00e0 l'amande de cajou",
    category: "boissons",
    image: "assets/products/liqueur-cremeuse.jpg",
    summary:
      "Liqueur artisanale cr\u00e9meuse \u00e0 base d'amande de cajou.",
    description:
      "Liqueur cr\u00e9meuse \u00e9labor\u00e9e \u00e0 partir d'amandes de cajou, incorpor\u00e9es dans une base d'alcool et de sucre. Douce et onctueuse, sa texture et son ar\u00f4me d'amande torr\u00e9fi\u00e9e en font une boisson de d\u00e9gustation, \u00e0 servir fra\u00eeche ou en digestif. 25 % vol. Fabrication artisanale en petites s\u00e9ries.",
    highlights: [
      "\u00c9labor\u00e9e \u00e0 base d'amandes de cajou",
      "Texture cr\u00e9meuse et onctueuse",
      "Ar\u00f4me d'amande torr\u00e9fi\u00e9e",
      "25 % vol.",
      "Fabrication artisanale",
    ],
    formats: ["Bouteille 10 cl", "Bouteille 25 cl", "Bouteille 50 cl"],
  },
  {
    id: "liqueurs",
    name: "Liqueurs artisanales",
    category: "boissons",
    image: "assets/products/liqueurs.jpg",
    summary: "Liqueurs parfum\u00e9es, \u00e9quilibrant douceur et caract\u00e8re.",
    description:
      "Des liqueurs \u00e9labor\u00e9es \u00e0 partir de fruits et d'\u00e9pices, matur\u00e9es pour d\u00e9velopper un parfum riche et un go\u00fbt \u00e9quilibr\u00e9. Chaque vari\u00e9t\u00e9 est embouteill\u00e9e, pr\u00eate \u00e0 la d\u00e9gustation ou au service. Fabrication artisanale, en petites s\u00e9ries, pour un rendu gras et pr\u00e9cis.",
    highlights: [
      "\u00c9laboration fruit\u00e9e",
      "Maturage naturel",
      "Service d\u00e9gusteur",
    ],
    formats: ["Bouteille 25 cl", "Bouteille 70 cl"],
  },
  {
    id: "jus",
    name: "Jus d'anacarde",
    category: "boissons",
    image: "assets/products/jus.jpeg",
    price: "1 000 F CFA",
    summary: "Boisson naturelle et rafra\u00eechissante, riche en vitamines et min\u00e9raux.",
    description:
      "Jus d'anacarde naturel et rafra\u00eechissant, pr\u00e9par\u00e9 \u00e0 partir de fruits (\u00e0 base de pomme d'anacarde, pomme et ananas). 100 % naturel, sans conservateur ni additif. \u00c0 consommer frais, en boisson ou \u00e0 table, pour accompagner le quotidien.",
    highlights: [
      "100 % naturel, sans conservateur ni additif",
      "Renforce l'immunit\u00e9 : riche en vitamine C, il aide \u00e0 lutter contre les infections et renforce les d\u00e9fenses naturelles",
      "Bon pour le c\u0153ur : ses antioxydants, le magn\u00e9sium et le potassium aident \u00e0 r\u00e9guler la tension art\u00e9rielle et prot\u00e8gent le c\u0153ur",
      "Aide contre l'an\u00e9mie : le fer et la vitamine C favorisent l'absorption du fer, augmentent l'h\u00e9moglobine et r\u00e9duisent la fatigue",
      "Donne de l'\u00e9nergie : riche en glucose naturel, il booste rapidement l'\u00e9nergie et combat la fatigue",
      "Favorise la digestion : les fibres naturelles am\u00e9liorent le transit intestinal et pr\u00e9viennent les troubles digestifs",
      "R\u00e9duit le stress : le magn\u00e9sium aide \u00e0 d\u00e9fendre les muscles et diminue l'anxi\u00e9t\u00e9 et le stress",
    ],
    formats: ["Bouteille 33 cl", "Bouteille 1 L"],
  },
  {
    id: "huile",
    name: "Huile",
    category: "alimentation",
    image: "assets/products/huile.jpeg",
    summary:
      "Huile naturelle pour l'alimentation et une routine de soins adapt\u00e9e.",
    description:
      "Huile naturelle destin\u00e9e \u00e0 \u00eatre utilis\u00e9e dans le cadre d'une alimentation et d'une routine de soins adapt\u00e9es. Elle peut s'utiliser aussi bien en cuisine qu'en application locale pour le soin de la peau et des cheveux.",
    highlights: [
      "Contribue au maintien d'un bon \u00e9quilibre du cholest\u00e9rol, notamment du HDL et du LDL",
      "Nourrit et hydrate la peau",
      "Aide \u00e0 fortifier les cheveux",
    ],
    formats: ["Flacon 250 ml", "Flacon 500 ml"],
  },
  {
    id: "vinaigre",
    name: "Vinaigre",
    category: "alimentation",
    image: "assets/products/vinaigre.jpeg",
    summary: "Vinaigre 100 % naturel, obtenu par fermentation naturelle.",
    description:
      "Vinaigre 100 % naturel, obtenu par fermentation naturelle, sans aucun additif ni conservateur. Il peut s'utiliser en assaisonnement, en marinade ou dans une pr\u00e9paration m\u00e9nag\u00e8re, pour une acidit\u00e9 franche et un go\u00fbt net.",
    highlights: [
      "100 % naturel",
      "Sans additif",
      "Sans conservateur",
      "Fermentation naturelle",
    ],
    usages: [
      "Peut accompagner une alimentation visant la gestion du poids",
      "Peut contribuer \u00e0 la gestion de la glyc\u00e9mie dans le cadre d'une alimentation adapt\u00e9e",
    ],
    formats: ["Flacon 25 cl"],
  },
  {
    id: "solution-hydroalcoolique",
    name: "Solution hydroalcoolique",
    category: "hygiene",
    image: "assets/products/solution-hydroalcoolique.jpg",
    summary: "Solution hydroalcoolique pour l'hygi\u00e8ne des mains et les usages pr\u00e9ventifs.",
    description:
      "Une solution hydroalcoolique con\u00e7ue pour l'hygi\u00e8ne des mains et pour diff\u00e9rents usages pr\u00e9ventifs du quotidien. Format pratique, elle se glisse facilement dans un sac ou sur un bureau. Utilisable d\u00e8s que besoin, elle s\u00e8che rapidement et ne laisse aucun r\u00e9sidu gras.",
    highlights: [
      "Hygi\u00e8ne et d\u00e9sinfection des mains",
      "Aide \u00e0 pr\u00e9venir les pied d'athl\u00e8te",
      "Peut \u00eatre utilis\u00e9e contre les furoncles",
      "Peut \u00eatre utilis\u00e9e contre la teigne",
      "Peut \u00eatre utilis\u00e9e contre la gale",
      "D\u00e9sinfecte les plaies",
    ],
    formats: ["Flacon 50 ml", "Flacon 100 ml", "Flacon 500 ml"],
  },
];

/** Categories derivees des produits (source unique de verite). */
export const categories = [
  { id: "all", name: "Tous les produits" },
  { id: "alimentation", name: "Alimentation" },
  { id: "boissons", name: "Boissons" },
  { id: "gourmandises", name: "Gourmandises" },
  { id: "hygiene", name: "Hygi\u00e8ne" },
];
