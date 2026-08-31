# Abu Dhabi Family Explorer — Website

A tablet-friendly site for showing your family Abu Dhabi's attractions while you drive: a home map + list view, and a detail page for every stop with hours, directions, history, and fun facts.

## Files
- `index.html` — Home dashboard: search, category filters, attraction list, interactive map.
- `attraction.html` — Detail page template. Reads `?id=...` from the URL and pulls everything from `data.js`. One file serves all 34 attractions — no need for 34 separate HTML files.
- `data.js` — All attraction data (name, coordinates, hours, price, history, fun facts, etc.) plus the category list. **This is the file you'll edit most.**
- `theme.js` — Shared design tokens (colors, fonts, spacing) so both pages stay visually consistent. Based on your uploaded "Nocturnal Oasis" design system.

## How to use it
1. Unzip/copy this folder anywhere.
2. Open `index.html` in a browser — no build step, no server required (though see the note on file:// below).
3. Click any attraction to see its detail page, get driving directions (opens Google Maps), and browse nearby stops.

**Tip for the tablet in the car:** host these files somewhere simple — a folder in Google Drive with "Publish to web," GitHub Pages (free), or Netlify's drag-and-drop deploy — so the tablet loads it over Wi-Fi/data with a normal URL instead of `file://`, which some browsers restrict.

## A note on the design
Your upload included three screens built from two different design systems (a lighter blue dashboard, and two gold-accented "Nocturnal Oasis" detail pages with a fuller style guide). I standardized the whole site on **Nocturnal Oasis** — the fully documented one — and rebuilt the dashboard to match, so navigating between the home page and detail pages feels like one consistent product rather than three different apps.

## Adding or editing attractions
Open `data.js` and either edit an existing object in the `ATTRACTIONS` array or copy one as a template for a new entry. Every attraction needs:
```js
{
  id: 'unique-slug',       // used in the URL: attraction.html?id=unique-slug
  name: '...', category: 'heritage', // must match a CATEGORIES id
  icon: 'museum',          // any Google "Material Symbols Outlined" name
  lat: 24.1234, lng: 54.1234,
  address: '...', hours: '...', price: '...', climateNote: '...', bestTime: '...',
  description: '...', history: '...',
  funFacts: ['...', '...'],
  image: null              // see below
}
```
No code changes needed elsewhere — both pages read from this array automatically, including the map markers, search, category filters, and "nearby experiences" suggestions (calculated automatically by category + distance).

## Adding real photos
Right now every card and hero shows an elegant gradient + icon placeholder instead of a photo — this was intentional, since most tourism photos of these sites are copyrighted and I didn't want to hotlink images without a clear license.

To add your own photos:
1. Create an `images/` folder next to these files.
2. Add a photo (e.g. `images/grand-mosque.jpg`).
3. In `data.js`, set that attraction's `image` field: `image: 'images/grand-mosque.jpg'`.
4. The gradient placeholder is automatically replaced by the real photo — no other changes needed.

Good sources for free, legally-clear photos of these public landmarks:
- **Wikimedia Commons** (commons.wikimedia.org) — most major landmarks here (the mosque, Louvre, Etihad Towers, etc.) already have high-quality, freely licensed photos.
- **Your own photos** — since you're driving to each place anyway, this is the most personal option and the simplest, licensing-wise.
- Each attraction's `image_search_term` from the earlier data file I sent you is a ready-made search phrase if you want to search Commons or your own photo library.

## Verify before your trip
- **Coordinates**: built from public sources and rounded to roughly street-level accuracy. Drop pins into Google Maps to confirm before relying on them for turn-by-turn navigation.
- **Hours**: several venues (SeaWorld, Zayed National Museum, Natural History Museum, teamLab Phenomena, Ferrari World, Yas Waterworld) have hours that shift seasonally or are still stabilizing after opening — worth a quick recheck a day or two before you go.

## Bilingual (English / Portuguese)
Both pages now have a working EN/PT toggle, matching the pill switch from your original mockup — one in the sidebar/top nav on the home page, one in the top nav on every detail page. Every attraction's name, description, history, fun facts, hours, price, climate note, and best-time-to-visit are fully translated, along with all interface text (search placeholder, buttons, section headers, etc.). The chosen language is remembered across pages for the session.

To add a translation for a new attraction, or adjust existing wording, open `data.js` — each attraction has an `en: {...}` and `pt: {...}` block side by side with the same fields.

To add a third language later, duplicate the `en` block pattern (add an `es: {...}` etc. to each attraction and to `UI_STRINGS`), then extend the toggle in `index.html`/`attraction.html` from a two-way pill to a small dropdown — happy to do this on request.

## What's not included (and why)
- **Ticket booking**: "Get Directions" is wired to Google Maps; ticket links would need official park URLs, which I can add on request.
