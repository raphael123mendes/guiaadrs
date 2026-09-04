// UAE Explorer by Stein — attraction dataset (bilingual: EN + PT)
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

const ATTRACTIONS = [
  // ---------- Culture & Heritage ----------
  {
    id: 'grand-mosque', category: 'heritage', icon: 'mosque', lat: 24.4128334, lng: 54.4749754,
    address: 'Sheikh Rashid Bin Saeed St, Abu Dhabi', image: "images/grand-mosque.jpg", 
    source: 'https://unsplash.com/photos/brown-mansion-with-lights-during-nighttime-p0MGf8YvGRg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    priceTier: 'free', setting: 'mixed',
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
    id: 'qasr-al-watan', category: 'heritage', icon: 'castle', lat: 24.4594306, lng: 54.3076336,
    address: 'Ras Al Akhdar, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'qasr-al-hosn', category: 'heritage', icon: 'fort', lat: 24.482237, lng: 54.354723,
    address: 'Corniche Rd, near the Cultural Foundation, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'mixed',
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
    id: 'heritage-village', category: 'heritage', icon: 'holiday_village', lat: 24.4766604, lng: 54.3309894,
    address: 'Al Marina St, Breakwater, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'outdoor',
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
    id: 'founders-memorial', category: 'heritage', icon: 'auto_awesome', lat: 24.4630481, lng: 54.3224097,
    address: 'Al Bateen, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'outdoor',
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
    id: 'zayed-national-museum', category: 'heritage', icon: 'vrpano', lat: 24.5334816, lng: 54.4065875,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'house-of-artisans', category: 'heritage', icon: 'palette', lat: 24.4814291, lng: 54.3551795,
    address: 'Near Qasr Al Hosn, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'indoor',
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
    id: 'al-ain-oasis', category: 'heritage', icon: 'forest', lat: 24.2169951, lng: 55.7703457,
    address: 'Al Ain, ~90 min drive from Abu Dhabi city', image: null,
    priceTier: 'free', setting: 'outdoor',
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
    id: 'al-jahili-fort', category: 'heritage', icon: 'fort', lat: 24.2161572, lng: 55.7527166,
    address: 'Al Ain', image: null,
    priceTier: 'free', setting: 'mixed',
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
    id: 'louvre-abu-dhabi', category: 'art-museums', icon: 'museum', lat: 24.5336954, lng: 54.3981368,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'manarat-al-saadiyat', category: 'art-museums', icon: 'palette', lat: 24.5342114, lng: 54.4189099,
    address: 'Saadiyat Cultural District', image: null,
    priceTier: 'free', setting: 'indoor',
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
    id: 'natural-history-museum', category: 'art-museums', icon: 'science', lat: 24.5286191, lng: 54.403345,
    address: 'Saadiyat Cultural District, Saadiyat Island', image: null,
    priceTier: 'varies', setting: 'indoor',
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
    id: 'teamlab-phenomena', category: 'art-museums', icon: 'auto_awesome', lat: 24.5274599, lng: 54.4050985,
    address: 'Saadiyat Cultural District', image: null,
    priceTier: 'varies', setting: 'indoor',
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
    id: 'ferrari-world', category: 'theme-parks', icon: 'sports_motorsports', lat: 24.4843883, lng: 54.607704,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'yas-waterworld', category: 'theme-parks', icon: 'pool', lat: 24.487617, lng: 54.599647,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'outdoor',
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
    id: 'warner-bros-world', category: 'theme-parks', icon: 'attractions', lat: 24.4909273, lng: 54.5992359,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'seaworld-abu-dhabi', category: 'theme-parks', icon: 'water', lat: 24.4858436, lng: 54.6188199,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'varies', setting: 'indoor',
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
    id: 'yas-marina-circuit', category: 'theme-parks', icon: 'flag', lat: 24.4699413, lng: 54.6055067,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'varies', setting: 'outdoor',
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
    id: 'clymb', category: 'theme-parks', icon: 'paragliding', lat: 24.4858941, lng: 54.6070251,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'varies', setting: 'indoor',
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
    id: 'corniche-beach', category: 'nature', icon: 'beach_access', lat: 24.4719602, lng: 54.3374924,
    address: 'Corniche Rd, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'outdoor',
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
    id: 'jubail-mangrove-park', category: 'nature', icon: 'forest', lat: 24.5451825, lng: 54.4854061,
    address: 'Jubail Island, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'outdoor',
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
    id: 'eastern-mangroves', category: 'nature', icon: 'kayaking', lat: 24.4567242, lng: 54.4251332,
    address: 'Between Al Bateen and Al Mushrif, Abu Dhabi', image: null,
    priceTier: 'varies', setting: 'outdoor',
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
    id: 'hudayriyat-island', category: 'nature', icon: 'surfing', lat: 24.4251255, lng: 54.3412497,
    address: 'Hudayriyat Island, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'outdoor',
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
    id: 'al-wathba-wetland', category: 'nature', icon: 'flutter_dash', lat: 24.2543029, lng: 54.6108662,
    address: 'Al Wathba, ~40 min from central Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'outdoor',
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
    id: 'umm-al-emarat-park', category: 'nature', icon: 'park', lat: 24.4531769, lng: 54.3808866,
    address: 'Al Karama St, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'outdoor',
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
    id: 'sir-bani-yas', category: 'nature', icon: 'pets', lat: 24.311364, lng: 52.5959129,
    address: 'Western Region, ~2.5–3 hr drive + ferry', image: null,
    priceTier: 'varies', setting: 'outdoor',
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
    id: 'etihad-towers', category: 'landmarks-shopping', icon: 'apartment', lat: 24.458718, lng: 54.321782,
    address: 'Corniche Rd West, Abu Dhabi', image: null,
    priceTier: 'paid', setting: 'indoor',
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
    id: 'emirates-palace', category: 'landmarks-shopping', icon: 'hotel', lat: 24.4612381, lng: 54.3180193,
    address: 'West Corniche Rd, Abu Dhabi', image: "images/emirates-palace.jpg",
    source: 'https://unsplash.com/photos/brown-mansion-with-lights-during-nighttime-p0MGf8YvGRg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink',
    priceTier: 'free', setting: 'indoor',
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
    id: 'marina-mall', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4755453, lng: 54.3224506,
    address: 'Breakwater, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'indoor',
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
    id: 'yas-mall', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4888196, lng: 54.6086898,
    address: 'Yas Island, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'indoor',
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
    id: 'the-galleria', category: 'landmarks-shopping', icon: 'storefront', lat: 24.4996981, lng: 54.3910736,
    address: 'Al Maryah Island, Abu Dhabi', image: null,
    priceTier: 'free', setting: 'indoor',
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
  {
    id: 'al-maqta-bridge', category: 'landmarks-shopping', icon: 'flyover', lat: 24.4202828, lng: 54.4861512,
    address: 'Al Maqta, Abu Dhabi (E10, at the Maqta Channel)', image: "images/bridge-al-maqta.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Al Maqta Bridge',
      hours: 'Always open (public road bridge)', price: 'Free', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Any time — best viewed from the Maqta waterfront or Al Maqta Fort side',
      description: "Abu Dhabi's first permanent bridge to the mainland, its distinctive blue steel arch has linked the island to the rest of the UAE since the 1960s.",
      history: 'Built in 1968 and opened by Sheikh Zayed bin Sultan Al Nahyan, Al Maqta Bridge was the first fixed crossing to Abu Dhabi island, replacing a tidal causeway that could only be crossed at low tide. It was expanded with a second arch in the late 1990s as traffic grew, and sits beside the centuries-old Maqta watchtower.',
      funFacts: [
        'Before the bridge, travelers had to wait for low tide to cross the causeway on foot or by camel.',
        "The bridge was built by the same Austrian engineering firm, Waagner-Biró, that built Dubai's first bridge over the Creek.",
        'Its blue paint has become a distinctive, recognizable feature of the crossing.'
      ]
    },
    pt: {
      name: 'Ponte Al Maqta',
      hours: 'Sempre aberta (ponte pública)', price: 'Gratuito', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Qualquer horário — melhor vista a partir da orla de Al Maqta ou do lado do Forte Al Maqta',
      description: 'A primeira ponte permanente de Abu Dhabi para o continente, seu característico arco de aço azul liga a ilha ao resto dos Emirados desde os anos 1960.',
      history: 'Construída em 1968 e inaugurada por Sheikh Zayed bin Sultan Al Nahyan, a Ponte Al Maqta foi a primeira travessia fixa para a ilha de Abu Dhabi, substituindo uma passagem que só podia ser cruzada na maré baixa. Foi ampliada com um segundo arco no final dos anos 1990 com o crescimento do tráfego, e fica ao lado da torre de vigia histórica de Maqta, com séculos de idade.',
      funFacts: [
        'Antes da ponte, os viajantes precisavam esperar a maré baixa para atravessar a passagem a pé ou de camelo.',
        'A ponte foi construída pela mesma empresa de engenharia austríaca, Waagner-Biró, responsável pela primeira ponte de Dubai sobre o Creek.',
        'Sua pintura azul se tornou uma característica marcante e reconhecível da travessia.'
      ]
    }
  },
  {
    id: 'sheikh-zayed-bridge', category: 'landmarks-shopping', icon: 'flyover', lat: 24.4240682, lng: 54.4861438,
    address: 'Maqta Channel, Abu Dhabi (E10/E11 gateway to the island)', image: "images/bridge-sheik-zayed.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Sheikh Zayed Bridge',
      hours: 'Always open (public road bridge)', price: 'Free', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Night — the dynamic lighting is best seen after dark',
      description: "A dramatic 842-metre wave-shaped bridge designed by Zaha Hadid, forming Abu Dhabi's most architecturally striking gateway to the island.",
      history: 'Opened in 2010 after seven years of construction, the bridge was designed by Pritzker Prize-winning architect Dame Zaha Hadid as the third crossing over the Maqta Channel, complementing Al Maqta Bridge. Its arches rise up to 60 metres above the water.',
      funFacts: [
        "It's often described as one of the most complex bridges ever engineered.",
        'The undulating steel arches were designed to evoke desert sand dunes.',
        'A dynamic lighting system washes the bridge in shifting colors after dark.'
      ]
    },
    pt: {
      name: 'Ponte Sheikh Zayed',
      hours: 'Sempre aberta (ponte pública)', price: 'Gratuito', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'À noite — a iluminação dinâmica fica ainda mais bonita depois do anoitecer',
      description: 'Uma impressionante ponte de 842 metros em forma de onda, projetada por Zaha Hadid, formando o portal arquitetonicamente mais marcante de Abu Dhabi para a ilha.',
      history: 'Inaugurada em 2010 após sete anos de construção, a ponte foi projetada pela arquiteta vencedora do Prêmio Pritzker, Dame Zaha Hadid, como a terceira travessia sobre o Canal de Maqta, complementando a Ponte Al Maqta. Seus arcos chegam a 60 metros de altura sobre a água.',
      funFacts: [
        'É frequentemente descrita como uma das pontes mais complexas já projetadas.',
        'Os arcos de aço ondulados foram desenhados para evocar dunas de areia do deserto.',
        'Um sistema de iluminação dinâmica banha a ponte em cores variáveis após o anoitecer.'
      ]
    }
  },
  {
    id: 'al-reem-island-bridge', category: 'landmarks-shopping', icon: 'flyover', lat: 24.4942437, lng: 54.4068603,
    address: 'Al Reem Island, Abu Dhabi', image: "images/bridge_al-reem-island.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Al Reem Island Bridges',
      hours: 'Always open (public road bridges)', price: 'Free', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Any time — good photo stop from the Reem Island waterfront',
      description: "A network of bridges connecting the man-made Al Reem Island to Abu Dhabi's mainland and neighboring Al Maryah and Saadiyat islands, and a good vantage point for the Reem skyline.",
      history: "As Al Reem Island grew into one of Abu Dhabi's largest residential and business districts, multiple bridges were built to connect it — from the original Hazza Bin Zayed Street and Al Maryah bridges, to a new set of marine bridges linking directly to the Sheikh Khalifa Bin Zayed Highway, opened in 2026.",
      funFacts: [
        'Al Reem Island is connected by several separate bridges rather than a single crossing, spreading traffic across multiple routes.',
        'The newest marine bridges, opened in 2026, are designed to carry up to 7,200 vehicles per hour.',
        "A future 'Mid-Island Parkway' project aims to eventually link Reem directly to Saadiyat Island and Al Raha Beach."
      ]
    },
    pt: {
      name: 'Pontes da Ilha Al Reem',
      hours: 'Sempre abertas (pontes públicas)', price: 'Gratuito', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Qualquer horário — bom ponto de fotos a partir da orla da Ilha Al Reem',
      description: 'Uma rede de pontes que conecta a ilha artificial de Al Reem ao continente de Abu Dhabi e às vizinhas ilhas de Al Maryah e Saadiyat, além de um bom mirante para o horizonte de Reem.',
      history: 'À medida que a Ilha Al Reem se tornou um dos maiores bairros residenciais e comerciais de Abu Dhabi, várias pontes foram construídas para conectá-la — desde as pontes originais da Hazza Bin Zayed Street e Al Maryah, até um novo conjunto de pontes marítimas ligando diretamente à Rodovia Sheikh Khalifa Bin Zayed, inaugurado em 2026.',
      funFacts: [
        'A Ilha Al Reem é conectada por várias pontes separadas, em vez de uma única travessia, distribuindo o tráfego por diferentes rotas.',
        'As pontes marítimas mais novas, inauguradas em 2026, foram projetadas para suportar até 7.200 veículos por hora.',
        'Um futuro projeto de "Mid-Island Parkway" pretende eventualmente ligar Reem diretamente à Ilha Saadiyat e à Al Raha Beach.'
      ]
    }
  },
  {
    id: 'adnoc-hq', category: 'landmarks-shopping', icon: 'corporate_fare', lat: 24.4619703, lng: 54.3242125,
    address: 'Corniche Road, Abu Dhabi', image: "images/building-adnoc-hq.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'ADNOC Headquarters',
      hours: 'Exterior viewable anytime; not open to the public inside', price: 'Free to view from outside', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Evening — the tower is lit up after dark',
      description: "A sleek 342-metre skyscraper on the Corniche, headquarters of the Abu Dhabi National Oil Company and one of the tallest buildings in the city.",
      history: "Completed in 2017 after eight years of construction, the tower was designed by architecture firm HOK with a double-skin facade for energy efficiency, and anchors ADNOC's operations along Abu Dhabi's waterfront.",
      funFacts: [
        "At 342 metres and 76 floors, it's one of the tallest buildings in Abu Dhabi.",
        'The building incorporates a heritage museum alongside its office space.',
        'Its double-skin facade helps manage heat gain in the desert climate.'
      ]
    },
    pt: {
      name: 'Sede da ADNOC',
      hours: 'Exterior visível a qualquer hora; interior não é aberto ao público', price: 'Gratuito para ver por fora', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Noite — a torre é iluminada após o anoitecer',
      description: 'Um elegante arranha-céu de 342 metros na Corniche, sede da Companhia Nacional de Petróleo de Abu Dhabi (ADNOC) e um dos edifícios mais altos da cidade.',
      history: 'Concluída em 2017 após oito anos de construção, a torre foi projetada pelo escritório de arquitetura HOK com uma fachada de pele dupla para eficiência energética, e é a âncora das operações da ADNOC na orla de Abu Dhabi.',
      funFacts: [
        'Com 342 metros e 76 andares, é um dos edifícios mais altos de Abu Dhabi.',
        'O edifício inclui um museu do patrimônio ao lado dos espaços de escritório.',
        'Sua fachada de pele dupla ajuda a controlar o ganho de calor no clima desértico.'
      ]
    }
  },
  {
    id: 'aldar-hq', category: 'landmarks-shopping', icon: 'corporate_fare', lat: 24.4411465, lng: 54.5753519,
    address: 'Al Raha Beach, Abu Dhabi', image: "images/building-aldar-hq.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Aldar HQ (The Coin Building)',
      hours: 'Exterior viewable anytime; not open to the public inside', price: 'Free to view from outside', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Late afternoon — good light on the curved glass facade',
      description: "The world's first circular skyscraper, nicknamed 'the Coin Building' for its unmistakable disc shape rising over Al Raha Beach.",
      history: "Completed in 2010 as the headquarters of Aldar Properties, one of Abu Dhabi's largest developers, the 110-metre tower uses a diagonal steel diagrid to achieve its fully circular form — a first for a building of this kind.",
      funFacts: [
        "It's the world's first circular skyscraper.",
        'Its curved glass facade is made of triangular flat glass panels arranged into diamond shapes.',
        "It sits right beside the highway from Dubai, making it one of the first Abu Dhabi landmarks visitors see arriving by road."
      ]
    },
    pt: {
      name: 'Sede da Aldar (Edifício Moeda)',
      hours: 'Exterior visível a qualquer hora; interior não é aberto ao público', price: 'Gratuito para ver por fora', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Final da tarde — boa luz na fachada de vidro curva',
      description: 'O primeiro arranha-céu circular do mundo, apelidado de "Edifício Moeda" por seu inconfundível formato de disco erguendo-se sobre Al Raha Beach.',
      history: 'Concluída em 2010 como sede da Aldar Properties, uma das maiores incorporadoras de Abu Dhabi, a torre de 110 metros usa uma grade diagonal de aço (diagrid) para alcançar sua forma totalmente circular — uma novidade para um edifício desse tipo.',
      funFacts: [
        'É o primeiro arranha-céu circular do mundo.',
        'Sua fachada de vidro curva é feita de painéis triangulares planos organizados em formas de diamante.',
        'Fica bem ao lado da rodovia vinda de Dubai, sendo um dos primeiros marcos de Abu Dhabi que os visitantes veem ao chegar de carro.'
      ]
    }
  },
  {
    id: 'capital-gate', category: 'landmarks-shopping', icon: 'corporate_fare', lat: 24.4184809, lng: 54.4344948,
    address: 'Abu Dhabi National Exhibition Centre, Abu Dhabi', image: "images/building-capital-tower.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Capital Gate (Capital Tower)',
      hours: 'Exterior viewable anytime; hotel and offices inside', price: 'Free to view from outside', climateNote: 'Outdoor / drive-by landmark', bestTime: 'Any time — the lean is most striking from the highway approach',
      description: "Known as the 'Leaning Tower of Abu Dhabi,' this 160-metre skyscraper inclines 18 degrees westward — more than four times the lean of Pisa's tower.",
      history: 'Completed in 2011 and designed by RMJM, Capital Gate was engineered with a diagrid structure and a foundation of 490 piles to achieve its extreme lean safely, earning it a Guinness World Record for the world\'s furthest-leaning man-made tower.',
      funFacts: [
        "Guinness World Records certified it as the world's furthest-leaning man-made tower.",
        'Its 18-degree lean is more than four times that of the Leaning Tower of Pisa.',
        'It houses the Andaz Capital Gate hotel, including a pool cantilevered off the 19th floor.'
      ]
    },
    pt: {
      name: 'Capital Gate (Torre Capital)',
      hours: 'Exterior visível a qualquer hora; hotel e escritórios no interior', price: 'Gratuito para ver por fora', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Qualquer horário — a inclinação é mais impressionante vista da rodovia',
      description: 'Conhecida como a "Torre Inclinada de Abu Dhabi", este arranha-céu de 160 metros se inclina 18 graus para o oeste — mais de quatro vezes a inclinação da torre de Pisa.',
      history: 'Concluída em 2011 e projetada pela RMJM, a Capital Gate foi construída com uma estrutura diagrid e uma fundação de 490 estacas para alcançar sua inclinação extrema com segurança, o que lhe rendeu um recorde no Guinness como a torre artificial mais inclinada do mundo.',
      funFacts: [
        'O Guinness World Records a certificou como a torre artificial mais inclinada do mundo.',
        'Sua inclinação de 18 graus é mais de quatro vezes maior que a da Torre de Pisa.',
        'Abriga o hotel Andaz Capital Gate, incluindo uma piscina em balanço no 19º andar.'
      ]
    }
  },
  {
    id: 'wtc-abu-dhabi', category: 'landmarks-shopping', icon: 'corporate_fare', lat: 24.4894875, lng: 54.3567347,
    address: 'Hamdan Bin Mohammed St, Abu Dhabi', image: "images/Building-wtc.jpg",
    priceTier: 'free', setting: 'mixed',
    en: {
      name: 'World Trade Center Abu Dhabi',
      hours: 'Mall typically 10:00 AM–10:00 PM; towers not open to the public', price: 'Free entry (mall)', climateNote: 'Mostly indoor (mall) / drive-by landmark (towers)', bestTime: 'Evening',
      description: "A Foster + Partners-designed complex anchored by the Burj Mohammed bin Rashid, Abu Dhabi's tallest building, with a souk-inspired mall at its base.",
      history: 'Construction began in 2007 and was completed in 2014 after being delayed by the global financial crisis; the complex was originally planned with three towers, but only two were built.',
      funFacts: [
        'The Burj Mohammed bin Rashid tower is Abu Dhabi\'s tallest building at 382 metres.',
        "The mall's design draws on the layout of a traditional Arabian souk.",
        'It was designed by Foster + Partners, the architecture firm behind several other Abu Dhabi landmarks.'
      ]
    },
    pt: {
      name: 'World Trade Center Abu Dhabi',
      hours: 'Shopping normalmente 10h–22h; torres não abertas ao público', price: 'Entrada gratuita (shopping)', climateNote: 'Majoritariamente coberto (shopping) / marco para observar de passagem (torres)', bestTime: 'Noite',
      description: 'Um complexo projetado pela Foster + Partners, ancorado pela Burj Mohammed bin Rashid, o edifício mais alto de Abu Dhabi, com um shopping inspirado em um souk na base.',
      history: 'A construção começou em 2007 e foi concluída em 2014, após atrasos causados pela crise financeira global; o complexo foi originalmente planejado com três torres, mas apenas duas foram construídas.',
      funFacts: [
        'A torre Burj Mohammed bin Rashid é o edifício mais alto de Abu Dhabi, com 382 metros.',
        'O design do shopping se inspira no layout de um souk árabe tradicional.',
        'Foi projetado pela Foster + Partners, o mesmo escritório de arquitetura por trás de outros marcos de Abu Dhabi.'
      ]
    }
  },
  {
    id: 'al-bahr-towers', category: 'landmarks-shopping', icon: 'corporate_fare', lat: 24.45661, lng: 54.400863,
    address: 'Al Salam Street, Abu Dhabi', image: "images/building-al-bahr-tower.jpg",
    priceTier: 'free', setting: 'outdoor',
    en: {
      name: 'Al Bahr Towers',
      hours: 'Exterior viewable anytime; not open to the public inside', price: 'Free to view from outside', climateNote: 'Outdoor / drive-by landmark', bestTime: "Midday — best time to see the shading screens open and close",
      description: "Twin office towers famous for the world's largest computerized dynamic facade — a mashrabiya-inspired lattice of over 2,000 screens that open and close with the sun.",
      history: 'Completed in 2012 and designed by Aedas, Al Bahr Towers reinterprets the traditional Islamic mashrabiya lattice screen as a responsive, computer-controlled shading system, cutting solar gain by up to 50% and earning a LEED Silver rating.',
      funFacts: [
        "The facade uses over 2,000 umbrella-like units that open and close automatically based on the sun's position.",
        'It was one of the first large-scale buildings in the world with a fully dynamic, responsive facade.',
        'The towers house the Abu Dhabi Investment Council and Al Hilal Bank headquarters.'
      ]
    },
    pt: {
      name: 'Al Bahr Towers',
      hours: 'Exterior visível a qualquer hora; interior não é aberto ao público', price: 'Gratuito para ver por fora', climateNote: 'Ao ar livre / marco para observar de passagem', bestTime: 'Meio-dia — melhor horário para ver as telas de sombreamento abrindo e fechando',
      description: 'Torres gêmeas de escritórios famosas por terem a maior fachada dinâmica computadorizada do mundo — uma treliça inspirada na mashrabiya, com mais de 2.000 telas que abrem e fecham conforme o sol.',
      history: 'Concluídas em 2012 e projetadas pela Aedas, as Al Bahr Towers reinterpretam a tradicional treliça islâmica mashrabiya como um sistema de sombreamento responsivo e controlado por computador, reduzindo o ganho solar em até 50% e conquistando a certificação LEED Prata.',
      funFacts: [
        'A fachada usa mais de 2.000 unidades em formato de guarda-chuva que abrem e fecham automaticamente conforme a posição do sol.',
        'Foi um dos primeiros grandes edifícios do mundo com uma fachada totalmente dinâmica e responsiva.',
        'As torres abrigam as sedes do Conselho de Investimentos de Abu Dhabi e do Al Hilal Bank.'
      ]
    }
  },
  // ---------- Adventure & Desert ----------
  {
    id: 'desert-safari', category: 'adventure', icon: 'landscape', lat: 22.8980774, lng: 53.9357609,
    address: 'Liwa / Empty Quarter, ~2.5 hr drive from Abu Dhabi city', image: null,
    priceTier: 'varies', setting: 'outdoor',
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
    id: 'surf-abu-dhabi', category: 'adventure', icon: 'surfing', lat: 24.4237846, lng: 54.3327684,
    address: 'Hudayriyat Island, Abu Dhabi', image: null,
    priceTier: 'varies', setting: 'outdoor',
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
    id: 'masdar-city', category: 'adventure', icon: 'eco', lat: 24.4266734, lng: 54.614979,
    address: 'Masdar City, near Abu Dhabi International Airport', image: null,
    priceTier: 'free', setting: 'outdoor',
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
  // New entries to merge into the ATTRACTIONS array in data.js
// "Best Shopping for Bargains" cluster — bilingual (en/pt), matching the
// existing schema: top-level id/category/icon/lat/lng/address/image,
// with translated fields inside en: {} and pt: {} blocks.

{
  id: 'al-wahda-mall-bargains', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.4764, lng: 54.3705, address: 'Al Wahda St, Al Nahyan, Abu Dhabi', image: null,
  en: {
    name: 'Al Wahda Mall',
    hours: 'Daily 10:00 AM–10:00 PM (later on weekends)',
    price: 'Free to browse; bargain finds throughout',
    climateNote: 'Fully indoor', bestTime: 'Weekday afternoons (less crowded)',
    description: 'A mid-range mall known for affordable fashion, budget-friendly high-street brands, and a strong mix of Asian and international stores. Home to Brands4u Outlet and a LuLu Hypermarket.',
    history: "One of Abu Dhabi's longer-running malls, popular with residents for everyday shopping rather than luxury browsing.",
    funFacts: [
      'Brands4u Outlet inside the mall carries Lacoste, CK, and Mont Blanc at outlet prices, with regular surprise price drops.',
      'The attached LuLu Hypermarket is a reliable stop for cheap groceries and household goods.'
    ]
  },
  pt: {
    name: 'Al Wahda Mall',
    hours: 'Diariamente, 10h–22h (mais tarde nos fins de semana)',
    price: 'Entrada gratuita; boas pechinchas por todo o shopping',
    climateNote: 'Totalmente coberto', bestTime: 'Tardes de dia útil (menos movimento)',
    description: 'Um shopping de faixa intermediária conhecido por moda acessível, marcas populares de bom custo-benefício e uma forte mistura de lojas asiáticas e internacionais. Abriga o Brands4u Outlet e um hipermercado LuLu.',
    history: 'Um dos shoppings mais antigos de Abu Dhabi, popular entre moradores para compras do dia a dia, não voltado ao luxo.',
    funFacts: [
      'O Brands4u Outlet dentro do shopping vende Lacoste, CK e Mont Blanc a preços de outlet, com quedas de preço surpresa regulares.',
      'O hipermercado LuLu anexo é uma boa opção para mantimentos e itens domésticos baratos.'
    ]
  }
},

{
  id: 'reem-mall-bargains', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.4883, lng: 54.3993, address: 'Al Reem Island, Abu Dhabi (RR1, Abdullah Omran Taryam St)', image: null,
  en: {
    name: 'Reem Mall — Bargain Cluster',
    hours: 'Daily 10:00 AM–12:00 AM',
    price: 'Free to browse; off-price stores throughout',
    climateNote: 'Fully indoor', bestTime: 'Weekday mornings/early afternoon',
    description: "One of Abu Dhabi's newer mega-malls (400+ stores), with a strong cluster of value and off-price fashion retailers on the ground and second floors — good for a dedicated bargain run rather than luxury shopping.",
    history: 'Opened in 2023 as one of the largest retail developments in the capital, including "Snow Abu Dhabi," the city\'s first indoor snow park.',
    funFacts: [
      'Brands For Less sits on the ground floor beside Danube, offering up to 80% off designer fashion and homeware.',
      'R&B, a fast-growing value fashion chain from the region, has one of its newer branches here.'
    ]
  },
  pt: {
    name: 'Reem Mall — Polo de Pechinchas',
    hours: 'Diariamente, 10h–00h',
    price: 'Entrada gratuita; lojas de desconto por todo o shopping',
    climateNote: 'Totalmente coberto', bestTime: 'Manhãs/início da tarde em dias úteis',
    description: 'Um dos mega shoppings mais novos de Abu Dhabi (mais de 400 lojas), com um forte grupo de lojas de moda de valor e desconto no térreo e segundo andar — ótimo para uma ida dedicada a pechinchas, não a compras de luxo.',
    history: 'Inaugurado em 2023 como um dos maiores empreendimentos de varejo da capital, incluindo o "Snow Abu Dhabi", o primeiro parque de neve coberto da cidade.',
    funFacts: [
      'A Brands For Less fica no térreo ao lado da Danube, com até 80% de desconto em moda de grife e itens para casa.',
      'A R&B, uma rede de moda de valor em rápida expansão na região, tem uma de suas lojas mais novas aqui.'
    ]
  }
},

{
  id: 'madinat-zayed-gold-souk', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.4886, lng: 54.3667, address: '438 Muroor Rd, Al Danah, Abu Dhabi', image: null,
  en: {
    name: 'Madinat Zayed Shopping & Gold Centre',
    hours: 'Mon–Thu 9:00 AM–11:00 PM · Fri–Sun 9:00 AM–12:00 AM',
    price: 'Free to browse; gold priced daily by market rate',
    climateNote: 'Fully indoor', bestTime: 'Morning for calmer gold-shop browsing and negotiation',
    description: "A local, largely non-touristy shopping centre (400+ shops) built around the Gold Souk — roughly 70 jewellery shops selling gold, diamonds, and pearls, alongside abaya boutiques, perfumeries, textiles, and a LuLu Hypermarket.",
    history: "Long-standing part of Abu Dhabi's retail landscape, managed by the LuLu Group, historically serving the city's expat and local working population more than tourists.",
    funFacts: [
      "Prices here are often considered cheaper and more negotiable than Dubai's Gold Souk.",
      'The centre is connected to a LuLu Hypermarket, useful for groceries or a quick bite between gold-shop browsing.'
    ]
  },
  pt: {
    name: 'Madinat Zayed Shopping & Gold Centre',
    hours: 'Seg–qui 9h–23h · Sex–dom 9h–00h',
    price: 'Entrada gratuita; ouro precificado diariamente pela cotação de mercado',
    climateNote: 'Totalmente coberto', bestTime: 'Manhã, para negociar com mais calma nas joalherias',
    description: 'Um centro de compras local, pouco turístico (mais de 400 lojas) construído em torno do Gold Souk — cerca de 70 joalherias vendendo ouro, diamantes e pérolas, além de lojas de abaya, perfumarias, tecidos e um hipermercado LuLu.',
    history: 'Parte histórica do comércio de Abu Dhabi, administrado pelo Grupo LuLu, tradicionalmente voltado para expatriados e trabalhadores locais mais do que turistas.',
    funFacts: [
      'Os preços aqui costumam ser considerados mais baratos e negociáveis do que no Gold Souk de Dubai.',
      'O centro é conectado a um hipermercado LuLu, útil para compras de mercado ou um lanche rápido entre uma joalheria e outra.'
    ]
  }
},

{
  id: 'mina-port-bargain-shops', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.5089, lng: 54.3775, address: 'Mina Zayed (Port Area), Abu Dhabi', image: null,
  en: {
    name: 'Mina Zayed Port — Dollar & Gift Shops',
    hours: 'Daily, morning through evening',
    price: 'Very low — fixed-price/dollar-store model',
    climateNote: 'Mix of indoor stalls and covered walkways', bestTime: 'Any time; less crowded on weekday mornings',
    description: 'A cluster of budget fixed-price shops (like OneToTen) scattered through the Mina Zayed port area, selling household items, gifts, toys, and daily necessities at very low prices — a genuinely local, non-touristy stop.',
    history: "Grown organically alongside Mina Zayed's long-running produce, fish, and date markets, serving the trading community and nearby residents.",
    funFacts: [
      'OneToTen-style shops price most items in a fixed low range, similar to a dollar store.',
      'Sits within walking distance of the fruit/veg souq, fish market, and Liwa Dates Store, so it pairs naturally into one port visit.'
    ]
  },
  pt: {
    name: 'Porto de Mina Zayed — Lojas de Um Dólar e Presentes',
    hours: 'Diariamente, de manhã até a noite',
    price: 'Muito baixo — modelo de preço fixo, estilo "loja de um dólar"',
    climateNote: 'Mistura de barracas cobertas e passagens abertas', bestTime: 'Qualquer horário; menos movimento em manhãs de dia útil',
    description: 'Um conjunto de lojas de preço fixo e baixo (como a OneToTen) espalhadas pela área do porto de Mina Zayed, vendendo itens domésticos, presentes, brinquedos e itens do dia a dia a preços muito baixos — um lugar genuinamente local e pouco turístico.',
    history: 'Cresceu organicamente ao lado dos tradicionais mercados de hortifrúti, peixe e tâmaras de Mina Zayed, atendendo a comunidade comerciante e moradores próximos.',
    funFacts: [
      'Lojas no estilo OneToTen precificam a maioria dos itens numa faixa fixa e baixa, como uma "loja de um dólar".',
      'Fica a poucos passos do mercado de hortifrúti, do mercado de peixe e da Liwa Dates Store, então combina bem com uma visita única ao porto.'
    ]
  }
},

{
  id: 'gift-land-najda', category: 'landmarks-shopping', icon: 'redeem',
  lat: 24.4926, lng: 54.3721, address: 'Najda St, Abu Dhabi', image: null,
  en: {
    name: 'Gift Land',
    hours: 'Daily, typical retail hours (confirm current hours on-site)',
    price: 'Budget-friendly',
    climateNote: 'Indoor', bestTime: 'Any time',
    description: 'A straightforward gift and novelty shop on Najda Street — a reliable, no-frills stop for affordable gifts, party items, and small souvenirs away from the mall crowds.',
    history: "Part of Najda Street's long-running strip of independent retail shops, a street known locally for practical, affordable shopping rather than luxury brands.",
    funFacts: ["Najda St is one of the city's older commercial strips, popular with residents for exactly this kind of independent shop."]
  },
  pt: {
    name: 'Gift Land',
    hours: 'Diariamente, horário comercial padrão (confirme no local)',
    price: 'Preços acessíveis',
    climateNote: 'Coberto', bestTime: 'Qualquer horário',
    description: 'Uma loja de presentes e artigos variados simples e direta na Najda Street — uma parada confiável e sem frescura para presentes baratos, itens de festa e pequenas lembranças, longe da movimentação dos shoppings.',
    history: 'Parte da tradicional faixa de lojas independentes da Najda Street, uma rua conhecida localmente por compras práticas e acessíveis, não por marcas de luxo.',
    funFacts: ['A Najda St é uma das faixas comerciais mais antigas da cidade, popular entre moradores justamente por esse tipo de loja independente.']
  }
},

{
  id: 'adidas-outlet-mazyad', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.4667, lng: 54.3667, address: 'Mazyad St, Abu Dhabi', image: null,
  en: {
    name: 'Adidas Outlet Store — Mazyad Street',
    hours: 'Daily, typical retail hours (confirm current hours on-site)',
    price: 'Outlet pricing — discounted from retail',
    climateNote: 'Indoor', bestTime: 'Any time',
    description: 'A dedicated Adidas outlet store on Mazyad Street offering discounted sportswear and footwear compared to full-price mall locations.',
    history: 'Part of a small strip of standalone outlet-style stores along Mazyad Street, separate from the big shopping malls.',
    funFacts: ['Standalone outlet stores like this often carry past-season stock at deeper discounts than mall counterparts.']
  },
  pt: {
    name: 'Adidas Outlet Store — Mazyad Street',
    hours: 'Diariamente, horário comercial padrão (confirme no local)',
    price: 'Preço de outlet — com desconto em relação ao varejo',
    climateNote: 'Coberto', bestTime: 'Qualquer horário',
    description: 'Uma loja outlet exclusiva da Adidas na Mazyad Street, com roupas esportivas e calçados com desconto em comparação às lojas de shopping em preço cheio.',
    history: 'Parte de uma pequena faixa de lojas outlet independentes na Mazyad Street, separada dos grandes shoppings.',
    funFacts: ['Lojas outlet independentes como essa costumam ter estoque de temporadas passadas com descontos ainda maiores que as unidades de shopping.']
  }
},
{
  id: 'childrens-library', category: 'culture-heritage', icon: 'auto_stories',
  lat: 24.4864, lng: 54.3540,
  address: 'Cultural Foundation, Sheikh Rashid Bin Saeed Al Maktoum St, Al Hosn, Abu Dhabi',
  image: null,
  en: {
    name: "Abu Dhabi Children's Library",
    hours: 'Sat–Thu 9:00 AM–8:00 PM · Fri 2:00 PM–8:00 PM',
    price: 'Free (registration required to borrow books)',
    climateNote: 'Fully indoor', bestTime: 'Late afternoon',
    description: "A three-floor, 5,250 sqm children's library at the Cultural Foundation next to Qasr Al Hosn, built around immersive, age-appropriate play-and-read spaces inspired by UAE landscapes.",
    history: "Opened in 2019 as part of the master plan reinstating Qasr Al Hosn as Abu Dhabi's cultural heart, integrated into the historic Cultural Foundation building.",
    funFacts: [
      'Features a central "Book Mountain" and a reading dune modeled on desert sand.',
      'One floor has an oasis-themed space with a falaj (water channel) design flowing past the bookshelves.'
    ]
  },
  pt: {
    name: 'Biblioteca Infantil de Abu Dhabi',
    hours: 'Sáb–qui 9h–20h · Sex 14h–20h',
    price: 'Gratuito (cadastro necessário para emprestar livros)',
    climateNote: 'Totalmente coberto', bestTime: 'Final da tarde',
    description: 'Uma biblioteca infantil de três andares e 5.250 m² na Cultural Foundation, ao lado do Qasr Al Hosn, construída em torno de espaços imersivos de leitura e brincadeira inspirados nas paisagens dos Emirados.',
    history: 'Inaugurada em 2019 como parte do plano diretor que devolveu ao Qasr Al Hosn seu papel de coração cultural de Abu Dhabi, integrada ao histórico prédio da Cultural Foundation.',
    funFacts: [
      'Tem uma "Montanha de Livros" central e uma duna de leitura inspirada nas dunas do deserto.',
      'Um dos andares tem um espaço temático de oásis, com um desenho de falaj (canal de água) passando pelas estantes.'
    ]
  }
},

{
  id: 'emirates-park-zoo', category: 'nature', icon: 'pets',
  lat: 24.6167, lng: 54.6167,
  address: '12th Street, Al Bahia, Abu Dhabi',
  image: null,
  en: {
    name: 'Emirates Park Zoo & Resort',
    hours: 'Daily 9:00 AM–8:00 PM (confirm current show times)',
    price: 'From AED 40 (single entry); activity bundles and VIP experiences extra',
    climateNote: 'Mostly outdoor, some indoor exhibits', bestTime: 'Morning (cooler, animals more active; catch early shows)',
    description: 'An 80-acre wildlife park in Al Bahia, about 30 minutes from downtown and 10–15 minutes from Yas Island, home to well over 1,000 animals across zones like the Petting Zoo, Bird Park, Reptile House, and Wildlife Park.',
    history: 'Opened in 2008 as a small feeding farm and expanded into a full zoo by 2012; now AZA-accredited and a WAZA member, reflecting international animal welfare standards.',
    funFacts: [
      'The only AZA-accredited zoo in the Middle East.',
      'Offers VIP animal-dining experiences, including breakfast with giraffes or parrots.'
    ]
  },
  pt: {
    name: 'Emirates Park Zoo & Resort',
    hours: 'Diariamente 9h–20h (confirme os horários dos shows)',
    price: 'A partir de AED 40 (entrada avulsa); pacotes de atividades e experiências VIP à parte',
    climateNote: 'Majoritariamente ao ar livre, com algumas exposições cobertas', bestTime: 'Manhã (mais fresco, animais mais ativos; pegue os primeiros shows)',
    description: 'Um parque de vida selvagem de 32 hectares em Al Bahia, cerca de 30 minutos do centro e 10–15 minutos da Yas Island, lar de mais de 1.000 animais em áreas como o zoológico de contato, o Parque das Aves, a Casa dos Répteis e o Parque da Vida Selvagem.',
    history: 'Inaugurado em 2008 como uma pequena fazenda de alimentação e expandido para um zoológico completo até 2012; hoje é credenciado pela AZA e membro da WAZA, refletindo padrões internacionais de bem-estar animal.',
    funFacts: [
      'O único zoológico credenciado pela AZA no Oriente Médio.',
      'Oferece experiências VIP de refeição com animais, incluindo café da manhã com girafas ou papagaios.'
    ]
  }
},

{
  id: 'mina-port-market', category: 'landmarks-shopping', icon: 'storefront',
  lat: 24.5089, lng: 54.3775,
  address: 'Mina Zayed (Port Area), Abu Dhabi',
  image: null,
  en: {
    name: 'Mina Zayed Fruit, Vegetable & Dates Market',
    hours: 'Daily, early morning through evening (best 6:00–10:00 AM)',
    price: 'Free to browse',
    climateNote: 'Mostly outdoor/covered stalls', bestTime: 'Early morning',
    description: "A working local souq at Abu Dhabi's old port, packed with stalls selling fresh produce and dozens of date varieties, alongside the adjacent fish market.",
    history: "Part of Mina Zayed's traditional port trading area, long predating the city's modern malls, still run largely by local and expat traders rather than set up for tourists.",
    funFacts: [
      'Sits right next to the Mina Zayed Fish Market, where you can pick a fish and have it grilled at a nearby stall.',
      'One of the best places in the city to sample and buy dates by the kilo, direct from traders.'
    ]
  },
  pt: {
    name: 'Mercado de Frutas, Verduras e Tâmaras de Mina Zayed',
    hours: 'Diariamente, do início da manhã até a noite (melhor horário 6h–10h)',
    price: 'Entrada gratuita',
    climateNote: 'Majoritariamente ao ar livre/barracas cobertas', bestTime: 'Início da manhã',
    description: 'Um souq local em pleno funcionamento no antigo porto de Abu Dhabi, cheio de barracas vendendo produtos frescos e dezenas de variedades de tâmaras, ao lado do mercado de peixe.',
    history: 'Parte da tradicional área de comércio portuário de Mina Zayed, muito anterior aos shoppings modernos da cidade, ainda administrada majoritariamente por comerciantes locais e expatriados, não voltada para turistas.',
    funFacts: [
      'Fica bem ao lado do Mercado de Peixe de Mina Zayed, onde você pode escolher um peixe e pedir para grelhar numa barraca próxima.',
      'Um dos melhores lugares da cidade para provar e comprar tâmaras por quilo, direto dos comerciantes.'
    ]
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
