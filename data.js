// Abu Dhabi Family Explorer — attraction dataset (bilingual: EN + PT)
// Each attraction has language-neutral fields (id, category, icon, lat, lng)
// plus an `en` and `pt` block with all display text. UI strings live in
// UI_STRINGS below. Both pages read the current language from
// localStorage('ad-lang') so the choice carries across pages.
//
// IMAGES: set `image` to a relative path (e.g. "images/grand-mosque-1.jpg")
// once you've added real photos to an /images folder next to this file.
// Leave it null and the site shows a gradient + icon placeholder instead.

const CATEGORIES = [
  { id: 'heritage', icon: 'account_balance', en: 'Culture & Heritage', pt: 'Cultura e Patrimônio' },
  { id: 'art-museums', icon: 'museum', en: 'Art & Museums', pt: 'Arte e Museus' },
  { id: 'theme-parks', icon: 'attractions', en: 'Theme Parks & Entertainment', pt: 'Parques Temáticos e Entretenimento' },
  { id: 'nature', icon: 'park', en: 'Nature & Outdoors', pt: 'Natureza e Ar Livre' },
  { id: 'landmarks-shopping', icon: 'apartment', en: 'Modern Landmarks & Shopping', pt: 'Marcos Modernos e Compras' },
  { id: 'adventure', icon: 'landscape', en: 'Adventure & Desert', pt: 'Aventura e Deserto' },
];

const UI_STRINGS = {
  en: {
    siteName: 'AD Heritage', tagline: 'Modern Heritage',
    discoverTitle: 'Discover Abu Dhabi',
    discoverSubtitle: "Every stop on your family's road trip — hours, directions, history, and fun facts for the road.",
    searchPlaceholder: 'Search attractions, e.g. mosque, Ferrari, mangrove...',
    allPlaces: 'All Places', fullMap: 'Full Map',
    sidebarNote: '34 curated spots across Abu Dhabi — pick a place, get directions, and go.',
    locations: 'Locations', location: 'Location',
    noResults: 'No attractions match your search.',
    mapBtn: 'Map', detailsBtn: 'View Details', exploreBtn: 'Explore',
    footerTag: 'A family road-trip guide to Abu Dhabi. Built for the tablet in your car.',
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
  },
  pt: {
    siteName: 'AD Heritage', tagline: 'Patrimônio Moderno',
    discoverTitle: 'Descubra Abu Dhabi',
    discoverSubtitle: 'Cada parada da viagem em família — horários, direções, história e curiosidades para o caminho.',
    searchPlaceholder: 'Buscar atrações, ex: mesquita, Ferrari, mangue...',
    allPlaces: 'Todos os Lugares', fullMap: 'Mapa Completo',
    sidebarNote: '34 lugares selecionados em Abu Dhabi — escolha um destino, peça direções e vá.',
    locations: 'Locais', location: 'Local',
    noResults: 'Nenhuma atração corresponde à sua busca.',
    mapBtn: 'Mapa', detailsBtn: 'Ver Detalhes', exploreBtn: 'Explorar',
    footerTag: 'Um guia de viagem em família por Abu Dhabi. Feito para o tablet no carro.',
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
  }
};

