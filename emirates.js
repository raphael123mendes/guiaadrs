// Emirate registry + lazy loader.
// Each emirate's data file (data.js for Abu Dhabi, data.dubai.js for Dubai,
// etc.) calls registerEmirate() once it has built its own CATEGORIES/
// ATTRACTIONS arrays under emirate-specific names (e.g. ABU_DHABI_CATEGORIES,
// DUBAI_CATEGORIES) — that's what lets two emirates' data coexist without
// redeclaring the same variable names.
//
// UI_STRINGS and the t()/tr()/getLang() family of helpers are shared across
// every emirate (they're site-wide labels, not place data), so they live
// here rather than being duplicated in each emirate's data file.
//
// Load order: emirates.js, THEN the default emirate's data file (data.js).

window.EMIRATES = window.EMIRATES || {};

// Static metadata for every emirate the site knows about, whether or not
// its data has been built/loaded yet. `dataFile` is fetched on demand for
// any non-default emirate — NOT all loaded upfront.
const EMIRATE_REGISTRY = {
  'abu-dhabi': {
    id: 'abu-dhabi',
    nameEn: 'Abu Dhabi', namePt: 'Abu Dhabi',
    flag: '🇦🇪',
    center: [24.46, 54.45], zoom: 10,
    dataFile: 'data.js',
    default: true,
  },
  'dubai': {
    id: 'dubai',
    nameEn: 'Dubai', namePt: 'Dubai',
    flag: '🇦🇪',
    center: [25.2048, 55.2708], zoom: 10,
    dataFile: 'data.dubai.js',
    comingSoon: false,
  },
  // Add more emirates here as they're built — Sharjah, Ras Al Khaimah, etc.
  // Each one's data.<emirate>.js should declare its own
  // <EMIRATE>_CATEGORIES / <EMIRATE>_ATTRACTIONS consts and end with:
  //   registerEmirate('<emirate-id>', { categories: ..., attractions: ... });
  // (it should NOT call activateEmirate itself — the switcher does that
  // once the data has finished loading, see selectEmirate() below).
};

// Called by each emirate's data file once its arrays are built.
// Shape: { categories: [...], attractions: [...] }
function registerEmirate(emirateId, data) {
  window.EMIRATES[emirateId] = data;
}

// Points the ATTRACTIONS / CATEGORIES / ATTRACTIONS_BY_ID globals — the
// ones index.html's rendering code already reads everywhere — at the given
// emirate's data. This is what makes switching emirates "just work" without
// rewriting index.html's existing logic.
function activateEmirate(emirateId) {
  const data = window.EMIRATES[emirateId];
  if (!data) throw new Error(`Emirate not loaded yet: ${emirateId}`);
  window.CATEGORIES = data.categories;
  window.ATTRACTIONS = data.attractions;
  window.ATTRACTIONS_BY_ID = Object.fromEntries(data.attractions.map(a => [a.id, a]));
  window.currentEmirateId = emirateId;
}

// Tracks which <script> files have already been injected, so switching
// back to a previously-loaded emirate doesn't re-fetch it.
const _loadedScripts = new Set(['data.js']); // data.js loads via a normal <script> tag, mark it pre-loaded

function _loadScript(src) {
  if (_loadedScripts.has(src)) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.onload = () => { _loadedScripts.add(src); resolve(); };
    el.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(el);
  });
}

// Ensures an emirate's data file is loaded and registered, activates it
// (repoints the ATTRACTIONS/CATEGORIES globals), and returns its data.
// Safe to call repeatedly — only fetches a given emirate's file once per
// page load.
async function selectEmirate(emirateId) {
  const meta = EMIRATE_REGISTRY[emirateId];
  if (!meta) throw new Error(`Unknown emirate: ${emirateId}`);
  if (meta.comingSoon) throw new Error(`${meta.nameEn} isn't available yet`);

  if (!window.EMIRATES[emirateId]) {
    await _loadScript(meta.dataFile);
  }
  activateEmirate(emirateId);
  setSelectedEmirate(emirateId);
  return window.EMIRATES[emirateId];
}

function getSelectedEmirateId() {
  const saved = localStorage.getItem('ad-emirate');
  if (saved && EMIRATE_REGISTRY[saved] && !EMIRATE_REGISTRY[saved].comingSoon) return saved;
  return Object.values(EMIRATE_REGISTRY).find(e => e.default)?.id || 'abu-dhabi';
}

function setSelectedEmirate(emirateId) {
  localStorage.setItem('ad-emirate', emirateId);
}

// ---------------------------------------------------------------------
// Shared UI strings + language/category helpers (moved out of data.js —
// these are site-wide, not per-emirate, so they live here once).
// ---------------------------------------------------------------------

