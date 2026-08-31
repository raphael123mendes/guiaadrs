// Shared design tokens — Tailwind config used by every page.
// Keeping this in one file means the whole site stays visually consistent;
// edit colors/fonts here once and both index.html and attraction.html update.
//
// THEME SWITCHING: colors below reference CSS custom properties
// (rgb(var(--color-x) / <alpha-value>)) instead of literal hex values.
// THEME_PALETTES defines what those variables actually equal in each
// theme; applyTheme() writes them onto <html> at runtime, so switching
// themes is instant — no page reload, no Tailwind re-compile.
const AD_THEME_CONFIG = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--color-background) / <alpha-value>)',
        outline: 'rgb(var(--color-outline) / <alpha-value>)',
        'secondary-container': 'rgb(var(--color-secondary-container) / <alpha-value>)',
        'surface-container': 'rgb(var(--color-surface-container) / <alpha-value>)',
        'surface-container-lowest': 'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
        'soft-gold': 'rgb(var(--color-soft-gold) / <alpha-value>)',
        'surface-variant': 'rgb(var(--color-surface-variant) / <alpha-value>)',
        'high-contrast-white': 'rgb(var(--color-high-contrast-white) / <alpha-value>)',
        'on-background': 'rgb(var(--color-on-background) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--color-on-secondary-container) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        'secondary-fixed': 'rgb(var(--color-secondary-fixed) / <alpha-value>)',
      },
      borderRadius: { DEFAULT: '0.25rem', sm: '0.125rem', lg: '0.5rem', xl: '0.75rem', full: '9999px' },
      spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '48px', xxl: '80px', gutter: '32px', 'container-max': '1440px' },
      fontFamily: {
        'display-lg': ['"Noto Serif"', 'serif'], 'display-lg-mobile': ['"Noto Serif"', 'serif'],
        'headline-md': ['"Noto Serif"', 'serif'], 'headline-sm': ['"Noto Serif"', 'serif'],
        'body-lg': ['"Hanken Grotesk"', 'sans-serif'], 'body-md': ['"Hanken Grotesk"', 'sans-serif'],
        'label-lg': ['"Hanken Grotesk"', 'sans-serif'], 'label-sm': ['"Hanken Grotesk"', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-lg-mobile': ['36px', { lineHeight: '1.2', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '500' }],
        'headline-sm': ['22px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '1', fontWeight: '500' }],
      },
    },
  },
};

// Two full palettes, straight from the "Nocturnal Oasis" (dark) and
// "Majestic Oasis" (light) design systems in the original upload.
// Values are "R G B" triplets (no commas) — that's the format Tailwind's
// rgb(var(--x) / <alpha-value>) pattern expects.
const THEME_PALETTES = {
  dark: {
    background: '5 20 36',
    outline: '144 144 151',
    'secondary-container': '217 119 7',
    'surface-container': '18 33 49',
    'surface-container-lowest': '1 15 31',
    'outline-variant': '70 70 76',
    'soft-gold': '253 230 138',
    'surface-variant': '39 54 71',
    'high-contrast-white': '248 250 252',
    'on-background': '212 228 250',
    'on-secondary-container': '67 33 0',
    'on-surface': '212 228 250',
    'on-surface-variant': '198 198 205',
    'secondary-fixed': '255 220 195',
  },
  light: {
    background: '252 248 250',
    outline: '118 119 125',
    'secondary-container': '254 147 44',
    'surface-container': '240 237 239',
    'surface-container-lowest': '255 255 255',
    'outline-variant': '198 198 205',
    'soft-gold': '144 77 0',
    'surface-variant': '228 226 228',
    'high-contrast-white': '27 27 29',
    'on-background': '27 27 29',
    'on-secondary-container': '102 53 0',
    'on-surface': '27 27 29',
    'on-surface-variant': '69 70 77',
    'secondary-fixed': '255 220 195',
  },
};