const ATTRACTIONS = [
  // ---------- Culture & Heritage ----------
  {
    id: 'grand-mosque', category: 'heritage', icon: 'mosque', lat: 24.4128, lng: 54.4750,
    address: 'Sheikh Rashid Bin Saeed St, Abu Dhabi', image: "images/grand-mosque.jpg", 
    souce:'https://unsplash.com/photos/brown-mansion-with-lights-during-nighttime-p0MGf8YvGRg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    en: {
      name: 'Sheikh Zayed Grand Mosque',
      hours: 'Sat–Thu 9:00 AM–10:00 PM · Fri 9:00 AM–12:00 PM & 3:00–10:00 PM',
      price: 'Free entry', climateNote: 'Partially indoor', bestTime: 'Early morning or after sunset',
      description: "One of the world's largest mosques, built entirely of white marble with 82 domes, reflecting pools, and space for 41,000 worshippers.",
      history: "Commissioned by the UAE's founding father, Sheikh Zayed bin Sultan Al Nahyan, as a symbol of Islamic tolerance and cultural unity. Construction began in 1996 and took 11 years, drawing artisans and materials from around the world. Sheikh Zayed is buried in the mosque's courtyard.",
      funFacts: [
        "Home to one of the world's largest hand-knotted carpets, made by around 1,200 artisans.",
        'The main chandelier is one of the largest in the world, set with Swarovski crystals.',
        "A lunar-cycle lighting system changes the building's glow to match the moon's phases."
      ]
    },
    pt: {
      name: 'Mesquita Sheikh Zayed',
      hours: 'Sáb–qui 9h–22h · Sex 9h–12h e 15h–22h',
      price: 'Entrada gratuita', climateNote: 'Parcialmente coberta', bestTime: 'Cedo pela manhã ou após o pôr do sol',
      description: 'Uma das maiores mesquitas do mundo, construída inteiramente em mármore branco, com 82 cúpulas, espelhos d\'água e espaço para 41.000 fiéis.',
      history: 'Encomendada pelo fundador dos Emirados, Sheikh Zayed bin Sultan Al Nahyan, como símbolo de tolerância islâmica e união cultural. A construção começou em 1996 e levou 11 anos, reunindo artesãos e materiais do mundo todo. Sheikh Zayed está enterrado no pátio da mesquita.',
      funFacts: [
        'Abriga um dos maiores tapetes feitos à mão do mundo, tecido por cerca de 1.200 artesãos.',
        'O lustre principal é um dos maiores do mundo, cravejado com cristais Swarovski.',
        'Um sistema de iluminação baseado no ciclo lunar muda o brilho do edifício conforme as fases da lua.'
      ]
    }
  },
  {
    id: 'qasr-al-watan', category: 'heritage', icon: 'castle', lat: 24.4335, lng: 54.3098,
    address: 'Ras Al Akhdar, Abu Dhabi', image: null,
    en: {
      name: 'Qasr Al Watan',
      hours: 'Daily 10:00 AM–8:00 PM', price: 'From AED 60', climateNote: 'Mostly indoor', bestTime: 'Evening, for the light show',
      description: "A working presidential palace opened to the public, showcasing Arabian craftsmanship, gold-leaf interiors, and one of the world's largest library domes.",
      history: "Opened in 2019, Qasr Al Watan was built to give visitors insight into the UAE's system of governance and the story of the nation's founding, rather than functioning purely as a museum.",
      funFacts: [
        'The Great Hall dome is decorated with intricate hand-applied gold-leaf patterns.',
        'It houses a vast library with historic manuscripts on Arab and Islamic knowledge.',
        'At night, a light-and-sound show called "Palace in Motion" is projected onto the building.'
      ]
    },
    pt: {
      name: 'Qasr Al Watan',
      hours: 'Diariamente 10h–20h', price: 'A partir de AED 60', climateNote: 'Majoritariamente coberto', bestTime: 'À noite, para o show de luzes',
      description: 'Um palácio presidencial em funcionamento, aberto ao público, com artesanato árabe, interiores em folha de ouro e uma das maiores cúpulas de biblioteca do mundo.',
      history: 'Inaugurado em 2019, o Qasr Al Watan foi construído para mostrar aos visitantes o sistema de governo dos Emirados e a história da fundação do país, além de funcionar como museu.',
      funFacts: [
        'A cúpula do Grande Salão é decorada com padrões em folha de ouro aplicados à mão.',
        'Abriga uma vasta biblioteca com manuscritos históricos sobre o conhecimento árabe e islâmico.',
        'À noite, um show de luz e som chamado "Palace in Motion" é projetado no edifício.'
      ]
    }
  },
  {
    id: 'qasr-al-hosn', category: 'heritage', icon: 'fort', lat: 24.4764, lng: 54.3705,
    address: 'Corniche Rd, near the Cultural Foundation, Abu Dhabi', image: null,
    en: {
      name: 'Qasr Al Hosn',
      hours: 'Sat–Thu 9:00 AM–7:00 PM (verify Friday hours)', price: 'Free entry', climateNote: 'Indoor & outdoor', bestTime: 'Late afternoon',
      description: "Abu Dhabi's oldest stone building — originally a watchtower, later the ruling family's residence and seat of government.",
      history: 'Construction began around 1795 as a coral-and-stone watchtower guarding the island\'s only freshwater well, later expanded into a fort and palace for the Al Nahyan ruling family.',
      funFacts: ['It\'s considered the birthplace of modern Abu Dhabi.', 'The site hosts the annual Qasr Al Hosn cultural festival.']
    },
    pt: {
      name: 'Qasr Al Hosn',
      hours: 'Sáb–qui 9h–19h (confirme o horário de sexta-feira)', price: 'Entrada gratuita', climateNote: 'Ambientes internos e externos', bestTime: 'Final da tarde',
      description: 'O edifício de pedra mais antigo de Abu Dhabi — originalmente uma torre de vigia, depois residência da família governante e sede do governo.',
      history: 'A construção começou por volta de 1795 como uma torre de vigia de coral e pedra, protegendo o único poço de água doce da ilha, mais tarde expandida em um forte e palácio para a família governante Al Nahyan.',
      funFacts: ['É considerado o berço da Abu Dhabi moderna.', 'O local sedia o festival cultural anual Qasr Al Hosn.']
    }
  },
  {
    id: 'heritage-village', category: 'heritage', icon: 'holiday_village', lat: 24.4738, lng: 54.3372,
    address: 'Al Marina St, Breakwater, Abu Dhabi', image: null,
    en: {
      name: 'Abu Dhabi Heritage Village',
      hours: 'Daily approx. 9:00 AM–5:00 PM (varies by season)', price: 'Free entry', climateNote: 'Mostly outdoor', bestTime: 'Morning',
      description: 'A recreated traditional Bedouin village with palm-frond houses, a souk, and demonstrations of pre-oil-era Emirati life.',
      history: 'Built to preserve and showcase Emirati heritage — pearl diving, weaving, desert life — for younger generations and visitors alike.',
      funFacts: ['Includes a mock oasis with a working falaj (traditional irrigation channel).', 'Craftspeople demonstrate pottery, weaving, and metalwork on site.']
    },
    pt: {
      name: 'Vila do Patrimônio de Abu Dhabi',
      hours: 'Diariamente, aprox. 9h–17h (varia por estação)', price: 'Entrada gratuita', climateNote: 'Majoritariamente ao ar livre', bestTime: 'Manhã',
      description: 'Uma recriação de uma vila beduína tradicional com casas de folhas de palmeira, um souk e demonstrações da vida emirati antes do petróleo.',
      history: 'Construída para preservar e mostrar o patrimônio emirati — mergulho em busca de pérolas, tecelagem, vida no deserto — para novas gerações e visitantes.',
      funFacts: ['Inclui um oásis reconstituído com um falaj (canal de irrigação tradicional) funcionando.', 'Artesãos demonstram cerâmica, tecelagem e metalurgia no local.']
    }
  },
  {
    id: 'founders-memorial', category: 'heritage', icon: 'auto_awesome', lat: 24.4548, lng: 54.3379,
    address: 'Al Bateen, Abu Dhabi', image: null,
    en: {
      name: "Founder's Memorial",
      hours: 'Daily 9:00 AM–7:00 PM', price: 'Free entry', climateNote: 'Mostly outdoor', bestTime: 'Sunset',
      description: 'A tribute to Sheikh Zayed bin Sultan Al Nahyan, centered on "Constellation" — a giant sculptural portrait made of thousands of geometric nodes suspended over a reflecting pool.',
      history: "Opened in 2018 to honor the UAE's founding father and his vision, values, and legacy through art, gardens, and exhibits.",
      funFacts: ["The \"Constellation\" sculpture only resolves into Sheikh Zayed's portrait from one precise viewing angle.", 'The surrounding gardens use native, drought-tolerant landscaping.']
    },
    pt: {
      name: 'Founder\'s Memorial (Memorial do Fundador)',
      hours: 'Diariamente 9h–19h', price: 'Entrada gratuita', climateNote: 'Majoritariamente ao ar livre', bestTime: 'Pôr do sol',
      description: 'Uma homenagem a Sheikh Zayed bin Sultan Al Nahyan, centrada em "Constellation" — um enorme retrato escultural feito de milhares de nós geométricos suspensos sobre um espelho d\'água.',
      history: 'Inaugurado em 2018 para homenagear o fundador dos Emirados e sua visão, valores e legado por meio de arte, jardins e exposições.',
      funFacts: ['A escultura "Constellation" só forma o retrato de Sheikh Zayed quando vista de um ângulo exato.', 'Os jardins ao redor usam paisagismo nativo e resistente à seca.']
    }
  },
  {
    id: 'zayed-national-museum', category: 'heritage', icon: 'vrpano', lat: 24.5347, lng: 54.4014,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    en: {
      name: 'Zayed National Museum',
      hours: 'Newly opened (Dec 2025) — check official site for current hours', price: 'From AED 50', climateNote: 'Fully indoor', bestTime: 'Mid-morning or late afternoon',
      description: "A museum tracing 300,000 years of human history in the UAE, designed by Norman Foster in a form inspired by a falcon in flight.",
      history: 'Named for Sheikh Zayed, the museum was designed by Foster + Partners with six permanent galleries plus an outdoor gallery and temporary exhibition space.',
      funFacts: ['The collection includes the Abu Dhabi Pearl and a full-scale reconstruction of an ancient Magan boat.', "It was named one of Time Magazine's World's Greatest Places for 2026."]
    },
    pt: {
      name: 'Museu Nacional Zayed',
      hours: 'Recém-inaugurado (dez. 2025) — confira o site oficial para horários atuais', price: 'A partir de AED 50', climateNote: 'Totalmente coberto', bestTime: 'Meio da manhã ou final da tarde',
      description: 'Um museu que percorre 300.000 anos de história humana nos Emirados, projetado por Norman Foster com uma forma inspirada em um falcão em voo.',
      history: 'Nomeado em homenagem a Sheikh Zayed, o museu foi projetado pela Foster + Partners com seis galerias permanentes, além de uma galeria externa e espaço para exposições temporárias.',
      funFacts: ['O acervo inclui a Pérola de Abu Dhabi e uma reconstrução em tamanho real de um antigo barco Magan.', 'Foi nomeado um dos "World\'s Greatest Places" de 2026 pela revista Time.']
    }
  },
  {
    id: 'house-of-artisans', category: 'heritage', icon: 'palette', lat: 24.4779, lng: 54.3702,
    address: 'Near Qasr Al Hosn, Abu Dhabi', image: null,
    en: {
      name: 'House of Artisans',
      hours: 'Sat–Thu 9:00 AM–7:00 PM', price: 'Free entry', climateNote: 'Fully indoor', bestTime: 'Any time',
      description: 'A small museum and workshop space dedicated to traditional Emirati crafts like Talli weaving, Sadu weaving, and palm-frond work.',
      history: 'Opened to keep traditional Emirati handicrafts alive by training new generations of artisans.',
      funFacts: ['Watch artisans weave Talli, a traditional metallic-thread braid used on garments.']
    },
    pt: {
      name: 'Casa dos Artesãos',
      hours: 'Sáb–qui 9h–19h', price: 'Entrada gratuita', climateNote: 'Totalmente coberto', bestTime: 'Qualquer horário',
      description: 'Um pequeno museu e espaço de oficinas dedicado a artesanatos emiratis tradicionais, como o tear Talli, o tear Sadu e trabalhos em folhas de palmeira.',
      history: 'Inaugurada para manter viva a tradição do artesanato emirati, formando novas gerações de artesãos.',
      funFacts: ['Veja artesãos tecendo Talli, um trançado tradicional com fios metálicos usado em roupas.']
    }
  },
  {
    id: 'al-ain-oasis', category: 'heritage', icon: 'forest', lat: 24.2247, lng: 55.7455,
    address: 'Al Ain, ~90 min drive from Abu Dhabi city', image: null,
    en: {
      name: 'Al Ain Oasis',
      hours: 'Daily approx. 9:00 AM–7:30 PM', price: 'Free entry', climateNote: 'Fully outdoor, shaded', bestTime: 'Morning',
      description: 'A UNESCO World Heritage lush palm oasis with over 147,000 date palms irrigated by a centuries-old falaj system.',
      history: 'Part of the UNESCO-listed "Cultural Sites of Al Ain," the oasis has been continuously farmed for millennia.',
      funFacts: ['The falaj irrigation network dates back over 3,000 years.', "Al Ain is Sheikh Zayed's birthplace."]
    },
    pt: {
      name: 'Oásis de Al Ain',
      hours: 'Diariamente, aprox. 9h–19h30', price: 'Entrada gratuita', climateNote: 'Totalmente ao ar livre, com sombra', bestTime: 'Manhã',
      description: 'Um exuberante oásis de palmeiras, Patrimônio Mundial da UNESCO, com mais de 147.000 tamareiras irrigadas por um sistema de falaj centenário.',
      history: 'Parte dos "Sítios Culturais de Al Ain" listados pela UNESCO, o oásis é cultivado continuamente há milênios.',
      funFacts: ['A rede de irrigação falaj tem mais de 3.000 anos.', 'Al Ain é o local de nascimento de Sheikh Zayed.']
    }
  },
  {
    id: 'al-jahili-fort', category: 'heritage', icon: 'fort', lat: 24.2308, lng: 55.7519,
    address: 'Al Ain', image: null,
    en: {
      name: 'Al Jahili Fort',
      hours: 'Sat–Thu approx. 9:00 AM–5:00 PM', price: 'Free entry', climateNote: 'Indoor & outdoor', bestTime: 'Late afternoon',
      description: "A 19th-century fort built to protect Al Ain's oases, now home to a permanent exhibit on explorer Wilfred Thesiger.",
      history: 'Built in 1891 under Sheikh Zayed bin Khalifa Al Nahyan, it\'s one of the largest and best-preserved historic forts in the UAE.',
      funFacts: ["Houses photographs from Wilfred Thesiger's Empty Quarter crossings."]
    },
    pt: {
      name: 'Forte Al Jahili',
      hours: 'Sáb–qui, aprox. 9h–17h', price: 'Entrada gratuita', climateNote: 'Ambientes internos e externos', bestTime: 'Final da tarde',
      description: 'Um forte do século XIX construído para proteger os oásis de Al Ain, hoje com uma exposição permanente sobre o explorador Wilfred Thesiger.',
      history: 'Construído em 1891 sob Sheikh Zayed bin Khalifa Al Nahyan, é um dos maiores e mais bem preservados fortes históricos dos Emirados.',
      funFacts: ['Abriga fotografias das travessias de Wilfred Thesiger pelo Quarto Vazio (Empty Quarter).']
    }
  },

  // ---------- Art & Museums ----------
  {
    id: 'louvre-abu-dhabi', category: 'art-museums', icon: 'museum', lat: 24.5336, lng: 54.3985,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    en: {
      name: 'Louvre Abu Dhabi',
      hours: 'Tue–Sun 10:00 AM–8:30 PM (galleries close earlier weekdays) · Closed Mon', price: 'From AED 63', climateNote: 'Fully indoor / shaded', bestTime: 'First hour after opening',
      description: 'A universal museum under a vast perforated dome, displaying art and artifacts spanning human history from its own collection and loans from French museums.',
      history: 'Opened in 2017 as part of a landmark cultural agreement between Abu Dhabi and France, designed by architect Jean Nouvel as a "museum of civilizations" bridging East and West.',
      funFacts: ['The dome is made of over 8,000 star-shaped patterns layered to create a "rain of light" effect below.', "Despite its size, the dome's structure is engineered to weigh roughly the same as the Eiffel Tower."]
    },
    pt: {
      name: 'Louvre Abu Dhabi',
      hours: 'Ter–dom 10h–20h30 (galerias fecham mais cedo em dias de semana) · Fechado às segundas', price: 'A partir de AED 63', climateNote: 'Totalmente coberto / com sombra', bestTime: 'Primeira hora após a abertura',
      description: 'Um museu universal sob uma vasta cúpula perfurada, exibindo arte e artefatos de toda a história humana, do próprio acervo e de empréstimos de museus franceses.',
      history: 'Inaugurado em 2017 como parte de um acordo cultural histórico entre Abu Dhabi e a França, projetado pelo arquiteto Jean Nouvel como um "museu das civilizações" conectando Oriente e Ocidente.',
      funFacts: ['A cúpula é feita de mais de 8.000 padrões em forma de estrela sobrepostos, criando o efeito de "chuva de luz" por baixo.', 'Apesar do tamanho, a estrutura da cúpula foi projetada para pesar aproximadamente o mesmo que a Torre Eiffel.']
    }
  },
  {
    id: 'manarat-al-saadiyat', category: 'art-museums', icon: 'palette', lat: 24.5389, lng: 54.4067,
    address: 'Saadiyat Cultural District', image: null,
    en: {
      name: 'Manarat Al Saadiyat',
      hours: 'Daily approx. 9:00 AM–8:00 PM', price: 'Free entry (most exhibits)', climateNote: 'Fully indoor', bestTime: 'Any time',
      description: 'An arts and culture space hosting rotating exhibitions and events, serving as an introduction to the wider Saadiyat Cultural District.',
      history: 'Opened in 2009 as one of the first cultural venues on Saadiyat Island, ahead of the larger museums that followed.',
      funFacts: ['Often previews artworks and models for museums still under development on the island.']
    },
    pt: {
      name: 'Manarat Al Saadiyat',
      hours: 'Diariamente, aprox. 9h–20h', price: 'Entrada gratuita (maioria das exposições)', climateNote: 'Totalmente coberto', bestTime: 'Qualquer horário',
      description: 'Um espaço de arte e cultura com exposições e eventos rotativos, servindo como introdução ao Distrito Cultural de Saadiyat.',
      history: 'Inaugurado em 2009 como um dos primeiros espaços culturais da Ilha de Saadiyat, antes dos grandes museus que vieram depois.',
      funFacts: ['Frequentemente exibe obras e maquetes de museus ainda em construção na ilha.']
    }
  },
  {
    id: 'natural-history-museum', category: 'art-museums', icon: 'science', lat: 24.5310, lng: 54.4000,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    en: {
      name: 'Natural History Museum Abu Dhabi',
      hours: 'Recently opened — check official site', price: 'Check official site', climateNote: 'Fully indoor', bestTime: 'Mid-morning',
      description: "A museum dedicated to Earth's natural history, featuring dinosaur skeletons, meteorites, and interactive science exhibits.",
      history: "Part of the wider Saadiyat Cultural District expansion, joining the Louvre and Zayed National Museum as a cornerstone of Abu Dhabi's museum quarter.",
      funFacts: ['Displays include one of the more complete dinosaur skeletons on public view in the region.']
    },
    pt: {
      name: 'Museu de História Natural de Abu Dhabi',
      hours: 'Recém-inaugurado — confira o site oficial', price: 'Confira o site oficial', climateNote: 'Totalmente coberto', bestTime: 'Meio da manhã',
      description: 'Um museu dedicado à história natural da Terra, com esqueletos de dinossauros, meteoritos e exposições científicas interativas.',
      history: 'Parte da expansão do Distrito Cultural de Saadiyat, unindo-se ao Louvre e ao Museu Nacional Zayed como um dos pilares do bairro de museus de Abu Dhabi.',
      funFacts: ['O acervo inclui um dos esqueletos de dinossauro mais completos em exposição na região.']
    }
  },
  {
    id: 'teamlab-phenomena', category: 'art-museums', icon: 'auto_awesome', lat: 24.5325, lng: 54.4023,
    address: 'Saadiyat Cultural District', image: null,
    en: {
      name: 'teamLab Phenomena Abu Dhabi',
      hours: 'Ticketed, timed entry — check official site', price: 'Check official site', climateNote: 'Fully indoor', bestTime: 'Any time',
      description: 'An immersive digital art museum by Japanese collective teamLab, with large-scale installations driven by light, water, and air.',
      history: "Part of Abu Dhabi's push to build out Saadiyat Island as a global cultural hub alongside the Louvre and Zayed National Museum.",
      funFacts: ['Installations respond in real time to physical forces rather than a fixed animation loop.']
    },
    pt: {
      name: 'teamLab Phenomena Abu Dhabi',
      hours: 'Ingresso com horário marcado — confira o site oficial', price: 'Confira o site oficial', climateNote: 'Totalmente coberto', bestTime: 'Qualquer horário',
      description: 'Um museu de arte digital imersivo do coletivo japonês teamLab, com instalações em grande escala movidas por luz, água e ar.',
      history: 'Parte do esforço de Abu Dhabi para transformar a Ilha de Saadiyat em um polo cultural global, ao lado do Louvre e do Museu Nacional Zayed.',
      funFacts: ['As instalações reagem em tempo real a forças físicas, em vez de seguir uma animação fixa.']
    }
  },

  // ---------- Theme Parks & Entertainment ----------
  {
    id: 'ferrari-world', category: 'theme-parks', icon: 'sports_motorsports', lat: 24.4832, lng: 54.6072,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'Ferrari World Yas Island',
      hours: 'Varies seasonally, generally ~12:00–8:00 PM — confirm before visiting', price: 'From AED 345', climateNote: 'Mostly indoor', bestTime: 'Mid-afternoon',
      description: "The world's largest indoor theme park, themed entirely around Ferrari, home to Formula Rossa — the world's fastest roller coaster.",
      history: "Opened in 2010 under a massive red roof shaped like a Ferrari GT racing spoiler, built as a centerpiece of Yas Island's entertainment district.",
      funFacts: ['Formula Rossa reaches around 240 km/h (149 mph) — riders wear goggles to protect their eyes.', 'The roof is the largest space-frame structure of its kind in the world.']
    },
    pt: {
      name: 'Ferrari World Yas Island',
      hours: 'Varia por estação, geralmente ~12h–20h — confirme antes de ir', price: 'A partir de AED 345', climateNote: 'Majoritariamente coberto', bestTime: 'Meio da tarde',
      description: 'O maior parque temático coberto do mundo, totalmente dedicado à Ferrari, lar da Formula Rossa — a montanha-russa mais rápida do mundo.',
      history: 'Inaugurado em 2010 sob um enorme teto vermelho em formato de aerofólio de carro de corrida da Ferrari, construído como peça central do distrito de entretenimento da Yas Island.',
      funFacts: ['A Formula Rossa atinge cerca de 240 km/h — os passageiros usam óculos de proteção.', 'O teto é a maior estrutura espacial (space-frame) desse tipo no mundo.']
    }
  },
  {
    id: 'yas-waterworld', category: 'theme-parks', icon: 'pool', lat: 24.4881, lng: 54.5997,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'Yas Waterworld',
      hours: 'Typically 10:00 AM–7:00/8:00 PM depending on season', price: 'From AED 295', climateNote: 'Outdoor waterpark', bestTime: 'Morning, before it gets crowded',
      description: 'An Emirati pearl-diving-themed water park with over 40 rides, slides, and attractions across 15 hectares.',
      history: 'Opened in 2013, the park\'s storyline — "The Legend of the Lost Pearl" — was custom-developed to weave Emirati culture into the ride experience.',
      funFacts: ["Home to Dawwama, one of the world's largest hydromagnetic water coasters.", 'It hosts the World Flowboarding Championships.']
    },
    pt: {
      name: 'Yas Waterworld',
      hours: 'Normalmente 10h–19h/20h, dependendo da estação', price: 'A partir de AED 295', climateNote: 'Parque aquático ao ar livre', bestTime: 'Manhã, antes de ficar cheio',
      description: 'Um parque aquático com tema de mergulho em busca de pérolas emirati, com mais de 40 brinquedos, toboáguas e atrações em 15 hectares.',
      history: 'Inaugurado em 2013, o enredo do parque — "A Lenda da Pérola Perdida" — foi criado especialmente para incorporar a cultura emirati à experiência dos brinquedos.',
      funFacts: ['Lar da Dawwama, uma das maiores montanhas-russas aquáticas hidromagnéticas do mundo.', 'Sedia o Campeonato Mundial de Flowboarding.']
    }
  },
  {
    id: 'warner-bros-world', category: 'theme-parks', icon: 'attractions', lat: 24.4909, lng: 54.6067,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'Warner Bros. World Abu Dhabi',
      hours: 'Typically 11:00 AM–8:00 PM — confirm before visiting', price: 'From AED 345', climateNote: 'Fully indoor', bestTime: 'Any time — fully air-conditioned',
      description: "The world's first Warner Bros.-branded indoor theme park, with six immersive lands themed around DC, Looney Tunes, and Hanna-Barbera characters.",
      history: 'Opened in 2018, built fully indoor and climate-controlled to operate comfortably year-round despite the desert heat.',
      funFacts: ['Fully air-conditioned throughout, even in peak summer.']
    },
    pt: {
      name: 'Warner Bros. World Abu Dhabi',
      hours: 'Normalmente 11h–20h — confirme antes de ir', price: 'A partir de AED 345', climateNote: 'Totalmente coberto', bestTime: 'Qualquer horário — totalmente climatizado',
      description: 'O primeiro parque temático coberto da marca Warner Bros. do mundo, com seis áreas imersivas com temas de DC, Looney Tunes e Hanna-Barbera.',
      history: 'Inaugurado em 2018, construído totalmente coberto e climatizado para funcionar confortavelmente o ano todo, apesar do calor do deserto.',
      funFacts: ['Totalmente climatizado, mesmo no auge do verão.']
    }
  },
  {
    id: 'seaworld-abu-dhabi', category: 'theme-parks', icon: 'water', lat: 24.4767, lng: 54.5978,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'SeaWorld Yas Island, Abu Dhabi',
      hours: 'Check official site — newer attraction', price: 'Check official site', climateNote: 'Mostly indoor', bestTime: 'Mid-morning',
      description: 'The first SeaWorld outside the US, focused on marine conservation and education, with immersive habitats spanning multiple ocean realms — no orca shows.',
      history: 'Opened in 2023 without captive whale/dolphin performance shows, aligning with modern animal-welfare standards.',
      funFacts: ['Houses a dedicated marine rescue and rehabilitation center.']
    },
    pt: {
      name: 'SeaWorld Yas Island, Abu Dhabi',
      hours: 'Confira o site oficial — atração recente', price: 'Confira o site oficial', climateNote: 'Majoritariamente coberto', bestTime: 'Meio da manhã',
      description: 'O primeiro SeaWorld fora dos EUA, focado em conservação marinha e educação, com habitats imersivos de vários ecossistemas oceânicos — sem shows com orcas.',
      history: 'Inaugurado em 2023 sem shows com baleias/golfinhos em cativeiro, alinhado a padrões modernos de bem-estar animal.',
      funFacts: ['Abriga um centro dedicado a resgate e reabilitação de vida marinha.']
    }
  },
  {
    id: 'yas-marina-circuit', category: 'theme-parks', icon: 'flag', lat: 24.4672, lng: 54.6031,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'Yas Marina Circuit',
      hours: 'Track tours/go-karting most days; F1 Grand Prix in Nov/Dec', price: 'Varies by activity', climateNote: 'Outdoor', bestTime: 'Evening',
      description: 'A Formula 1 racetrack hosting the Abu Dhabi Grand Prix, also open for track tours, go-karting, and driving experiences year-round.',
      history: 'Opened in 2009, the first F1 circuit built on a man-made island, with a dramatic finish beneath the illuminated W Abu Dhabi hotel.',
      funFacts: ['The Grand Prix finishes at dusk, transitioning from daylight to floodlights mid-race.']
    },
    pt: {
      name: 'Circuito Yas Marina',
      hours: 'Tours na pista/kart na maioria dos dias; GP de F1 em nov/dez', price: 'Varia conforme a atividade', climateNote: 'Ao ar livre', bestTime: 'Noite',
      description: 'Um autódromo de Fórmula 1 que sedia o Grande Prêmio de Abu Dhabi, também aberto para tours na pista, kart e experiências de pilotagem o ano todo.',
      history: 'Inaugurado em 2009, o primeiro circuito de F1 construído em uma ilha artificial, com uma chegada dramática sob o hotel iluminado W Abu Dhabi.',
      funFacts: ['O Grande Prêmio termina ao anoitecer, passando da luz do dia para os refletores no meio da corrida.']
    }
  },
  {
    id: 'clymb', category: 'theme-parks', icon: 'paragliding', lat: 24.4864, lng: 54.6014,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'CLYMB Abu Dhabi',
      hours: 'Booking-based sessions — check official site', price: 'Varies by activity', climateNote: 'Fully indoor', bestTime: 'Any time',
      description: "Home to the world's largest indoor skydiving wind tunnel and a large indoor climbing wall.",
      history: "Opened in 2018 as part of Yas Island's adventure-sports offerings.",
      funFacts: ['Lets first-timers experience skydiving sensations without ever leaving the ground.']
    },
    pt: {
      name: 'CLYMB Abu Dhabi',
      hours: 'Sessões com reserva — confira o site oficial', price: 'Varia conforme a atividade', climateNote: 'Totalmente coberto', bestTime: 'Qualquer horário',
      description: 'Lar do maior túnel de vento para skydive indoor do mundo e de uma grande parede de escalada coberta.',
      history: 'Inaugurado em 2018 como parte das opções de esportes radicais da Yas Island.',
      funFacts: ['Permite que iniciantes sintam a sensação de um salto de paraquedas sem sair do chão.']
    }
  },

  // ---------- Nature & Outdoors ----------
  {
    id: 'corniche-beach', category: 'nature', icon: 'beach_access', lat: 24.4764, lng: 54.3300,
    address: 'Corniche Rd, Abu Dhabi', image: null,
    en: {
      name: 'Corniche Beach & Promenade',
      hours: 'Beach ~6:00 AM–10:00 PM · Promenade 24/7', price: 'Free (small fee at some beach sections)', climateNote: 'Fully outdoor', bestTime: 'Sunset',
      description: "An 8km waterfront promenade and beach along the Arabian Gulf, popular for walking, cycling, and sunset views.",
      history: "Developed over decades as part of Abu Dhabi's urban waterfront, now one of the most-used public spaces in the city.",
      funFacts: ['Blue Flag certified beach sections meet international cleanliness and safety standards.']
    },
    pt: {
      name: 'Praia e Calçadão da Corniche',
      hours: 'Praia ~6h–22h · Calçadão 24h', price: 'Gratuito (pequena taxa em alguns trechos da praia)', climateNote: 'Totalmente ao ar livre', bestTime: 'Pôr do sol',
      description: 'Um calçadão à beira-mar de 8 km e praia ao longo do Golfo Pérsico, popular para caminhadas, ciclismo e vistas do pôr do sol.',
      history: 'Desenvolvida ao longo de décadas como parte da orla urbana de Abu Dhabi, hoje um dos espaços públicos mais usados da cidade.',
      funFacts: ['Trechos da praia com certificação Bandeira Azul atendem a padrões internacionais de limpeza e segurança.']
    }
  },
  {
    id: 'jubail-mangrove-park', category: 'nature', icon: 'forest', lat: 24.5252, lng: 54.4232,
    address: 'Jubail Island, Abu Dhabi', image: null,
    en: {
      name: 'Jubail Mangrove Park',
      hours: 'Daily approx. 8:00 AM–6:00/7:00 PM', price: 'Small entry fee', climateNote: 'Fully outdoor', bestTime: 'Early morning',
      description: 'A boardwalk trail through natural mangrove forest with an observation tower, popular for walking and kayaking tours.',
      history: "Opened to the public in 2020 to showcase and protect Abu Dhabi's natural mangrove ecosystem.",
      funFacts: ['Mangroves here are a nursery habitat for fish, crabs, and migratory birds.']
    },
    pt: {
      name: 'Parque de Mangue de Jubail',
      hours: 'Diariamente, aprox. 8h–18h/19h', price: 'Pequena taxa de entrada', climateNote: 'Totalmente ao ar livre', bestTime: 'Cedo pela manhã',
      description: 'Uma trilha elevada por uma floresta de mangue natural, com torre de observação, popular para caminhadas e passeios de caiaque.',
      history: 'Aberto ao público em 2020 para mostrar e proteger o ecossistema natural de mangue de Abu Dhabi.',
      funFacts: ['Os mangues aqui servem de berçário para peixes, caranguejos e aves migratórias.']
    }
  },
  {
    id: 'eastern-mangroves', category: 'nature', icon: 'kayaking', lat: 24.4692, lng: 54.3868,
    address: 'Between Al Bateen and Al Mushrif, Abu Dhabi', image: null,
    en: {
      name: 'Eastern Mangrove National Park',
      hours: 'Kayak/paddleboard tours daily, book ahead', price: 'Varies by tour', climateNote: 'Fully outdoor', bestTime: 'Early morning',
      description: 'A protected mangrove lagoon near the city center, best explored by kayak or paddleboard, with abundant birdlife.',
      history: "Protected as a national park to preserve one of Abu Dhabi's largest mangrove ecosystems close to the urban core.",
      funFacts: ['Spot herons, seasonal flamingos, and crabs while paddling through the channels.']
    },
    pt: {
      name: 'Parque Nacional dos Mangues do Leste',
      hours: 'Passeios de caiaque/stand-up paddle diariamente, reserve com antecedência', price: 'Varia conforme o passeio', climateNote: 'Totalmente ao ar livre', bestTime: 'Cedo pela manhã',
      description: 'Uma lagoa de mangue protegida perto do centro da cidade, melhor explorada de caiaque ou stand-up paddle, com rica vida de aves.',
      history: 'Protegido como parque nacional para preservar um dos maiores ecossistemas de mangue de Abu Dhabi, perto do centro urbano.',
      funFacts: ['Observe garças, flamingos sazonais e caranguejos enquanto navega pelos canais.']
    }
  },
  {
    id: 'hudayriyat-island', category: 'nature', icon: 'surfing', lat: 24.4342, lng: 54.4364,
    address: 'Hudayriyat Island, Abu Dhabi', image: null,
    en: {
      name: 'Hudayriyat Island',
      hours: 'Outdoor areas 24/7; specific venues have set hours', price: 'Free (activities extra)', climateNote: 'Fully outdoor', bestTime: 'Morning or evening',
      description: "A large recreational island with cycling and running tracks, beaches, and Surf Abu Dhabi — one of the world's largest wave pools for surfing.",
      history: "Developed as part of Abu Dhabi's push into outdoor recreation and sport tourism.",
      funFacts: ['The island has over 30km of cycling trails.']
    },
    pt: {
      name: 'Ilha de Hudayriyat',
      hours: 'Áreas externas 24h; locais específicos têm horários próprios', price: 'Gratuito (atividades à parte)', climateNote: 'Totalmente ao ar livre', bestTime: 'Manhã ou fim de tarde',
      description: 'Uma grande ilha de lazer com pistas de ciclismo e corrida, praias e o Surf Abu Dhabi — uma das maiores piscinas de ondas para surfe do mundo.',
      history: 'Desenvolvida como parte do investimento de Abu Dhabi em recreação ao ar livre e turismo esportivo.',
      funFacts: ['A ilha tem mais de 30 km de trilhas para ciclismo.']
    }
  },
  {
    id: 'al-wathba-wetland', category: 'nature', icon: 'flutter_dash', lat: 24.2528, lng: 54.6072,
    address: 'Al Wathba, ~40 min from central Abu Dhabi', image: null,
    en: {
      name: 'Al Wathba Wetland Reserve',
      hours: 'Sat–Thu approx. 9:00 AM–5:00 PM (verify seasonal closures)', price: 'Small entry fee', climateNote: 'Fully outdoor', bestTime: 'Cooler months, early morning',
      description: 'A protected wetland known for large flocks of flamingos and other migratory birds, with walking trails and hides.',
      history: 'Established to preserve wetland habitat and support the flamingo population that gathers there seasonally.',
      funFacts: ['One of the few places in the UAE to see wild flamingos up close.']
    },
    pt: {
      name: 'Reserva de Zonas Úmidas de Al Wathba',
      hours: 'Sáb–qui, aprox. 9h–17h (confirme fechamentos sazonais)', price: 'Pequena taxa de entrada', climateNote: 'Totalmente ao ar livre', bestTime: 'Meses mais frescos, cedo pela manhã',
      description: 'Uma área úmida protegida conhecida por grandes bandos de flamingos e outras aves migratórias, com trilhas e esconderijos de observação.',
      history: 'Criada para preservar o habitat de zona úmida e apoiar a população de flamingos que se reúne ali sazonalmente.',
      funFacts: ['Um dos poucos lugares nos Emirados para ver flamingos selvagens de perto.']
    }
  },
  {
    id: 'umm-al-emarat-park', category: 'nature', icon: 'park', lat: 24.4489, lng: 54.3722,
    address: 'Al Karama St, Abu Dhabi', image: null,
    en: {
      name: 'Umm Al Emarat Park',
      hours: 'Daily approx. 8:00 AM–10:00 PM', price: 'Small entry fee', climateNote: 'Fully outdoor', bestTime: 'Late afternoon',
      description: 'A large botanical park in the heart of the city with a mini zoo/petting area, walking trails, and a butterfly garden.',
      history: 'Originally opened in the 1980s, redeveloped and reopened as a modern eco-park in 2015.',
      funFacts: ['Its insect and reptile house is popular with kids.']
    },
    pt: {
      name: 'Parque Umm Al Emarat',
      hours: 'Diariamente, aprox. 8h–22h', price: 'Pequena taxa de entrada', climateNote: 'Totalmente ao ar livre', bestTime: 'Final da tarde',
      description: 'Um grande parque botânico no coração da cidade, com mini zoológico/área de contato com animais, trilhas e jardim de borboletas.',
      history: 'Inaugurado originalmente nos anos 1980, reformado e reaberto como um eco-parque moderno em 2015.',
      funFacts: ['Sua casa de insetos e répteis é muito popular entre as crianças.']
    }
  },
  {
    id: 'sir-bani-yas', category: 'nature', icon: 'pets', lat: 24.3167, lng: 52.5833,
    address: 'Western Region, ~2.5–3 hr drive + ferry', image: null,
    en: {
      name: 'Sir Bani Yas Island',
      hours: 'Best as an overnight trip; safaris run on set schedules', price: 'Varies by resort/tour', climateNote: 'Fully outdoor', bestTime: 'Cooler months',
      description: 'An island wildlife reserve with free-roaming Arabian wildlife — giraffes, cheetahs, oryx — set up as a conservation and eco-tourism project.',
      history: 'Once a retreat of Sheikh Zayed, turned into the Arabian Wildlife Park to protect endangered native and African species.',
      funFacts: ['One of the largest wildlife reserves in the Middle East.', 'Also home to the remains of an ancient Christian monastery.']
    },
    pt: {
      name: 'Ilha Sir Bani Yas',
      hours: 'Melhor como viagem com pernoite; safáris seguem horários fixos', price: 'Varia por resort/passeio', climateNote: 'Totalmente ao ar livre', bestTime: 'Meses mais frescos',
      description: 'Uma reserva de vida selvagem em uma ilha, com animais árabes soltos — girafas, guepardos, orix — criada como projeto de conservação e ecoturismo.',
      history: 'Antigo retiro de Sheikh Zayed, transformado no Parque de Vida Selvagem Arábica para proteger espécies nativas e africanas ameaçadas.',
      funFacts: ['Uma das maiores reservas de vida selvagem do Oriente Médio.', 'Também abriga as ruínas de um antigo mosteiro cristão.']
    }
  },

  // ---------- Modern Landmarks & Shopping ----------
  {
    id: 'etihad-towers', category: 'landmarks-shopping', icon: 'apartment', lat: 24.4658, lng: 54.3234,
    address: 'Corniche Rd West, Abu Dhabi', image: null,
    en: {
      name: 'Etihad Towers – Observation Deck at 300',
      hours: 'Daily approx. 10:00 AM–8:30 PM (confirm current times)', price: 'From AED 95', climateNote: 'Fully indoor', bestTime: 'Sunset',
      description: 'A cluster of five landmark towers with an observation deck on the 74th floor offering 360-degree views over the city and Gulf.',
      history: "Completed in 2011, quickly becoming one of Abu Dhabi's most recognizable skyline features.",
      funFacts: ['Named for its 300-meter height.']
    },
    pt: {
      name: 'Etihad Towers – Mirante 300',
      hours: 'Diariamente, aprox. 10h–20h30 (confirme horários atuais)', price: 'A partir de AED 95', climateNote: 'Totalmente coberto', bestTime: 'Pôr do sol',
      description: 'Um conjunto de cinco torres icônicas com um mirante no 74º andar, com vista de 360° sobre a cidade e o golfo.',
      history: 'Concluído em 2011, rapidamente se tornou um dos marcos mais reconhecíveis do horizonte de Abu Dhabi.',
      funFacts: ['O nome vem de sua altura de 300 metros.']
    }
  },
  {
    id: 'emirates-palace', category: 'landmarks-shopping', icon: 'hotel', lat: 24.4616, lng: 54.3178,
    address: 'West Corniche Rd, Abu Dhabi', image: "images/emirates-palace.jpg",
    source: 'https://unsplash.com/photos/brown-mansion-with-lights-during-nighttime-p0MGf8YvGRg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    en: {
      name: 'Emirates Palace (Mandarin Oriental)',
      hours: 'Public areas generally accessible during the day', price: 'Free to view (dining varies)', climateNote: 'Fully indoor', bestTime: 'Evening',
      description: 'An opulent palace-hotel with its own private beach, gold-domed architecture, and lavish interiors.',
      history: 'Opened in 2005 to host government functions and dignitaries as well as operate as a five-star hotel.',
      funFacts: ['Used around 1,002 chandeliers and large quantities of gold leaf in its construction.', 'Has its own 1.3km private beach.']
    },
    pt: {
      name: 'Emirates Palace (Mandarin Oriental)',
      hours: 'Áreas públicas geralmente acessíveis durante o dia', price: 'Visita gratuita (refeições à parte)', climateNote: 'Totalmente coberto', bestTime: 'Noite',
      description: 'Um hotel-palácio suntuoso com praia privativa, cúpulas douradas e interiores luxuosos.',
      history: 'Inaugurado em 2005 para sediar eventos governamentais e receber dignitários, além de operar como hotel cinco estrelas.',
      funFacts: ['Usou cerca de 1.002 lustres e grandes quantidades de folha de ouro em sua construção.', 'Tem sua própria praia privativa de 1,3 km.']
    }
  },
  {
    id: 'marina-mall', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4759, lng: 54.3211,
    address: 'Breakwater, Abu Dhabi', image: null,
    en: {
      name: 'Marina Mall',
      hours: 'Daily approx. 10:00 AM–10:00 PM', price: 'Free entry', climateNote: 'Fully indoor', bestTime: 'Afternoon',
      description: 'A five-level shopping mall with fashion, dining, and entertainment, next to the Marina Mall Tower.',
      history: "One of Abu Dhabi's earlier major malls, still a popular family shopping and leisure destination.",
      funFacts: ['Sits adjacent to a tower with a rotating restaurant offering skyline views.']
    },
    pt: {
      name: 'Marina Mall',
      hours: 'Diariamente, aprox. 10h–22h', price: 'Entrada gratuita', climateNote: 'Totalmente coberto', bestTime: 'Tarde',
      description: 'Um shopping de cinco andares com moda, gastronomia e entretenimento, ao lado da Marina Mall Tower.',
      history: 'Um dos primeiros grandes shoppings de Abu Dhabi, ainda um destino popular de compras e lazer em família.',
      funFacts: ['Fica ao lado de uma torre com restaurante giratório e vista da cidade.']
    }
  },
  {
    id: 'yas-mall', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4670, lng: 54.6042,
    address: 'Yas Island, Abu Dhabi', image: null,
    en: {
      name: 'Yas Mall',
      hours: 'Daily approx. 10:00 AM–10:00 PM', price: 'Free entry', climateNote: 'Fully indoor', bestTime: 'Afternoon',
      description: 'One of the largest malls in the UAE, directly connected to Ferrari World.',
      history: "Opened in 2014 as the retail anchor of Yas Island's entertainment district.",
      funFacts: ['Directly linked via walkway to Ferrari World Yas Island.']
    },
    pt: {
      name: 'Yas Mall',
      hours: 'Diariamente, aprox. 10h–22h', price: 'Entrada gratuita', climateNote: 'Totalmente coberto', bestTime: 'Tarde',
      description: 'Um dos maiores shoppings dos Emirados, ligado diretamente ao Ferrari World.',
      history: 'Inaugurado em 2014 como âncora de varejo do distrito de entretenimento da Yas Island.',
      funFacts: ['Ligado diretamente por uma passarela ao Ferrari World Yas Island.']
    }
  },
  {
    id: 'the-galleria', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4986, lng: 54.3831,
    address: 'Al Maryah Island, Abu Dhabi', image: null,
    en: {
      name: 'The Galleria Al Maryah Island',
      hours: 'Daily approx. 10:00 AM–10:00 PM', price: 'Free entry', climateNote: 'Fully indoor', bestTime: 'Evening',
      description: 'An upscale waterfront shopping mall with luxury brands, dining, and views over the Maryah waterfront promenade.',
      history: "Developed as part of Al Maryah Island's transformation into Abu Dhabi's financial and luxury retail district.",
      funFacts: ['Set along a landscaped waterfront promenade popular for evening walks.']
    },
    pt: {
      name: 'The Galleria Al Maryah Island',
      hours: 'Diariamente, aprox. 10h–22h', price: 'Entrada gratuita', climateNote: 'Totalmente coberto', bestTime: 'Noite',
      description: 'Um shopping sofisticado à beira-mar, com marcas de luxo, gastronomia e vista para o calçadão de Al Maryah.',
      history: 'Desenvolvido como parte da transformação da Ilha Al Maryah no distrito financeiro e de varejo de luxo de Abu Dhabi.',
      funFacts: ['Fica junto a um calçadão paisagístico à beira-mar, popular para caminhadas noturnas.']
    }
  },

  // ---------- Adventure & Desert ----------
  {
    id: 'desert-safari', category: 'adventure', icon: 'landscape', lat: 23.1333, lng: 53.7833,
    address: 'Liwa / Empty Quarter, ~2.5 hr drive from Abu Dhabi city', image: null,
    en: {
      name: 'Desert Safari & Dune Bashing (Liwa)',
      hours: 'Tours typically run afternoon into sunset', price: 'Varies by operator', climateNote: 'Fully outdoor', bestTime: 'Late afternoon',
      description: "4x4 dune-bashing, camel rides, sandboarding, and a Bedouin camp dinner amid some of the world's tallest sand dunes.",
      history: "The Liwa region borders the Rub' al Khali (Empty Quarter), the largest continuous sand desert in the world, historically home to Bedouin tribes including the ancestors of the Al Nahyan family.",
      funFacts: ["Liwa's dunes can rise over 300 meters, among the tallest in the world."]
    },
    pt: {
      name: 'Safári no Deserto e Dune Bashing (Liwa)',
      hours: 'Passeios geralmente ocorrem da tarde até o pôr do sol', price: 'Varia por operadora', climateNote: 'Totalmente ao ar livre', bestTime: 'Final da tarde',
      description: 'Aventura em 4x4 nas dunas, passeios de camelo, sandboard e jantar em acampamento beduíno em meio a algumas das dunas mais altas do mundo.',
      history: 'A região de Liwa faz fronteira com o Rub\' al Khali (Quarto Vazio), o maior deserto de areia contínuo do mundo, historicamente lar de tribos beduínas, incluindo os ancestrais da família Al Nahyan.',
      funFacts: ['As dunas de Liwa podem ultrapassar 300 metros, entre as mais altas do mundo.']
    }
  },
  {
    id: 'surf-abu-dhabi', category: 'adventure', icon: 'surfing', lat: 24.4310, lng: 54.4290,
    address: 'Hudayriyat Island, Abu Dhabi', image: null,
    en: {
      name: 'Surf Abu Dhabi',
      hours: 'Session-based booking — check official site', price: 'Varies by session', climateNote: 'Fully outdoor', bestTime: 'Morning',
      description: 'A record-scale man-made wave pool generating consistent, high-quality surfable waves in the middle of the desert.',
      history: "Opened in 2024, recognized on Time's World's Greatest Places list for offering a genuinely novel outdoor experience.",
      funFacts: ['Designed to produce dozens of waves per hour, far more consistently than the ocean.']
    },
    pt: {
      name: 'Surf Abu Dhabi',
      hours: 'Reserva por sessão — confira o site oficial', price: 'Varia por sessão', climateNote: 'Totalmente ao ar livre', bestTime: 'Manhã',
      description: 'Uma piscina de ondas artificial em escala recorde, gerando ondas consistentes e de alta qualidade para surfe em pleno deserto.',
      history: 'Inaugurada em 2024, reconhecida na lista "World\'s Greatest Places" da revista Time por oferecer uma experiência ao ar livre genuinamente inovadora.',
      funFacts: ['Projetada para gerar dezenas de ondas por hora, de forma muito mais consistente que o oceano.']
    }
  },
  {
    id: 'masdar-city', category: 'adventure', icon: 'eco', lat: 24.4262, lng: 54.6152,
    address: 'Masdar City, near Abu Dhabi International Airport', image: null,
    en: {
      name: 'Masdar City',
      hours: 'Outdoor areas 24/7; visitor center hours vary', price: 'Free to explore', climateNote: 'Fully outdoor', bestTime: 'Morning',
      description: "One of the world's most ambitious planned sustainable-city projects, with car-free streets, solar power, and passive cooling architecture.",
      history: 'Launched in 2006 as a flagship clean-energy and sustainable urban-design initiative for the UAE.',
      funFacts: ['One of the first neighborhoods in the world built around driverless personal transit pods.']
    },
    pt: {
      name: 'Masdar City',
      hours: 'Áreas externas 24h; horário do centro de visitantes varia', price: 'Livre para explorar', climateNote: 'Totalmente ao ar livre', bestTime: 'Manhã',
      description: 'Um dos projetos de cidade sustentável mais ambiciosos do mundo, com ruas sem carros, energia solar e arquitetura de resfriamento passivo.',
      history: 'Lançada em 2006 como iniciativa emblemática de energia limpa e design urbano sustentável dos Emirados.',
      funFacts: ['Um dos primeiros bairros do mundo construído em torno de cápsulas de transporte pessoal autônomas.']
    }
  },
];

const ATTRACTIONS_BY_ID = Object.fromEntries(ATTRACTIONS.map(a => [a.id, a]));

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
