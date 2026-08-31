// Shared "Nocturnal Oasis" design tokens — Tailwind config used by every page.
// Keeping this in one file means the whole site stays visually consistent;
// edit colors/fonts here once and both index.html and attraction.html update.
const AD_THEME_CONFIG = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#051424', 'surface-dim': '#051424', 'surface-bright': '#2c3a4c',
        'surface-container-lowest': '#010f1f', 'surface-container-low': '#0d1c2d',
        'surface-container': '#122131', 'surface-container-high': '#1c2b3c',
        'surface-container-highest': '#273647',
        'on-surface': '#d4e4fa', 'on-surface-variant': '#c6c6cd',
        'inverse-surface': '#d4e4fa', 'inverse-on-surface': '#233143',
        outline: '#909097', 'outline-variant': '#46464c', 'surface-tint': '#c0c6de',
        primary: '#c0c6de', 'on-primary': '#2a3043', 'primary-container': '#020617',
        'on-primary-container': '#72778d',
        secondary: '#ffb77d', 'on-secondary': '#4d2600', 'secondary-container': '#d97707',
        'on-secondary-container': '#432100',
        tertiary: '#bcc7de', 'on-tertiary': '#263143', 'tertiary-container': '#000717',
        'on-tertiary-container': '#6d798e',
        error: '#ffb4ab', 'on-error': '#690005', 'error-container': '#93000a', 'on-error-container': '#ffdad6',
        background: '#051424', 'on-background': '#d4e4fa', 'surface-variant': '#273647',
        'high-contrast-white': '#f8fafc', 'soft-gold': '#fde68a',
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

// A deterministic set of gradient pairs (keyed by category) used for the
// photo placeholders until real images are dropped into /images.
const PLACEHOLDER_GRADIENTS = {
  'heritage': ['#3c2a14', '#1c2b3c'],
  'art-museums': ['#2a1c3c', '#122131'],
  'theme-parks': ['#5a1f1f', '#1c2b3c'],
  'nature': ['#12331f', '#0d1c2d'],
  'landmarks-shopping': ['#1c2b3c', '#020617'],
  'adventure': ['#4a3512', '#122131'],
};

function placeholderStyle(categoryId) {
  const pair = PLACEHOLDER_GRADIENTS[categoryId] || ['#122131', '#020617'];
  return `background: linear-gradient(135deg, ${pair[0]} 0%, ${pair[1]} 100%);`;
}

// Builds a photo slot: gradient+icon placeholder shown immediately,
// with the real photo (images/{id}.jpg, or attr.image if set) quietly
// tried in the background and faded in on top if it loads. If the file
// is missing, the placeholder just stays — no broken-image icon, no delay.
function photoSlotHtml(attr, sizeClasses) {
  return `<div class="${sizeClasses} relative overflow-hidden photo-slot" data-attr-id="${attr.id}">
      <div class="absolute inset-0 flex items-center justify-center" style="${placeholderStyle(attr.category)}">
        <span class="material-symbols-outlined text-white/25 text-5xl">${attr.icon}</span>
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