// A few things aren't simple recolors — they need different structure per
// theme (e.g. map markers flip from gold-circle/dark-icon to navy-circle/
// gold-icon per the Majestic Oasis spec), so they're plain CSS strings
// rather than Tailwind color tokens.
const THEME_EXTRAS = {
  dark: {
    'glass-fill': 'rgba(15, 23, 42, 0.6)',
    'glass-stroke': 'rgba(255, 255, 255, 0.1)',
    'glass-shadow': 'none',
    'map-tile-filter': 'none',
    'marker-bg': '#d97707', 'marker-fg': '#2f1500', 'marker-ring': 'rgba(253,230,138,0.6)',
    'chip-active-bg': '#d97707', 'chip-active-fg': '#2f1500',
  },
  light: {
    'glass-fill': 'rgba(255, 255, 255, 0.72)',
    'glass-stroke': 'rgba(15, 23, 42, 0.08)',
    'glass-shadow': '0 10px 30px -5px rgba(15, 23, 42, 0.08)',
    'map-tile-filter': 'none',
    'marker-bg': '#131b2e', 'marker-fg': '#fe932c', 'marker-ring': 'rgba(254,147,44,0.5)',
    'chip-active-bg': '#fe932c', 'chip-active-fg': '#ffffff',
  },
};

// CARTO's raster basemaps (the source of this app's clean, muted map look)
// now require a free API key — get one at https://carto.com/basemaps/apikey
// (personal-project friendly, 5M tile requests/month free).
//
// This key is necessarily visible in the browser: Leaflet requests tiles
// directly from CARTO's CDN, and CARTO's own docs say to pass the key
// straight in the tile URL. There's no backend here to hide it behind, and
// none is needed — this is a lightweight usage token tied to the free
// tier, not a secret. Just paste your key below.
const CARTO_API_KEY = 'cb1_2no8_1_ebf01ed74921dbda2323560a';

// dark_all and light_all are CARTO's own purpose-built dark/light styles —
// no CSS filter trickery needed, each theme gets tiles designed for it.
function getMapTileUrl(theme) {
  const style = theme === 'light' ? 'light_all' : 'dark_all';
  return `https://{s}.basemaps.cartocdn.com/${style}/{z}/{x}/{y}{r}.png?key=${CARTO_API_KEY}`;
}
const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>';

function getTheme() {
  return localStorage.getItem('ad-theme') === 'light' ? 'light' : 'dark';
}
function setTheme(theme) {
  localStorage.setItem('ad-theme', theme === 'light' ? 'light' : 'dark');
}
// Writes every CSS variable for the given theme onto <html>. Called once
// on page load (before paint, to avoid a flash of the wrong theme) and
// again whenever the toggle fires.
function applyTheme(theme) {
  const palette = THEME_PALETTES[theme] || THEME_PALETTES.dark;
  const extras = THEME_EXTRAS[theme] || THEME_EXTRAS.dark;
  const root = document.documentElement;
  Object.entries(palette).forEach(([key, value]) => root.style.setProperty(`--color-${key}`, value));
  Object.entries(extras).forEach(([key, value]) => root.style.setProperty(`--${key}`, value));
  root.classList.toggle('dark', theme !== 'light');
  root.classList.toggle('light-theme', theme === 'light');
}

// A deterministic set of gradient pairs (keyed by category) used for the
// photo placeholders until real images are dropped into /images. Separate
// pairs per theme so a missing photo reads as "styled empty state", not
// "broken", on either background.
const PLACEHOLDER_GRADIENTS = {
  dark: {
    'heritage': ['#3c2a14', '#1c2b3c'],
    'art-museums': ['#2a1c3c', '#122131'],
    'theme-parks': ['#5a1f1f', '#1c2b3c'],
    'nature': ['#12331f', '#0d1c2d'],
    'landmarks-shopping': ['#1c2b3c', '#020617'],
    'adventure': ['#4a3512', '#122131'],
  },
  light: {
    'heritage': ['#fdecd8', '#f7f1e8'],
    'art-museums': ['#f2e6f5', '#f5f0f3'],
    'theme-parks': ['#fde0e0', '#f8ecec'],
    'nature': ['#e2f2e6', '#eef5ef'],
    'landmarks-shopping': ['#e6ecf5', '#eef1f7'],
    'adventure': ['#f7ecd8', '#f8f2e6'],
  },
};