const UI_STRINGS = {
  en: {
    siteName: 'UAE Explorer', tagline: 'by Stein',
    discoverTitle: 'Discover the UAE',
    discoverSubtitle: "Every stop on your family's road trip — hours, directions, history, and fun facts for the road.",
    searchPlaceholder: 'Search attractions, e.g. mosque, Ferrari, mangrove...',
    allPlaces: 'All Places', fullMap: 'Full Map',
    sidebarNote: 'Curated spots across the UAE — pick a place, get directions, and go.',
    locations: 'Locations', location: 'Location',
    noResults: 'No attractions match your search.',
    mapBtn: 'Map', detailsBtn: 'View Details', exploreBtn: 'Explore',
    footerTag: 'A family & friends road-trip guide to the UAE. Built for the tablet in your car.',
    footerStats: 'attractions · 6 categories',
    backToDiscover: 'Back to Discover',
    getDirections: 'Get Directions',
    aboutTitle: 'About the Experience',
    funFactsTitle: 'Fun Facts',
    onMapTitle: 'On the Map',
    keyDetailsTitle: 'Key Details',
    hoursLabel: 'Visiting Hours', priceLabel: 'Price', climateLabel: 'Climate Note', bestTimeLabel: 'Best Time to Visit',
    hoursNote: 'Hours can change seasonally — worth a quick check before you go.',
    nearbyTitle: 'Nearby Experiences',
    footerBack: '← Back to all attractions',
    galleryTitle: 'Visual Journey',
    priceAll: 'Price: All', priceFree: 'Free', pricePaid: 'Paid', priceVaries: 'Varies',
    settingAll: 'Setting: All', settingIndoor: 'Indoor', settingOutdoor: 'Outdoor', settingMixed: 'Mixed',
  },
  pt: {
    siteName: 'UAE Explorer', tagline: 'por Stein',
    discoverTitle: 'Descubra os Emirados',
    discoverSubtitle: 'Cada parada da viagem em família — horários, direções, história e curiosidades para o caminho.',
    searchPlaceholder: 'Buscar atrações, ex: mesquita, Ferrari, mangue...',
    allPlaces: 'Todos os Lugares', fullMap: 'Mapa Completo',
    sidebarNote: 'Lugares selecionados por todos os Emirados — escolha um destino, peça direções e vá.',
    locations: 'Locais', location: 'Local',
    noResults: 'Nenhuma atração corresponde à sua busca.',
    mapBtn: 'Mapa', detailsBtn: 'Ver Detalhes', exploreBtn: 'Explorar',
    footerTag: 'Um guia de viagem em família e amigos pelos Emirados. Feito para o tablet no carro.',
    footerStats: 'atrações · 6 categorias',
    backToDiscover: 'Voltar para Descobrir',
    getDirections: 'Obter Direções',
    aboutTitle: 'Sobre a Experiência',
    funFactsTitle: 'Curiosidades',
    onMapTitle: 'No Mapa',
    keyDetailsTitle: 'Detalhes Principais',
    hoursLabel: 'Horário de Visita', priceLabel: 'Preço', climateLabel: 'Nota sobre o Clima', bestTimeLabel: 'Melhor Horário para Visitar',
    hoursNote: 'Os horários podem mudar conforme a época — vale a pena confirmar antes de ir.',
    nearbyTitle: 'Experiências Próximas',
    footerBack: '← Voltar para todas as atrações',
    galleryTitle: 'Galeria de Fotos',
    priceAll: 'Preço: Todos', priceFree: 'Gratuito', pricePaid: 'Pago', priceVaries: 'Varia',
    settingAll: 'Ambiente: Todos', settingIndoor: 'Coberto', settingOutdoor: 'Ao ar livre', settingMixed: 'Misto',
  }
};


// --- Language helpers ---
function getLang() {
  return localStorage.getItem('ad-lang') === 'pt' ? 'pt' : 'en';
}
function setLang(lang) {
  localStorage.setItem('ad-lang', lang === 'pt' ? 'pt' : 'en');
}
function t(key) {
  return UI_STRINGS[getLang()][key] || UI_STRINGS.en[key] || key;
}
function tr(attraction, field) {
  const lang = getLang();
  return (attraction[lang] && attraction[lang][field] !== undefined) ? attraction[lang][field] : attraction.en[field];
}
function categoryLabel(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return catId;
  return cat[getLang()] || cat.en;
}

function getCategory(id) {
  return CATEGORIES.find(c => c.id === id);
}

// Returns the image to try loading for an attraction:
// - if `image` is explicitly set on the attraction, use that
// - otherwise, guess `images/{id}.jpg` — drop a file with that exact
//   name into an /images folder and it'll pick it up automatically,
//   with zero code changes.
function getImageSrc(attraction) {
  return attraction.image || `images/${attraction.id}.jpg`;
}

function getNearby(attraction, count = 3) {
  const distance = (a, b) => Math.hypot(a.lat - b.lat, a.lng - b.lng);
  return ATTRACTIONS
    .filter(a => a.id !== attraction.id)
    .sort((a, b) => {
      const sameCatA = a.category === attraction.category ? 0 : 1;
      const sameCatB = b.category === attraction.category ? 0 : 1;
      if (sameCatA !== sameCatB) return sameCatA - sameCatB;
      return distance(a, attraction) - distance(b, attraction);
    })
    .slice(0, count);
}
