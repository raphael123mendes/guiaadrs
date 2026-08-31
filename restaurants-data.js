// Abu Dhabi Restaurants Guide — data.js
// Structure mirrors the attractions page. Each restaurant has:
// id, name, cuisine, category (dining style), occasion tags, address, price, website
// Prices are approximate per person in AED, gathered from public 2026 guides — confirm before publishing.

const restaurantCategories = {
  fineDining: 'Fine Dining',
  casual: 'Casual',
  mustTry: 'Must-Try / Iconic',
  family: 'Family-Friendly',
  couples: 'Couples / Romantic',
};

const restaurants = [

  // ---------- Fine Dining ----------
  {
    id: 'talea-antonio-guida', name: 'Talea by Antonio Guida',
    cuisine: 'Italian', category: 'fineDining', occasion: ['couples', 'mustTry'],
    address: 'Emirates Palace Mandarin Oriental, West Corniche Rd, Abu Dhabi',
    price: 'AED 350–500+ per person',
    website: 'mandarinoriental.com/abu-dhabi',
    notes: 'Michelin-starred. "Cucina di Famiglia" by chef Antonio Guida — cacio e pepe made table-side. Book the terrace for sunset.',
  },
  {
    id: 'hakkasan-abu-dhabi', name: 'Hakkasan Abu Dhabi',
    cuisine: 'Modern Chinese', category: 'fineDining', occasion: ['couples'],
    address: 'Emirates Palace Mandarin Oriental, West Corniche Rd, Abu Dhabi',
    price: 'AED 400+ per person',
    website: 'hakkasan.com',
    notes: 'Michelin-starred. Opulent, dimly lit dining room — one of the most talked-about tables in the city.',
  },
  {
    id: 'zuma-abu-dhabi', name: 'Zuma Abu Dhabi',
    cuisine: 'Contemporary Japanese', category: 'fineDining', occasion: ['couples', 'mustTry'],
    address: 'Nation Towers, Corniche Rd, Abu Dhabi',
    price: 'AED 400+ per person',
    website: 'zumarestaurant.com',
    notes: 'Multi-level izakaya-style space; robata grill, sushi counter, energetic atmosphere.',
  },
  {
    id: 'coya-abu-dhabi', name: 'COYA Abu Dhabi',
    cuisine: 'Peruvian', category: 'fineDining', occasion: ['couples'],
    address: 'The St. Regis Abu Dhabi, Corniche Rd',
    price: 'AED 350–450 per person',
    website: 'coyarestaurant.com',
    notes: 'Lively, party-energy Peruvian dining — good for a fun rather than quiet date night.',
  },
  {
    id: 'oak-room', name: 'Oak Room',
    cuisine: 'Steakhouse', category: 'fineDining', occasion: ['couples'],
    address: 'Abu Dhabi EDITION, Al Bateen',
    price: 'AED 400+ per person',
    website: 'editionhotels.com/abu-dhabi',
    notes: 'Contemporary steakhouse with an in-house meat sommelier to guide cut selection.',
  },
  {
    id: 'li-beirut', name: 'Li Beirut',
    cuisine: 'Lebanese', category: 'fineDining', occasion: ['couples', 'mustTry'],
    address: 'Conrad Abu Dhabi Etihad Towers, Corniche Rd West',
    price: 'AED 300–400 per couple (without alcohol)',
    website: 'conradabudhabietihadtowers.com',
    notes: 'Sweeping sea views, candlelit tables. Labneh with herbs, truffle lamb kebabs, elevated mezze.',
  },
  {
    id: 'mr-kim', name: 'Mr Kim',
    cuisine: 'Korean Steakhouse', category: 'fineDining', occasion: ['couples'],
    address: 'Yas Mall, Yas Island',
    price: 'AED 250–350 per person',
    website: '@mrkim.ae (Instagram)',
    notes: "Yas Mall's first fully licensed restaurant. Wagyu-focused, industrial-chic setting — good pre/post Etihad Arena stop.",
  },
  {
    id: 'butcher-and-still', name: 'Butcher & Still',
    cuisine: 'American Steakhouse', category: 'fineDining', occasion: ['couples', 'family'],
    address: 'Four Seasons Abu Dhabi, Al Maryah Island',
    price: 'AED 350+ per person',
    website: 'fourseasons.com/abudhabi',
    notes: "1920s speakeasy-style decor. Named the city's best steakhouse by several guides — Tomahawk, oysters Rockefeller.",
  },
  {
    id: 'marco-pierre-white-steakhouse', name: 'Marco Pierre White Steakhouse & Grill',
    cuisine: 'Steakhouse', category: 'fineDining', occasion: ['couples'],
    address: 'Fairmont Bab Al Bahr, Corniche Rd',
    price: 'AED 300–400 per person',
    website: 'fairmont.com/bab-al-bahr-abu-dhabi',
    notes: 'Classic, formal steakhouse experience overlooking the Grand Mosque.',
  },

  // ---------- Must-Try / Iconic Local ----------
  {
    id: 'al-fanar', name: 'Al Fanar Restaurant & Cafe',
    cuisine: 'Emirati', category: 'mustTry', occasion: ['family', 'mustTry'],
    address: 'The Fountains, Yas Mall, Yas Island (multiple branches)',
    price: 'AED 80–150 per person',
    website: 'alfanarrestaurant.com',
    notes: "Abu Dhabi's first dedicated Emirati restaurant (since 2011). Machboos, grilled whole sea bass, jesheed (baby shark). Good intro to local cuisine.",
  },
  {
    id: 'mosaic', name: 'Mosaic',
    cuisine: 'Lebanese', category: 'mustTry', occasion: ['family', 'casual'],
    address: 'Multiple branches across Abu Dhabi',
    price: 'AED 100–180 per person',
    website: 'mosaicuae.com',
    notes: 'Long-running local Lebanese group, a reliable Abu Dhabi favorite for mezze and grills.',
  },
  {
    id: 'lebanese-flower', name: 'Lebanese Flower (Zahrat Lebnan)',
    cuisine: 'Lebanese', category: 'casual', occasion: ['family', 'mustTry'],
    address: 'Multiple branches, incl. Electra St, Abu Dhabi',
    price: 'AED 40–80 per person',
    website: 'No official site — check Google Maps listing',
    notes: 'Started as a bakery, now a beloved casual chain. Famous for mixed grills, shawarma, fresh bread straight from the oven.',
  },

  // ---------- Casual ----------
  {
    id: 'saudi-kitchen', name: 'Saudi Kitchen',
    cuisine: 'Saudi / Arabic', category: 'casual', occasion: ['family'],
    address: 'Near Mushrif Mall, Al Mushrif, Abu Dhabi',
    price: 'AED 50–90 per person',
    website: 'No official site — check Google Maps listing',
    notes: 'Down-to-earth, popular with locals. Majboos, beryani, dedicated kids menu.',
  },
  {
    id: 'wadi-luqaimat-chebab', name: 'Wadi Luqaimat and Chebab Restaurant',
    cuisine: 'Emirati', category: 'casual', occasion: ['family'],
    address: 'Al Nasr Tower 2, Al Murror St / Al Aman St, Abu Dhabi',
    price: 'AED 30–60 per person',
    website: 'No official site — check Google Maps listing',
    notes: 'Bright, simple, budget-friendly. Good for trying traditional Emirati sweets (luqaimat) alongside mains.',
  },
  {
    id: 'jones-the-grocer', name: 'Jones the Grocer',
    cuisine: 'International / Café', category: 'casual', occasion: ['family'],
    address: 'Multiple branches, incl. Al Maryah Island, Abu Dhabi',
    price: 'AED 80–150 per person',
    website: 'jonesthegrocer.com',
    notes: 'Gourmet grocery + café concept, Australian-inflected menu. Reliable kid-friendly options (mac & cheese, chicken burgers).',
  },
  {
    id: 'dinos-bistro-italiano', name: "Dino's Bistro Italiano",
    cuisine: 'Italian', category: 'casual', occasion: ['family'],
    address: 'The Pearl Rotana, Khaleej Al Arabi St, Capital Gate Area, Abu Dhabi',
    price: 'AED 90–150 per person',
    website: 'No official site — check hotel listing',
    notes: 'Relaxed, lively family-run feel. Good pizza/pasta range and gelato for kids.',
  },
  {
    id: 'sandersons', name: "Sanderson's",
    cuisine: 'International / Gastropub', category: 'casual', occasion: ['family'],
    address: 'Al Seef Village Mall, Abu Dhabi',
    price: 'AED 35–100 per person (kids menu ~AED 35)',
    website: 'No official site — check Al Seef Village listing',
    notes: 'Strong kids menu (nuggets, fish and chips) alongside a varied adult menu (poke bowls, sea bass).',
  },

  // ---------- Couples / Romantic (beyond fine dining list above) ----------
  {
    id: 'buddha-bar-beach', name: 'Buddha-Bar Beach Abu Dhabi',
    cuisine: 'Asian Fusion', category: 'couples', occasion: ['couples'],
    address: 'The St Regis Saadiyat Island Resort, Saadiyat Island',
    price: 'AED 300+ per person',
    website: 'buddhabarbeachabudhabi.com',
    notes: 'Day-to-night beachfront dining with sunset views over Saadiyat — East-meets-West menu.',
  },
  {
    id: 'mate-park-hyatt', name: 'Maté',
    cuisine: 'Argentinian / Lebanese', category: 'fineDining', occasion: ['couples'],
    address: 'Park Hyatt Abu Dhabi Hotel & Villas, Saadiyat Island',
    price: 'AED 300–400 per person',
    website: 'hyattrestaurants.com',
    notes: 'Wood-fired steakhouse over two floors — sit at the counter for the full open-kitchen experience; book ahead.',
  },

];