function placeholderStyle(categoryId) {
  const set = PLACEHOLDER_GRADIENTS[getTheme()] || PLACEHOLDER_GRADIENTS.dark;
  const pair = set[categoryId] || (getTheme() === 'light' ? ['#f0edef', '#e4e2e4'] : ['#122131', '#020617']);
  return `background: linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%);`;
}
// The icon drawn over a placeholder needs to flip from a faint white to a
// faint dark tint depending on theme, or it disappears against light mode.
function placeholderIconClass() {
  return getTheme() === 'light' ? 'text-black/15' : 'text-white/25';
}

// Builds a photo slot: gradient+icon placeholder shown immediately,
// with the real photo (images/{id}.jpg, or attr.image if set) quietly
// tried in the background and faded in on top if it loads. If the file
// is missing, the placeholder just stays — no broken-image icon, no delay.
function photoSlotHtml(attr, sizeClasses) {
  return `<div class="${sizeClasses} relative overflow-hidden photo-slot" data-attr-id="${attr.id}">
      <div class="absolute inset-0 flex items-center justify-center" style="${placeholderStyle(attr.category)}">
        <span class="material-symbols-outlined ${placeholderIconClass()} text-5xl">${attr.icon}</span>
      </div>
    </div>`;
}

// Call once after inserting any HTML built with photoSlotHtml() into the DOM.
// Scoped to `root` (defaults to the whole document) so you can re-run it
// after re-rendering just a section (e.g. the attractions list).
function mountPhotos(root = document) {
  const slots = root.classList && root.classList.contains('photo-slot')
    ? [root, ...root.querySelectorAll('.photo-slot')]
    : root.querySelectorAll('.photo-slot');
  slots.forEach(slot => {
    const attr = ATTRACTIONS_BY_ID[slot.dataset.attrId];
    if (!attr) return;
    const src = getImageSrc(attr);
    const img = new Image();
    img.onload = () => {
      const layer = document.createElement('div');
      layer.className = 'absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-500';
      layer.style.backgroundImage = `url('${src}')`;
      slot.appendChild(layer);
      requestAnimationFrame(() => layer.classList.remove('opacity-0'));
    };
    // onerror intentionally does nothing — the placeholder already
    // rendered, so a missing file just means it stays as-is.
    img.src = src;
  });
}

// Gallery: tries images/{id}-1.jpg through {id}-{maxImages}.jpg. Each one
// that actually loads gets added to `container`; the whole section is
// left hidden (via the caller checking the return count) if none load.
// No data.js changes needed — just drop correctly-named files in /images.
function mountGallery(container, attr, maxImages = 4) {
  return new Promise(resolve => {
    let loaded = 0, settled = 0;
    const results = [];
    for (let i = 1; i <= maxImages; i++) {
      const src = `images/${attr.id}-${i}.jpg`;
      const img = new Image();
      img.onload = () => {
        results[i] = src;
        loaded++; settled++;
        if (settled === maxImages) finish();
      };
      img.onerror = () => {
        settled++;
        if (settled === maxImages) finish();
      };
      img.src = src;
    }
    function finish() {
      const ordered = results.filter(Boolean);
      ordered.forEach(src => {
        const fig = document.createElement('a');
        fig.href = src;
        fig.target = '_blank';
        fig.rel = 'noopener';
        fig.className = 'block aspect-square rounded-lg overflow-hidden bg-cover bg-center hover:opacity-90 transition-opacity';
        fig.style.backgroundImage = `url('${src}')`;
        container.appendChild(fig);
      });
      resolve(ordered.length);
    }
  });
}
