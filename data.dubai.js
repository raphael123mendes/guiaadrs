// Dubai Attractions dataset (bilingual: EN + PT)
// Same shape as data.js (Abu Dhabi): id/category/icon/lat/lng/address/image
// top-level, plus en:{} / pt:{} blocks for translated fields.
// Merged from batch files, 37 entries.

const DUBAI_CATEGORIES = [
  { id: 'culture-heritage', icon: 'account_balance', en: 'Culture & Heritage', pt: 'Cultura e Patrimônio' },
  { id: 'landmarks-shopping', icon: 'apartment', en: 'Modern Landmarks & Shopping', pt: 'Marcos Modernos e Compras' },
  { id: 'nature', icon: 'park', en: 'Nature & Outdoors', pt: 'Natureza e Ar Livre' },
  { id: 'theme-parks-adventure', icon: 'attractions', en: 'Theme Parks & Adventure', pt: 'Parques Temáticos e Aventura' },
];

const DUBAI_ATTRACTIONS = [
{
    id: 'burj-khalifa', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.197197, lng: 55.2743764,
    address: '1 Sheikh Mohammed bin Rashid Blvd, Downtown Dubai, Dubai',
    image: null,
    en: {
      name: 'Burj Khalifa (At the Top)',
      hours: 'Daily, non-prime 9:00 AM–3:30 PM & 8:00 PM–midnight; prime hours 4:00–7:00 PM (check current slots online)',
      price: 'From AED 173 (non-prime, Floors 124–125); AED 250+ prime hours; SKY (Floor 148) from AED 400',
      climateNote: 'Fully indoor',
      bestTime: 'Prime hours (4–7 PM) for sunset, or after 8 PM for a quieter, cooler visit with city lights',
      description: 'The world\'s tallest building at 828 metres, with observation decks on Floors 124/125 and, for an upgrade, Floor 148 — the highest outdoor observation deck on Earth. Floor-to-ceiling windows and high-powered telescopes give 360-degree views over Downtown Dubai and the Arabian Gulf.',
      history: 'Completed in 2010 and named after UAE President Sheikh Khalifa bin Zayed Al Nahyan, it held the world record for tallest structure ever built and remains Dubai\'s defining landmark.',
      funFacts: [
        'Over 17 million visitors ride to the observation decks each year.',
        'The Dubai Fountain performs on the lake directly below — visible from the deck at the right time.',
        'Booking at least 48 hours ahead is recommended for prime sunset slots, which sell out first.'
      ]
    },
    pt: {
      name: 'Burj Khalifa (At the Top)',
      hours: 'Diariamente, horário normal 9h–15h30 e 20h–meia-noite; horário nobre 16h–19h (confirme os horários disponíveis online)',
      price: 'A partir de AED 173 (horário normal, andares 124–125); AED 250+ no horário nobre; SKY (andar 148) a partir de AED 400',
      climateNote: 'Totalmente coberto',
      bestTime: 'Horário nobre (16h–19h) para o pôr do sol, ou após as 20h para uma visita mais tranquila com as luzes da cidade',
      description: 'O edifício mais alto do mundo, com 828 metros, com decks de observação nos andares 124/125 e, como upgrade, no andar 148 — o deck de observação ao ar livre mais alto do planeta. Janelas do chão ao teto e telescópios potentes oferecem vistas de 360 graus sobre a Downtown Dubai e o Golfo Arábico.',
      history: 'Concluído em 2010 e batizado em homenagem ao presidente dos Emirados, Sheikh Khalifa bin Zayed Al Nahyan, bateu o recorde mundial de estrutura mais alta já construída e continua sendo o símbolo máximo de Dubai.',
      funFacts: [
        'Mais de 17 milhões de visitantes sobem aos decks de observação todos os anos.',
        'A Dubai Fountain se apresenta no lago logo abaixo — visível do deck no horário certo.',
        'Recomenda-se reservar com pelo menos 48 horas de antecedência para os horários nobres do pôr do sol, que esgotam primeiro.'
      ]
    }
  },
{
    id: 'dubai-aquarium-underwater-zoo', category: 'landmarks-shopping', icon: 'water',
    lat: 25.1975134, lng: 55.2785005,
    address: 'The Dubai Mall, Financial Centre Rd, Downtown Dubai, Dubai',
    image: null,
    en: {
      name: 'Dubai Aquarium & Underwater Zoo',
      hours: 'Sun–Wed 10:00 AM–10:00 PM; Thu–Sat 10:00 AM–midnight',
      price: 'From AED 120–153 (Day Pass); Explorer ticket (glass-bottom boat + more) around AED 199',
      climateNote: 'Fully indoor',
      bestTime: 'Weekday mornings (10 AM–noon) for the smallest crowds',
      description: 'One of the world\'s largest suspended aquariums, built into the ground floor of The Dubai Mall: a 10-million-litre tank viewed through a 48-metre walkthrough tunnel, plus an Underwater Zoo on Level 2 with penguins, otters, and rainforest and coastal zones.',
      history: 'Opened alongside The Dubai Mall in 2008–09, it quickly became one of the most-visited paid attractions in the UAE.',
      funFacts: [
        'Home to more than 33,000 marine animals across 140+ species.',
        'Houses one of the largest collections of sand tiger sharks in the world.',
        'A glass-bottom boat ride lets you look straight down into the main tank.'
      ]
    },
    pt: {
      name: 'Dubai Aquarium & Underwater Zoo',
      hours: 'Dom–Qua 10h–22h; Qui–Sáb 10h–meia-noite',
      price: 'A partir de AED 120–153 (Day Pass); ingresso Explorer (com barco de fundo de vidro e mais) por cerca de AED 199',
      climateNote: 'Totalmente coberto',
      bestTime: 'Manhãs de dia útil (10h–meio-dia), quando há menos movimento',
      description: 'Um dos maiores aquários suspensos do mundo, construído no térreo do The Dubai Mall: um tanque de 10 milhões de litros visto através de um túnel de 48 metros, além de um Underwater Zoo no nível 2 com pinguins, lontras e zonas de floresta tropical e litoral.',
      history: 'Inaugurado junto com o The Dubai Mall em 2008–09, rapidamente se tornou uma das atrações pagas mais visitadas dos Emirados.',
      funFacts: [
        'Abriga mais de 33.000 animais marinhos de mais de 140 espécies.',
        'Possui uma das maiores coleções de tubarões-de-areia do mundo.',
        'Um passeio de barco com fundo de vidro permite ver diretamente o tanque principal por baixo.'
      ]
    }
  },
{
    id: 'dubai-fountain', category: 'landmarks-shopping', icon: 'water_drop',
    lat: 25.1951554, lng: 55.2751579,
    address: 'Burj Lake, outside The Dubai Mall, Downtown Dubai, Dubai',
    image: null,
    en: {
      name: 'The Dubai Fountain',
      hours: 'Shows run daily roughly every 30 minutes, 6:00 PM–11:00 PM (plus occasional afternoon shows); each lasts about 5 minutes',
      price: 'Free from the promenade and Souk Al Bahar bridge; Boardwalk platform AED 20; abra boat ride around AED 100',
      climateNote: 'Fully outdoor',
      bestTime: 'Sunset (around 6 PM in winter) or after 9 PM for a livelier atmosphere with fewer crowds',
      description: 'The world\'s tallest performing fountain, set on the 30-acre Burj Lake in front of The Dubai Mall, sending jets up to 150 metres into the air in choreographed routines set to music and lights — with Burj Khalifa as the backdrop.',
      history: 'Designed by WET Design, the same studio behind the Bellagio fountains in Las Vegas, and a signature Emaar project since Downtown Dubai\'s development.',
      funFacts: [
        'Entry to the standard viewing areas is completely free.',
        'The show rotates through roughly 35 different musical tracks, so no two consecutive shows look identical.',
        'Reopened in October 2025 after a modernization refresh, with further upgrades arriving through 2026.'
      ]
    },
    pt: {
      name: 'The Dubai Fountain',
      hours: 'Espetáculos diários a cada 30 minutos, aproximadamente, das 18h às 23h (com shows extras à tarde em alguns dias); cada um dura cerca de 5 minutos',
      price: 'Gratuito na orla e na ponte do Souk Al Bahar; plataforma Boardwalk AED 20; passeio de abra (barco) por cerca de AED 100',
      climateNote: 'Totalmente ao ar livre',
      bestTime: 'Pôr do sol (por volta das 18h no inverno) ou após as 21h, para um ambiente mais animado e com menos gente',
      description: 'A fonte cênica mais alta do mundo, instalada no lago Burj Lake, de 12 hectares, em frente ao The Dubai Mall, com jatos de até 150 metros de altura em coreografias sincronizadas com música e luzes — tendo o Burj Khalifa como cenário.',
      history: 'Projetada pela WET Design, o mesmo estúdio responsável pelas fontes do Bellagio em Las Vegas, é um projeto emblemático da Emaar desde o desenvolvimento da Downtown Dubai.',
      funFacts: [
        'A entrada nas áreas padrão de visualização é totalmente gratuita.',
        'O show alterna entre cerca de 35 músicas diferentes, então shows consecutivos raramente são idênticos.',
        'Reabriu em outubro de 2025 após uma modernização, com novas melhorias previstas ao longo de 2026.'
      ]
    }
  },
{
    id: 'al-fahidi-historical-neighbourhood', category: 'culture-heritage', icon: 'auto_stories',
    lat: 25.2642363, lng: 55.3002643,
    address: 'Al Fahidi Street, Bur Dubai, Dubai',
    image: null,
    en: {
      name: 'Al Fahidi Historical Neighbourhood',
      hours: 'Neighbourhood accessible 24/7; most museums and galleries open roughly 8:00 AM–8:00 PM (some close earlier)',
      price: 'Free to explore the neighbourhood; individual museums/galleries charge small fees (e.g. Dubai Museum AED 3 adults, AED 1 children)',
      climateNote: 'Mostly outdoor lanes, with indoor museums and galleries along the way',
      bestTime: 'Early morning or late afternoon, to avoid midday heat while wandering the alleys',
      description: 'Also known as Al Bastakiya, this is one of Dubai\'s oldest surviving districts: narrow sandstone lanes, wind-tower houses, art galleries, and cafés that recall the city\'s pearl-trading past before the modern skyline existed.',
      history: 'A former hub for pearl and textile merchants in the 1800s, restored and preserved as Dubai\'s reference point for pre-oil-boom heritage.',
      funFacts: [
        'Its distinctive wind towers (barjeel) were a traditional form of natural air conditioning.',
        'The Sheikh Mohammed Centre for Cultural Understanding here runs meals and Q&As with local Emiratis.',
        'The Dubai Museum inside Al Fahidi Fort has been under major restoration, with reopening expected in 2026 — worth checking current status before visiting.'
      ]
    },
    pt: {
      name: 'Al Fahidi Historical Neighbourhood',
      hours: 'Bairro acessível 24 horas; a maioria dos museus e galerias funciona aproximadamente das 8h às 20h (alguns fecham mais cedo)',
      price: 'Gratuito para explorar o bairro; museus e galerias individuais cobram taxas pequenas (ex.: Dubai Museum AED 3 adultos, AED 1 crianças)',
      climateNote: 'Vielas majoritariamente ao ar livre, com museus e galerias cobertos ao longo do caminho',
      bestTime: 'Início da manhã ou fim da tarde, para evitar o calor do meio-dia ao caminhar pelas vielas',
      description: 'Também conhecido como Al Bastakiya, é um dos bairros mais antigos ainda existentes em Dubai: vielas estreitas de arenito, casas com torres de vento, galerias de arte e cafés que remetem ao passado da cidade como centro de comércio de pérolas, antes do skyline moderno.',
      history: 'Antigo centro de comerciantes de pérolas e têxteis no século XIX, restaurado e preservado como referência do patrimônio de Dubai anterior ao boom do petróleo.',
      funFacts: [
        'Suas características torres de vento (barjeel) eram uma forma tradicional de climatização natural.',
        'O Sheikh Mohammed Centre for Cultural Understanding, localizado ali, promove refeições e conversas com moradores emiratis.',
        'O Dubai Museum, dentro do Forte Al Fahidi, passa por uma grande restauração, com reabertura prevista para 2026 — vale confirmar a situação atual antes de visitar.'
      ]
    }
  },
{
    id: 'dubai-miracle-garden', category: 'nature', icon: 'local_florist',
    lat: 25.0600069, lng: 55.2444647,
    address: 'Al Barsha South 3, Dubailand, Dubai',
    image: null,
    en: {
      name: 'Dubai Miracle Garden',
      hours: 'Seasonal, roughly late September–May. Weekdays 9:00 AM–9:00 PM; weekends 9:00 AM–11:00 PM (closed in summer months)',
      price: 'Adults (12+) around AED 100; children (3–12) around AED 80; under 3 free',
      climateNote: 'Fully outdoor',
      bestTime: 'Early morning or late afternoon during the cooler season (Nov–Mar) to avoid the midday sun',
      description: 'The world\'s largest natural flower garden, spanning 72,000 square metres with over 150 million flowers arranged into giant sculptures, archways, and record-breaking installations that change every season.',
      history: 'Opened in 2013 and now in its 14th season, it has become one of Dubai\'s signature seasonal attractions, closing each summer for full replanting.',
      funFacts: [
        'A full-scale Emirates A380 structure covered in over 500,000 fresh flowers is one of its most photographed installations.',
        'It only operates outside the summer heat, since the flowers can\'t survive Dubai\'s peak temperatures.',
        'It sits right next to Dubai Butterfly Garden, which many visitors combine into one trip.'
      ]
    },
    pt: {
      name: 'Dubai Miracle Garden',
      hours: 'Sazonal, aproximadamente de final de setembro a maio. Dias úteis 9h–21h; fins de semana 9h–23h (fechado nos meses de verão)',
      price: 'Adultos (12+) cerca de AED 100; crianças (3–12) cerca de AED 80; menores de 3 anos grátis',
      climateNote: 'Totalmente ao ar livre',
      bestTime: 'Início da manhã ou fim da tarde durante a temporada mais fresca (nov–mar), para evitar o sol do meio-dia',
      description: 'O maior jardim natural de flores do mundo, com 72.000 metros quadrados e mais de 150 milhões de flores organizadas em esculturas gigantes, arcos e instalações recordistas que mudam a cada temporada.',
      history: 'Inaugurado em 2013 e atualmente em sua 14ª temporada, tornou-se uma das atrações sazonais mais emblemáticas de Dubai, fechando todo verão para o replantio completo.',
      funFacts: [
        'Uma estrutura em tamanho real de um Emirates A380, coberta com mais de 500.000 flores frescas, é uma das instalações mais fotografadas.',
        'Funciona apenas fora do calor do verão, já que as flores não resistem às temperaturas máximas de Dubai.',
        'Fica ao lado do Dubai Butterfly Garden, que muitos visitantes combinam em uma mesma visita.'
      ]
    }
  },
{
    id: 'ski-dubai', category: 'landmarks-shopping', icon: 'ac_unit',
    lat: 25.117204, lng: 55.1983112,
    address: 'Mall of the Emirates, Sheikh Zayed Road, Al Barsha 1, Dubai',
    image: null,
    en: {
      name: 'Ski Dubai',
      hours: 'Daily, hours vary — generally from around 10:00 AM, with extended weekend hours (check current schedule; can open later on special event days)',
      price: 'From around AED 175–230 (Snow Park pass); Ski Slope pass from around AED 305; premium passes up to AED 450',
      climateNote: 'Fully indoor (a real snow environment year-round)',
      bestTime: 'Weekday mornings for shorter queues on the slopes and rides',
      description: 'The Middle East\'s first and largest indoor ski resort, tucked inside Mall of the Emirates: real snow across 22,500 square metres, with ski and snowboard slopes, a snow park with tobogganing and tubing, a chairlift, and a penguin encounter.',
      history: 'Opened in 2005 as part of Mall of the Emirates, it was one of the first attractions to put Dubai\'s "impossible in the desert" engineering ambitions on the global map.',
      funFacts: [
        'Maintains real snow year-round regardless of the desert heat outside.',
        'The penguin encounter lets visitors meet Gentoo and King penguins up close.',
        'Winter gear (jacket, trousers, boots) is included with entry — just bring warm layers underneath.'
      ]
    },
    pt: {
      name: 'Ski Dubai',
      hours: 'Diariamente, horários variam — geralmente a partir das 10h, com horário estendido aos fins de semana (confirme a programação atual; pode abrir mais tarde em dias de eventos especiais)',
      price: 'A partir de cerca de AED 175–230 (passe Snow Park); passe Ski Slope a partir de cerca de AED 305; passes premium até AED 450',
      climateNote: 'Totalmente coberto (ambiente de neve real o ano todo)',
      bestTime: 'Manhãs de dia útil, para filas menores nas pistas e brinquedos',
      description: 'O primeiro e maior resort de esqui coberto do Oriente Médio, dentro do Mall of the Emirates: neve de verdade em 22.500 metros quadrados, com pistas de esqui e snowboard, um snow park com trenós e boias, teleférico e um encontro com pinguins.',
      history: 'Inaugurado em 2005 como parte do Mall of the Emirates, foi uma das primeiras atrações a colocar as ambições de engenharia "impossíveis no deserto" de Dubai no mapa mundial.',
      funFacts: [
        'Mantém neve de verdade o ano todo, independente do calor do deserto lá fora.',
        'O encontro com pinguins permite conhecer de perto pinguins-gentoo e pinguins-rei.',
        'O equipamento de inverno (jaqueta, calça, botas) está incluído na entrada — basta levar camadas quentes por baixo.'
      ]
    }
  },
{
    id: 'museum-of-the-future', category: 'culture-heritage', icon: 'auto_awesome',
    lat: 25.2192034, lng: 55.2819328,
    address: 'Sheikh Zayed Road, Trade Centre, Dubai',
    image: null,
    en: {
      name: 'Museum of the Future',
      hours: 'Daily 9:30 AM–7:30 PM (last entry 7:00 PM) — NOTE: reported temporarily closed from 1 Sept 2026 until further notice; verify before visiting',
      price: 'Adults around AED 149; children AED 95 (ages 4–17); under 4 free',
      climateNote: 'Fully indoor',
      bestTime: 'Weekday mornings (10–11 AM) for smaller crowds and best light for photos',
      description: 'A torus-shaped, calligraphy-clad building widely called one of the most beautiful in the world, with seven floors of immersive exhibits imagining space travel, biotechnology, climate solutions, and daily life decades from now — closer to an experience than a traditional museum.',
      history: 'Opened in February 2022 under the Dubai Future Foundation, conceived as a hybrid of museum, innovation lab, and research centre rather than a collection of historical artefacts.',
      funFacts: [
        'The exterior facade is engraved with Arabic calligraphy quoting Sheikh Mohammed bin Rashid Al Maktoum.',
        'Level 5 places visitors aboard a fictional 2071 space station, OSS Hope.',
        'Frequently ranked by visitors as Dubai\'s top attraction after Burj Khalifa.'
      ]
    },
    pt: {
      name: 'Museum of the Future',
      hours: 'Diariamente 9h30–19h30 (última entrada às 19h) — OBSERVAÇÃO: relatos indicam fechamento temporário a partir de 1º de setembro de 2026 até novo aviso; confirme antes de visitar',
      price: 'Adultos cerca de AED 149; crianças AED 95 (4 a 17 anos); menores de 4 anos grátis',
      climateNote: 'Totalmente coberto',
      bestTime: 'Manhãs de dia útil (10h–11h), com menos gente e melhor luz para fotos',
      description: 'Um edifício em formato de toro, revestido em caligrafia árabe, amplamente considerado um dos mais bonitos do mundo, com sete andares de exposições imersivas sobre viagens espaciais, biotecnologia, soluções climáticas e o cotidiano de décadas no futuro — mais uma experiência do que um museu tradicional.',
      history: 'Inaugurado em fevereiro de 2022 pela Dubai Future Foundation, concebido como um híbrido entre museu, laboratório de inovação e centro de pesquisa, em vez de um acervo de artefatos históricos.',
      funFacts: [
        'A fachada externa é gravada com caligrafia árabe citando o Sheikh Mohammed bin Rashid Al Maktoum.',
        'O nível 5 leva os visitantes a bordo de uma estação espacial fictícia de 2071, a OSS Hope.',
        'Frequentemente eleito pelos visitantes a melhor atração de Dubai depois do Burj Khalifa.'
      ]
    }
  },
{
    id: 'dubai-frame', category: 'landmarks-shopping', icon: 'crop',
    lat: 25.2354522, lng: 55.3003409,
    address: 'Zabeel Park, Gate 4, Sheikh Rashid Rd, Dubai',
    image: null,
    en: {
      name: 'Dubai Frame',
      hours: 'Daily 9:00 AM–9:00 PM (last entry 8:30 PM); Ramadan hours may shorten to 11 AM–7 PM',
      price: 'Around AED 52–53 for adults; under 3 and People of Determination free',
      climateNote: 'Mix of indoor galleries and an outdoor-facing glass sky bridge',
      bestTime: 'Early morning or sunset for the clearest views and best photos',
      description: 'A 150-metre gold-toned picture frame straddling Zabeel Park, with a glass-floored sky bridge at the top that literally frames Old Dubai (Deira) on one side and the glass towers of New Dubai on the other, plus a multimedia gallery on the city\'s past and imagined future.',
      history: 'Completed in 2018 at a reported cost of around AED 160 million, it was designed as a symbolic bridge connecting Dubai\'s history with its ambitions.',
      funFacts: [
        'At 150.24 metres tall and about 95 metres wide, it\'s recognised as the world\'s largest picture frame.',
        'The glass floor on the sky bridge is a popular (if nerve-testing) photo spot.',
        'A panoramic glass elevator carries visitors back down through the "future gallery."'
      ]
    },
    pt: {
      name: 'Dubai Frame',
      hours: 'Diariamente 9h–21h (última entrada às 20h30); horário do Ramadã pode ser reduzido para 11h–19h',
      price: 'Cerca de AED 52–53 para adultos; menores de 3 anos e Pessoas com Deficiência grátis',
      climateNote: 'Combinação de galerias cobertas e uma passarela de vidro voltada para o exterior',
      bestTime: 'Início da manhã ou pôr do sol, para vistas mais claras e melhores fotos',
      description: 'Uma moldura dourada de 150 metros erguida sobre o Zabeel Park, com uma passarela de vidro no topo que literalmente emoldura a Dubai Antiga (Deira) de um lado e as torres de vidro da Nova Dubai do outro, além de uma galeria multimídia sobre o passado e o futuro imaginado da cidade.',
      history: 'Concluída em 2018, com custo estimado em AED 160 milhões, foi projetada como uma ponte simbólica conectando a história de Dubai às suas ambições.',
      funFacts: [
        'Com 150,24 metros de altura e cerca de 95 metros de largura, é reconhecida como a maior moldura do mundo.',
        'O piso de vidro na passarela é um ponto de fotos popular (e desafiador para quem tem medo de altura).',
        'Um elevador panorâmico de vidro leva os visitantes de volta ao térreo passando pela "galeria do futuro."'
      ]
    }
  },
{
    id: 'jumeirah-mosque', category: 'culture-heritage', icon: 'mosque',
    lat: 25.2338097, lng: 55.2654913,
    address: 'Jumeirah Beach Road, Jumeirah 1, Dubai',
    image: null,
    en: {
      name: 'Jumeirah Mosque',
      hours: 'Guided tours Saturday–Thursday, 10:00 AM & 2:00 PM (registration opens 30 minutes prior); closed Fridays',
      price: 'Around AED 45 per person (includes light Emirati refreshments)',
      climateNote: 'Fully indoor for the tour, with an outdoor courtyard approach',
      bestTime: 'The 10:00 AM session, for cooler temperatures and a smaller group',
      description: 'The only mosque in Dubai that welcomes non-Muslim visitors on a regular guided-tour basis, offering an accessible, respectful introduction to Islamic architecture, prayer, and Emirati customs inside a strikingly detailed cream-stone building with twin minarets.',
      history: 'Built in the late 1970s in medieval Fatimid style, it has run guided visits for over two decades through the Sheikh Mohammed Centre for Cultural Understanding\'s "Open Doors, Open Minds" program.',
      funFacts: [
        'The mosque can hold around 1,200 worshippers.',
        'Visitors can ask any question about Islam and Emirati culture during the Q&A portion of the tour.',
        'Modest dress is required; headscarves for women are available to borrow on site.'
      ]
    },
    pt: {
      name: 'Jumeirah Mosque',
      hours: 'Visitas guiadas de sábado a quinta, às 10h e 14h (inscrição começa 30 minutos antes); fechado às sextas-feiras',
      price: 'Cerca de AED 45 por pessoa (inclui um pequeno lanche emirati)',
      climateNote: 'Totalmente coberto durante a visita, com acesso por um pátio externo',
      bestTime: 'A sessão das 10h, por conta de temperaturas mais amenas e grupos menores',
      description: 'A única mesquita de Dubai que recebe visitantes não muçulmanos regularmente em visitas guiadas, oferecendo uma introdução acessível e respeitosa à arquitetura islâmica, à oração e aos costumes emiratis dentro de um edifício de pedra clara ricamente detalhado, com dois minaretes gêmeos.',
      history: 'Construída no final da década de 1970 em estilo fatímida medieval, promove visitas guiadas há mais de duas décadas através do programa "Open Doors, Open Minds" do Sheikh Mohammed Centre for Cultural Understanding.',
      funFacts: [
        'A mesquita comporta cerca de 1.200 fiéis.',
        'Os visitantes podem fazer qualquer pergunta sobre o islamismo e a cultura emirati durante a parte de perguntas e respostas da visita.',
        'É exigido traje modesto; lenços de cabeça para mulheres estão disponíveis para empréstimo no local.'
      ]
    }
  },
{
    id: 'the-opus-zaha-hadid', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.188685, lng: 55.267073,
    address: 'The Opus by Omniyat, Marasi Drive, Business Bay, Dubai',
    image: null,
    en: {
      name: 'The Opus by Zaha Hadid',
      hours: 'Building/lobby accessible during normal hotel/restaurant hours; best viewed anytime from outside, illuminated after dark',
      price: 'Free to view exterior and lobby; restaurant and rooftop bar prices vary by venue',
      climateNote: 'Outdoor viewing with an air-conditioned interior (ME Dubai hotel) to explore',
      bestTime: 'After sunset, when the carved-out central void is lit with a dynamic LED display',
      description: 'The only building in Dubai designed by the late Zaha Hadid — two glass towers fused into a single cube shape with a dramatic eight-storey void carved through the centre, housing the ME Dubai hotel, restaurants including ROKA, and a rooftop bar.',
      history: 'Designed by Hadid in 2007 and completed in 2020, it\'s the only hotel where she created both the architecture and the interiors.',
      funFacts: [
        'The central void is illuminated at night by individually controllable LED panels.',
        'It sits directly on the Dubai Water Canal, close to Burj Khalifa and Business Bay.',
        'Furniture throughout the hotel was custom-designed by Zaha Hadid Design.'
      ]
    },
    pt: {
      name: 'The Opus by Zaha Hadid',
      hours: 'Lobby e áreas comuns acessíveis nos horários normais do hotel/restaurantes; pode ser admirado de fora a qualquer hora, iluminado após o anoitecer',
      price: 'Gratuito para ver a fachada e o lobby; preços de restaurantes e do rooftop bar variam por local',
      climateNote: 'Vista externa ao ar livre, com interior climatizado (hotel ME Dubai) para explorar',
      bestTime: 'Após o pôr do sol, quando o vão central esculpido é iluminado por um jogo dinâmico de LEDs',
      description: 'O único edifício de Dubai projetado pela falecida Zaha Hadid — duas torres de vidro fundidas em formato de cubo, com um dramático vão de oito andares esculpido no centro, abrigando o hotel ME Dubai, restaurantes como o ROKA e um rooftop bar.',
      history: 'Projetado por Hadid em 2007 e concluído em 2020, é o único hotel em que ela criou tanto a arquitetura quanto os interiores.',
      funFacts: [
        'O vão central é iluminado à noite por painéis de LED controláveis individualmente.',
        'Fica bem à margem do Canal de Água de Dubai, perto do Burj Khalifa e da Business Bay.',
        'Os móveis do hotel foram desenhados sob medida pela Zaha Hadid Design.'
      ]
    }
  },
{
    id: 'dubai-opera', category: 'culture-heritage', icon: 'theater_comedy',
    lat: 25.195617, lng: 55.271879,
    address: 'Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai, Dubai',
    image: null,
    en: {
      name: 'Dubai Opera',
      hours: 'Varies by performance schedule; guided architecture tours available (check current tour calendar)',
      price: 'Architecture tour around AED 100 per adult; show tickets vary widely by event',
      climateNote: 'Fully indoor',
      bestTime: 'Book a rooftop terrace dinner or tour before an evening show for skyline views at sunset',
      description: 'A dhow-shaped performance venue in the heart of Downtown Dubai that converts between theatre, concert hall, and flat-floor event space, hosting everything from opera and ballet to stand-up comedy and major touring musicals.',
      history: 'Designed by architect Janus Rostock of Atkins and opened in August 2016, it was conceived as a nod to Dubai\'s maritime trading past, shaped like a traditional wooden dhow.',
      funFacts: [
        'Its "Symphony" chandelier, by Czech company LASVIT, greets visitors in the main lobby.',
        'The venue can seat around 2,000 guests in theatre mode.',
        'Guided behind-the-scenes tours take visitors under the stage and into the auditorium.'
      ]
    },
    pt: {
      name: 'Dubai Opera',
      hours: 'Varia conforme a programação de espetáculos; visitas guiadas de arquitetura disponíveis (confira o calendário atual)',
      price: 'Visita arquitetônica cerca de AED 100 por adulto; ingressos para espetáculos variam bastante conforme o evento',
      climateNote: 'Totalmente coberto',
      bestTime: 'Reserve um jantar no terraço ou uma visita guiada antes de um espetáculo noturno para ver o skyline ao pôr do sol',
      description: 'Um espaço cênico em formato de dhow no coração da Downtown Dubai, que se transforma entre teatro, sala de concertos e espaço plano para eventos, recebendo desde ópera e balé até stand-up comedy e grandes musicais em turnê.',
      history: 'Projetado pelo arquiteto Janus Rostock, da Atkins, e inaugurado em agosto de 2016, foi concebido como uma referência ao passado marítimo comercial de Dubai, com formato de dhow, o barco de madeira tradicional.',
      funFacts: [
        'Seu lustre "Symphony", da empresa tcheca LASVIT, recebe os visitantes no lobby principal.',
        'O espaço pode acomodar cerca de 2.000 pessoas no modo teatro.',
        'Visitas guiadas nos bastidores levam os visitantes por baixo do palco e até o auditório.'
      ]
    }
  },
{
    id: 'ain-dubai-bluewaters', category: 'landmarks-shopping', icon: 'attractions',
    lat: 25.0801674, lng: 55.1238494,
    address: 'Bluewaters Island, Marsa Dubai, Dubai',
    image: null,
    en: {
      name: 'Ain Dubai & Bluewaters Plaza',
      hours: 'Bluewaters Island/plaza open daily; Ain Dubai\'s ride operation status is UNCONFIRMED as of mid-2026 — sources conflict, verify current status before publishing or visiting',
      price: 'Plaza and promenade free to walk; Ain Dubai ticket (when operating) reportedly from around AED 130+; Madame Tussauds Dubai (independent of the wheel) around AED 120–145',
      climateNote: 'Fully outdoor plaza and promenade; air-conditioned cabins when the wheel operates',
      bestTime: 'Sunset, for the walk along the JBR-facing promenade regardless of the wheel\'s operating status',
      description: 'The world\'s tallest observation wheel (250m) anchors Bluewaters Island, a compact, walkable plaza just off Dubai Marina and JBR with restaurants, shops, Madame Tussauds Dubai, and a waterfront promenade with sea views back toward the mainland.',
      history: 'Ain Dubai opened in October 2021 as the centrepiece of Bluewaters Island\'s development by Meraas, surpassing the Las Vegas High Roller as the world\'s tallest Ferris wheel.',
      funFacts: [
        'A full rotation takes about 38 minutes.',
        'The wheel has had repeated operational interruptions since opening — always check current status before planning a ride around it.',
        'Even without the wheel running, the island\'s promenade and dining scene are worth the walk from JBR.'
      ]
    },
    pt: {
      name: 'Ain Dubai & Bluewaters Plaza',
      hours: 'Ilha/praça Bluewaters aberta diariamente; o status operacional da roda-gigante Ain Dubai NÃO ESTÁ CONFIRMADO em meados de 2026 — as fontes divergem, confirme a situação atual antes de publicar ou visitar',
      price: 'Praça e orla gratuitas para caminhar; ingresso da Ain Dubai (quando em operação) por cerca de AED 130+; Madame Tussauds Dubai (independente da roda-gigante) cerca de AED 120–145',
      climateNote: 'Praça e orla totalmente ao ar livre; cabines climatizadas quando a roda está em operação',
      bestTime: 'Pôr do sol, para a caminhada pela orla voltada para o JBR, independentemente do status operacional da roda',
      description: 'A maior roda-gigante de observação do mundo (250 m) é o ponto central da Bluewaters Island, uma praça compacta e caminhável logo ao lado de Dubai Marina e JBR, com restaurantes, lojas, o Madame Tussauds Dubai e uma orla com vista para o mar em direção ao continente.',
      history: 'A Ain Dubai foi inaugurada em outubro de 2021 como peça central do desenvolvimento da Bluewaters Island pela Meraas, superando a High Roller de Las Vegas como a maior roda-gigante do mundo.',
      funFacts: [
        'Uma rotação completa leva cerca de 38 minutos.',
        'A roda-gigante teve interrupções operacionais recorrentes desde a inauguração — sempre confirme o status atual antes de planejar uma visita em torno dela.',
        'Mesmo sem a roda em funcionamento, a orla e a cena gastronômica da ilha valem a caminhada a partir do JBR.'
      ]
    }
  },
{
    id: 'etihad-museum', category: 'culture-heritage', icon: 'auto_stories',
    lat: 25.2412959, lng: 55.2692991,
    address: 'Jumeirah Beach Road, Jumeirah 1, Dubai (adjacent to Union House)',
    image: null,
    en: {
      name: 'Etihad Museum',
      hours: 'Daily 10:00 AM–8:00 PM (last entry 7:00 PM)',
      price: 'Adults AED 25; children (3–12) AED 10; under 3 free',
      climateNote: 'Fully indoor',
      bestTime: 'Morning, for a quieter visit before tour groups arrive',
      description: 'A compact, focused history museum built beside Union House, the original building where the seven Trucial States signed the founding declaration of the UAE on 2 December 1971. Eight interactive pavilions trace the political story of unification through original documents, film, and multimedia.',
      history: 'Opened in 2017, designed by Canadian firm Moriyama & Teshima with a curving white canopy inspired by the manuscript and pens used at the signing ceremony.',
      funFacts: [
        'Seven columns supporting the canopy symbolise the seven pens used to sign the founding treaty.',
        'The original Union House building is preserved and included in the visit.',
        'A rooftop café serves camel-milk ice cream alongside traditional sweets.'
      ]
    },
    pt: {
      name: 'Etihad Museum',
      hours: 'Diariamente 10h–20h (última entrada às 19h)',
      price: 'Adultos AED 25; crianças (3–12) AED 10; menores de 3 anos grátis',
      climateNote: 'Totalmente coberto',
      bestTime: 'Manhã, para uma visita mais tranquila antes da chegada dos grupos de turistas',
      description: 'Um museu de história compacto e focado, construído ao lado da Union House, o edifício original onde os sete Estados da Trégua assinaram a declaração fundadora dos Emirados Árabes Unidos em 2 de dezembro de 1971. Oito pavilhões interativos narram a história política da unificação por meio de documentos originais, filmes e multimídia.',
      history: 'Inaugurado em 2017, projetado pela firma canadense Moriyama & Teshima, com uma cobertura branca curva inspirada no manuscrito e nas canetas usadas na cerimônia de assinatura.',
      funFacts: [
        'Sete colunas que sustentam a cobertura simbolizam as sete canetas usadas para assinar o tratado fundador.',
        'O edifício original da Union House foi preservado e faz parte da visita.',
        'Um café no terraço serve sorvete de leite de camelo junto com doces tradicionais.'
      ]
    }
  },
{
    id: 'dubai-creek-gold-spice-souq', category: 'culture-heritage', icon: 'storefront',
    lat: 25.2048493, lng: 55.2707828,
    address: 'Deira & Bur Dubai, either side of Dubai Creek — Gold Souq: Sikkat Al Khail St, Deira; Spice Souq: Al Ras, Deira',
    image: null,
    en: {
      name: 'Dubai Creek, Gold Souq & Spice Souq',
      hours: 'Creek/abra crossings run through the day; souq shops generally Sat–Thu 10:00 AM–10:00 PM (many close 1–4 PM), Fri 4:00 PM–10:00 PM',
      price: 'Abra crossing about AED 1 each way; browsing both souqs is free (goods priced individually, haggling expected)',
      climateNote: 'Fully outdoor crossing and souq lanes, partially covered market walkways',
      bestTime: 'Late afternoon into evening, when it\'s cooler and the souqs are liveliest',
      description: 'A classic Old Dubai combination: cross the creek by traditional wooden abra between Bur Dubai and Deira, then wander the fragrant alleys of the Spice Souq before continuing a short walk to the Gold Souq, one of the largest gold markets in the world with hundreds of jewellery retailers.',
      history: 'Dubai Creek was the city\'s original trading artery, and the abra crossing predates the bridges and tunnels that now also connect the two banks; the souqs grew from that same centuries-old trade route in pearls, spices, and precious metals.',
      funFacts: [
        'The abra ride costs around AED 1 — one of the cheapest and most authentic experiences in the city.',
        'The Gold Souq\'s covered wooden arcades date back to the early 1900s.',
        'Bargaining on the "making charge" (labour cost) at the Gold Souq is expected — the gold price itself is fixed daily.'
      ]
    },
    pt: {
      name: 'Dubai Creek, Gold Souq & Spice Souq',
      hours: 'As travessias de abra funcionam ao longo do dia; as lojas dos souqs geralmente abrem de sáb a qui, 10h–22h (muitas fecham das 13h às 16h), sex 16h–22h',
      price: 'Travessia de abra cerca de AED 1 por trajeto; passear pelos dois souqs é gratuito (produtos com preço individual, negociação esperada)',
      climateNote: 'Travessia e vielas dos souqs ao ar livre, com passagens de mercado parcialmente cobertas',
      bestTime: 'Fim da tarde até a noite, quando está mais fresco e os souqs estão mais animados',
      description: 'Uma combinação clássica da Dubai Antiga: atravesse o creek em um abra de madeira tradicional entre Bur Dubai e Deira, depois caminhe pelas vielas perfumadas do Spice Souq antes de seguir a pé até o Gold Souq, um dos maiores mercados de ouro do mundo, com centenas de joalherias.',
      history: 'O Dubai Creek era a artéria comercial original da cidade, e a travessia de abra é anterior às pontes e túneis que hoje também ligam as duas margens; os souqs surgiram dessa mesma rota comercial secular de pérolas, especiarias e metais preciosos.',
      funFacts: [
        'A travessia de abra custa cerca de AED 1 — uma das experiências mais baratas e autênticas da cidade.',
        'As arcadas de madeira cobertas do Gold Souq datam do início dos anos 1900.',
        'Negociar a "taxa de fabricação" (mão de obra) no Gold Souq é esperado — o preço do ouro em si é fixado diariamente.'
      ]
    }
  },
{
    id: 'alserkal-avenue', category: 'culture-heritage', icon: 'palette',
    lat: 25.1431157, lng: 55.2246127,
    address: 'Street 8, Al Quoz Industrial Area 1, Dubai',
    image: null,
    en: {
      name: 'Alserkal Avenue',
      hours: 'Generally Sat–Thu 10:00 AM–7:00 PM; individual galleries and cafés vary, closed Fridays at most venues',
      price: 'Free entry to the district and galleries',
      climateNote: 'Mostly indoor galleries connected by open-air walkways between warehouses',
      bestTime: 'November–March for pleasant outdoor walking between spaces, or during evening art nights and openings',
      description: 'A converted industrial warehouse district in Al Quoz that has become Dubai\'s leading contemporary art hub — over 70 galleries, studios, and creative spaces, plus an indie cinema, cafés, and a concept bookstore, all off the typical tourist track.',
      history: 'Founded in 2008 by Abdelmonem Bin Eisa Alserkal, it grew from a single gallery into a 500,000+ sq ft cultural district through expansions in 2012 and 2015.',
      funFacts: [
        'Cinema Akil, tucked inside the avenue, screens independent and arthouse films.',
        'The district regularly hosts talks, panel discussions, and gallery-night events.',
        'Many visitors are surprised the address is a working industrial zone — the galleries are hidden inside otherwise plain warehouses.'
      ]
    },
    pt: {
      name: 'Alserkal Avenue',
      hours: 'Geralmente sáb a qui, 10h–19h; galerias e cafés individuais variam, a maioria fecha às sextas-feiras',
      price: 'Entrada gratuita ao distrito e às galerias',
      climateNote: 'Galerias majoritariamente cobertas, ligadas por passagens ao ar livre entre os galpões',
      bestTime: 'Novembro a março, para caminhadas agradáveis entre os espaços, ou durante as noites de arte e vernissages',
      description: 'Um distrito de galpões industriais reconvertido em Al Quoz que se tornou o principal polo de arte contemporânea de Dubai — mais de 70 galerias, ateliês e espaços criativos, além de um cinema independente, cafés e uma livraria conceitual, fora do circuito turístico habitual.',
      history: 'Fundado em 2008 por Abdelmonem Bin Eisa Alserkal, cresceu de uma única galeria para um distrito cultural de mais de 46.000 m² através de expansões em 2012 e 2015.',
      funFacts: [
        'O Cinema Akil, dentro da avenida, exibe filmes independentes e de arte.',
        'O distrito promove regularmente palestras, debates e noites de vernissage.',
        'Muitos visitantes se surpreendem ao descobrir que o endereço fica em uma zona industrial em atividade — as galerias estão escondidas dentro de galpões aparentemente comuns.'
      ]
    }
  },
{
    id: 'one-zaabeel-the-link', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.2277681, lng: 55.2908356,
    address: 'One Za\'abeel, Al Saada Street, Za\'abeel, Dubai',
    image: null,
    en: {
      name: 'One Za\'abeel & The Link',
      hours: 'Restaurants and bars within The Link keep individual hours; check specific venue before visiting',
      price: 'Free to view the exterior; dining/bar venues inside The Link range from casual to fine-dining prices',
      climateNote: 'Fully indoor for The Link\'s restaurants and bars; viewed from outside at street level',
      bestTime: 'Evening, when the twin towers and cantilevered bridge are lit',
      description: 'Two glass towers connected by The Link, a 230-metre horizontal sky concourse suspended 100 metres above a six-lane highway — the world\'s longest cantilevered structure. The Link houses restaurants (including Nobu and Michelin-starred La Dame de Pic), bars, an infinity pool, and viewing points over the city.',
      history: 'Designed by Japanese firm Nikken Sekkei and developed by Ithra Dubai, the project was completed in December 2023 and officially opened in February 2024, earning the Guinness World Record for longest cantilevered building the same year.',
      funFacts: [
        'The Link\'s cantilever extends over 67 metres beyond the main tower with no support underneath.',
        'It hosts the UAE\'s longest suspended rooftop infinity pool.',
        'A section called the "Bridge of Love" lets visitors attach personalised digital padlocks.'
      ]
    },
    pt: {
      name: 'One Za\'abeel & The Link',
      hours: 'Restaurantes e bares dentro do The Link têm horários próprios; confirme o local específico antes de visitar',
      price: 'Gratuito para ver a fachada; restaurantes e bares dentro do The Link variam de preços informais a alta gastronomia',
      climateNote: 'Totalmente coberto nos restaurantes e bares do The Link; visto de fora ao nível da rua',
      bestTime: 'À noite, quando as torres gêmeas e a ponte em balanço estão iluminadas',
      description: 'Duas torres de vidro conectadas pelo The Link, um passeio panorâmico horizontal de 230 metros suspenso a 100 metros acima de uma rodovia de seis pistas — a maior estrutura em balanço do mundo. O The Link abriga restaurantes (incluindo o Nobu e o La Dame de Pic, com estrela Michelin), bares, uma piscina infinita e pontos de observação da cidade.',
      history: 'Projetado pela firma japonesa Nikken Sekkei e desenvolvido pela Ithra Dubai, o projeto foi concluído em dezembro de 2023 e inaugurado oficialmente em fevereiro de 2024, conquistando o recorde mundial do Guinness de maior edifício em balanço no mesmo ano.',
      funFacts: [
        'O balanço do The Link se estende por mais de 67 metros além da torre principal, sem apoio embaixo.',
        'Abriga a maior piscina infinita suspensa em telhado dos Emirados.',
        'Uma seção chamada "Bridge of Love" permite que os visitantes prendam cadeados digitais personalizados.'
      ]
    }
  },
{
    id: 'cayan-tower', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.087033, lng: 55.1449383,
    address: 'Al Sharta Street, Dubai Marina, Dubai',
    image: null,
    en: {
      name: 'Cayan Tower',
      hours: 'Viewed from outside anytime; it\'s a residential tower with no public observation access',
      price: 'Free to view from Marina Walk',
      climateNote: 'Fully outdoor viewing along the promenade',
      bestTime: 'Late afternoon or evening, walking the Marina Walk promenade when the tower catches the light',
      description: 'A 306-metre residential skyscraper in Dubai Marina, instantly recognisable for its 90-degree helical twist — each of its 73 identical floor plates rotates 1.2 degrees from the one below, creating a spiralling silhouette against the waterfront skyline.',
      history: 'Designed by Skidmore, Owings & Merrill — the same firm behind Burj Khalifa — and completed in 2013, when it became the world\'s tallest twisted tower.',
      funFacts: [
        'The twist isn\'t just visual: it reduces wind load and solar heat gain compared to a straight tower of the same height.',
        'French free climber Alain Robert ("Spiderman") scaled it in a widely covered stunt.',
        'It sits right at the start of Marina Walk, making it an easy stop on a waterfront stroll.'
      ]
    },
    pt: {
      name: 'Cayan Tower',
      hours: 'Pode ser vista de fora a qualquer hora; é uma torre residencial sem acesso público a observatório',
      price: 'Gratuito para ver a partir do Marina Walk',
      climateNote: 'Vista totalmente ao ar livre ao longo da orla',
      bestTime: 'Fim de tarde ou noite, caminhando pelo Marina Walk quando a torre pega a luz',
      description: 'Um arranha-céu residencial de 306 metros na Dubai Marina, instantaneamente reconhecível por seu giro helicoidal de 90 graus — cada um de seus 73 andares idênticos gira 1,2 grau em relação ao andar abaixo, criando uma silhueta espiralada contra o horizonte da orla.',
      history: 'Projetada pela Skidmore, Owings & Merrill — o mesmo escritório por trás do Burj Khalifa — e concluída em 2013, quando se tornou a torre torcida mais alta do mundo.',
      funFacts: [
        'O giro não é apenas visual: reduz a carga de vento e o ganho de calor solar em comparação com uma torre reta da mesma altura.',
        'O escalador livre francês Alain Robert ("Homem-Aranha") escalou a torre em uma manobra amplamente divulgada.',
        'Fica bem no início do Marina Walk, tornando-a uma parada fácil durante um passeio pela orla.'
      ]
    }
  },
{
    id: 'burj-al-arab-view', category: 'landmarks-shopping', icon: 'sailing',
    lat: 25.1166897, lng: 55.1363182,
    address: 'Jumeirah Beach Road, Umm Suqeim, Dubai (viewed from Jumeirah Beach or Umm Suqeim Beach)',
    image: null,
    en: {
      name: 'Burj Al Arab (View)',
      hours: 'Public beaches with views are open daily; the hotel itself is accessible only with a paid reservation',
      price: 'Free to view from public beaches; entering the hotel requires booking dining or afternoon tea (from roughly AED 500+ per person)',
      climateNote: 'Fully outdoor viewing from the beach',
      bestTime: 'Sunset, when the sail-shaped silhouette is lit against the sky',
      description: 'Dubai\'s sail-shaped icon, built on its own artificial island 280 metres offshore and connected to the mainland by a private, guarded bridge. Non-guests can\'t walk up to it directly, but it\'s clearly visible — and a classic photo subject — from Jumeirah Beach and Umm Suqeim Beach just to the north.',
      history: 'Opened in 1999 and operated by Jumeirah Group, it was designed to resemble the sail of a dhow and quickly became one of the most photographed buildings in the world.',
      funFacts: [
        'Often called a "seven-star" hotel in popular use, though its official rating tops out at five stars.',
        'The only way in as a non-guest is booking afternoon tea, a meal, or a cocktail at one of its restaurants or the Skyview Bar.',
        'Umm Suqeim Beach, a short walk north, is a free public beach with an unobstructed view.'
      ]
    },
    pt: {
      name: 'Burj Al Arab (Vista)',
      hours: 'Praias públicas com vista abertas diariamente; o hotel em si só é acessível mediante reserva paga',
      price: 'Gratuito para ver das praias públicas; entrar no hotel requer reserva de refeição ou chá da tarde (a partir de cerca de AED 500+ por pessoa)',
      climateNote: 'Vista totalmente ao ar livre a partir da praia',
      bestTime: 'Pôr do sol, quando a silhueta em forma de vela fica iluminada contra o céu',
      description: 'O ícone em formato de vela de Dubai, construído em sua própria ilha artificial a 280 metros da costa e conectado ao continente por uma ponte privada e vigiada. Não hóspedes não podem se aproximar diretamente, mas o hotel é claramente visível — e um clássico tema de fotos — a partir da Jumeirah Beach e da Umm Suqeim Beach, um pouco ao norte.',
      history: 'Inaugurado em 1999 e operado pelo Jumeirah Group, foi projetado para lembrar a vela de um dhow e rapidamente se tornou um dos edifícios mais fotografados do mundo.',
      funFacts: [
        'Frequentemente chamado de hotel "sete estrelas" popularmente, embora sua classificação oficial seja de cinco estrelas.',
        'A única forma de entrar sem ser hóspede é reservando um chá da tarde, uma refeição ou um drink em um de seus restaurantes ou no Skyview Bar.',
        'A Umm Suqeim Beach, uma curta caminhada ao norte, é uma praia pública gratuita com vista desobstruída.'
      ]
    }
  },
{
    id: 'la-perle-by-dragone', category: 'culture-heritage', icon: 'theater_comedy',
    lat: 25.1841959, lng: 55.2543284,
    address: 'Al Habtoor City, 260 Sheikh Zayed Road, Dubai',
    image: null,
    en: {
      name: 'La Perle by Dragone',
      hours: 'Shows Tue–Sat, typically 6:30 PM & 9:00 PM (single 6:30 PM show June–Sept); no intermission, about 90 minutes',
      price: 'From around AED 159 (Bronze) up to AED 799 (VIP), across five seating tiers',
      climateNote: 'Fully indoor, purpose-built theatre',
      bestTime: 'Either showtime works equally well; book ahead as popular dates sell out',
      description: 'Dubai\'s only permanent live show: a purpose-built 1,300-seat aqua-theatre where a cast of 65 international performers combines aerial acrobatics, high dives, motorbike stunts, and a stage that floods and drains within seconds.',
      history: 'Created by Franco Dragone, the director behind several landmark Cirque du Soleil productions, and opened in 2017 at Al Habtoor City as the region\'s first resident large-scale live spectacle.',
      funFacts: [
        'The stage can hold and drain a full pool of water in a matter of seconds.',
        'Front-row Bronze/Silver seats sit in the "splash zone" during aquatic sequences.',
        'All ticket tiers include complimentary popcorn.'
      ]
    },
    pt: {
      name: 'La Perle by Dragone',
      hours: 'Espetáculos de terça a sábado, normalmente às 18h30 e 21h (sessão única às 18h30 de junho a setembro); sem intervalo, cerca de 90 minutos',
      price: 'A partir de cerca de AED 159 (Bronze) até AED 799 (VIP), em cinco categorias de assentos',
      climateNote: 'Totalmente coberto, teatro construído sob medida',
      bestTime: 'Qualquer um dos horários funciona bem; reserve com antecedência, pois datas populares esgotam',
      description: 'O único espetáculo ao vivo permanente de Dubai: um aqua-teatro construído sob medida com 1.300 lugares, onde um elenco de 65 artistas internacionais combina acrobacias aéreas, mergulhos de altura, manobras de motocicleta e um palco que enche e esvazia de água em segundos.',
      history: 'Criado por Franco Dragone, diretor por trás de diversas produções emblemáticas do Cirque du Soleil, e inaugurado em 2017 no Al Habtoor City como o primeiro grande espetáculo ao vivo residente da região.',
      funFacts: [
        'O palco consegue encher e esvaziar uma piscina inteira em poucos segundos.',
        'Assentos da primeira fila (Bronze/Silver) ficam na "zona de respingo" durante as sequências aquáticas.',
        'Todas as categorias de ingresso incluem pipoca de cortesia.'
      ]
    }
  },
{
    id: 'xva-art-hotel-cafe', category: 'culture-heritage', icon: 'palette',
    lat: 25.2640952, lng: 55.2999195,
    address: 'Al Fahidi Street, Al Fahidi Historical Neighbourhood, Bur Dubai, Dubai',
    image: null,
    en: {
      name: 'XVA Art Hotel & Café',
      hours: 'Café daily 7:00 AM–10:00 PM (later on weekends); gallery open during café hours',
      price: 'Free to browse the gallery and courtyard; café meals typically AED 40–90',
      climateNote: 'Open-air courtyard with covered seating, plus indoor gallery space',
      bestTime: 'Late morning for a quiet breakfast in the courtyard before the neighbourhood gets busy',
      description: 'A small boutique hotel tucked inside Al Fahidi\'s maze of alleyways, built around a leafy courtyard with a resident art gallery and a vegetarian-friendly café — often called Dubai\'s best-kept secret and a favourite pause point after wandering the historical neighbourhood.',
      history: 'Opened in 2003 in the former home of the Seddiqi family (Dubai\'s Rolex dealers) by founder Mona Hauser, blending the traditional wind-tower architecture of Al Fahidi with contemporary Middle Eastern art.',
      funFacts: [
        'Each guest room was individually designed by a different local artist.',
        'The on-site XVA Gallery rotates exhibitions of contemporary Middle Eastern artists.',
        'The café is fully vegetarian and vegan-friendly, unusual for Old Dubai\'s food scene.'
      ]
    },
    pt: {
      name: 'XVA Art Hotel & Café',
      hours: 'Café diariamente das 7h às 22h (mais tarde nos fins de semana); galeria aberta no horário do café',
      price: 'Gratuito para visitar a galeria e o pátio; refeições no café geralmente entre AED 40–90',
      climateNote: 'Pátio ao ar livre com assentos cobertos, além de espaço de galeria interno',
      bestTime: 'Final da manhã, para um café da manhã tranquilo no pátio antes do bairro ficar movimentado',
      description: 'Um pequeno hotel boutique escondido no labirinto de vielas de Al Fahidi, construído em torno de um pátio arborizado com uma galeria de arte residente e um café vegetariano — frequentemente chamado de segredo mais bem guardado de Dubai e uma parada favorita depois de explorar o bairro histórico.',
      history: 'Inaugurado em 2003 na antiga residência da família Seddiqi (revendedores da Rolex em Dubai) pela fundadora Mona Hauser, unindo a arquitetura tradicional de torres de vento de Al Fahidi à arte contemporânea do Oriente Médio.',
      funFacts: [
        'Cada quarto do hotel foi desenhado individualmente por um artista local diferente.',
        'A galeria XVA, no local, alterna exposições de artistas contemporâneos do Oriente Médio.',
        'O café é totalmente vegetariano e vegano, algo incomum na cena gastronômica da Dubai Antiga.'
      ]
    }
  },
{
    id: 'jumeirah-archaeological-site', category: 'culture-heritage', icon: 'auto_stories',
    lat: 25.1966106, lng: 55.2421488,
    address: 'Jumeirah Street, Jumeirah, Dubai',
    image: null,
    en: {
      name: 'Jumeirah Archaeological Site',
      hours: 'Visitor centre generally open standard daytime hours; outdoor ruins viewable during centre hours (check current schedule)',
      price: 'Free',
      climateNote: 'Mix of indoor visitor centre and outdoor excavated ruins',
      bestTime: 'Morning, before the heat builds, to comfortably walk the open-air ruins',
      description: 'The UAE\'s oldest excavated early-Islamic settlement, an 80,000 sq m site dating to the Abbasid period (9th–11th centuries) that once sat on a caravan trade route linking India and China to Oman and Iraq. Eight buildings remain, including houses, a mosque, a marketplace, and a caravanserai.',
      history: 'Discovered and first excavated in 1969, the site is managed by the Dubai Culture & Arts Authority, with a visitor centre displaying pottery, coins, and tools recovered during excavation.',
      funFacts: [
        'The on-site mosque is among the oldest discovered in the UAE.',
        'It sat along a historic trade corridor connecting South Asia to the Gulf and Iraq.',
        'Despite its significance, it remains one of Dubai\'s least-visited attractions — genuinely quiet even on weekends.'
      ]
    },
    pt: {
      name: 'Jumeirah Archaeological Site',
      hours: 'Centro de visitantes geralmente aberto em horário comercial padrão; ruínas ao ar livre visitáveis no horário do centro (confira o cronograma atual)',
      price: 'Gratuito',
      climateNote: 'Combinação de centro de visitantes coberto e ruínas escavadas ao ar livre',
      bestTime: 'Manhã, antes do calor aumentar, para caminhar confortavelmente pelas ruínas ao ar livre',
      description: 'O assentamento islâmico mais antigo já escavado nos Emirados, um sítio de 80.000 m² que remonta ao período abássida (séculos IX a XI) e que já ficou em uma rota de caravanas ligando a Índia e a China a Omã e ao Iraque. Restam oito edificações, incluindo casas, uma mesquita, um mercado e um caravançarai.',
      history: 'Descoberto e escavado pela primeira vez em 1969, o sítio é administrado pela Dubai Culture & Arts Authority, com um centro de visitantes que exibe cerâmicas, moedas e ferramentas recuperadas nas escavações.',
      funFacts: [
        'A mesquita do local está entre as mais antigas já descobertas nos Emirados.',
        'Ficava ao longo de um corredor comercial histórico que ligava o sul da Ásia ao Golfo e ao Iraque.',
        'Apesar de sua importância, continua sendo uma das atrações menos visitadas de Dubai — genuinamente tranquila até nos fins de semana.'
      ]
    }
  },
{
    id: 'the-dubai-mall', category: 'landmarks-shopping', icon: 'storefront',
    lat: 25.1972295, lng: 55.279747,
    address: 'Financial Centre Road, Downtown Dubai, Dubai',
    image: null,
    en: {
      name: 'The Dubai Mall',
      hours: 'Sun–Wed 10:00 AM–11:00 PM (until midnight Thu–Sat); restaurants often stay open later',
      price: 'Free to enter and browse; individual stores, dining, and in-mall attractions priced separately',
      climateNote: 'Fully indoor',
      bestTime: 'Weekday mornings for the calmest browsing; evenings for the fountain shows and lit-up terraces',
      description: 'The world\'s largest shopping mall by total floor area, anchoring Downtown Dubai next to Burj Khalifa: 1,200+ stores including the region\'s largest concentration of luxury flagships, plus the Dubai Aquarium, an Olympic-size ice rink, VR Park, a life-size dinosaur skeleton, and 200+ dining options.',
      history: 'Opened in November 2008 as the commercial centrepiece of Emaar\'s Downtown Dubai masterplan, alongside Burj Khalifa and the Dubai Fountain.',
      funFacts: [
        'Draws over 100 million visitors a year, among the highest footfall of any mall on Earth.',
        'Parking is free for the first 4 hours on weekdays, 6 hours on weekends.',
        'Its outdoor terrace overlooking Burj Lake is one of the best free spots to watch the Dubai Fountain show.'
      ]
    },
    pt: {
      name: 'The Dubai Mall',
      hours: 'Dom–Qua 10h–23h (até meia-noite Qui–Sáb); restaurantes costumam ficar abertos até mais tarde',
      price: 'Gratuito para entrar e passear; lojas, restaurantes e atrações internas com preço individual',
      climateNote: 'Totalmente coberto',
      bestTime: 'Manhãs de dia útil para passear com calma; noites para os shows da fonte e terraços iluminados',
      description: 'O maior shopping center do mundo em área construída, âncora da Downtown Dubai ao lado do Burj Khalifa: mais de 1.200 lojas, incluindo a maior concentração de flagships de luxo da região, além do Dubai Aquarium, uma pista de gelo em tamanho olímpico, o VR Park, um esqueleto de dinossauro em tamanho real e mais de 200 opções gastronômicas.',
      history: 'Inaugurado em novembro de 2008 como o centro comercial do masterplan Downtown Dubai da Emaar, ao lado do Burj Khalifa e da Dubai Fountain.',
      funFacts: [
        'Recebe mais de 100 milhões de visitantes por ano, um dos maiores fluxos de qualquer shopping do mundo.',
        'O estacionamento é gratuito nas primeiras 4 horas em dias úteis e 6 horas nos fins de semana.',
        'Seu terraço externo com vista para o Burj Lake é um dos melhores pontos gratuitos para assistir ao show da Dubai Fountain.'
      ]
    }
  },
{
    id: 'souk-madinat-jumeirah', category: 'landmarks-shopping', icon: 'storefront',
    lat: 25.1331644, lng: 55.1862234,
    address: 'Jumeirah Street, Umm Suqeim, Dubai',
    image: null,
    en: {
      name: 'Souk Madinat Jumeirah',
      hours: 'Daily 10:00 AM–11:00 PM (restaurants and bars often later)',
      price: 'Free to wander; abra ride and individual shops/restaurants priced separately',
      climateNote: 'Mix of covered souk lanes and open-air waterside terraces',
      bestTime: 'Sunset, for golden light on the waterways and the best angle on Burj Al Arab',
      description: 'A modern recreation of a traditional Arabian bazaar, its winding waterways, wind towers, and lantern-lit alleys built around views of Burj Al Arab. Home to boutique shops, 20+ waterfront restaurants and bars, and traditional abra boat rides along the canals.',
      history: 'Part of the wider Madinat Jumeirah resort complex, designed to evoke old Arabia with modern infrastructure, and long positioned as one of the best places in the city to combine shopping, dining, and a Burj Al Arab photo.',
      funFacts: [
        'Several restaurant terraces along the water offer some of the most photographed Burj Al Arab views in the city.',
        'A short abra ride across the internal waterways is a popular add-on to a visit.',
        'Despite the "souk" name, most goods here are boutique and gift-shop priced rather than bargain-souk priced.'
      ]
    },
    pt: {
      name: 'Souk Madinat Jumeirah',
      hours: 'Diariamente 10h–23h (restaurantes e bares costumam ficar abertos até mais tarde)',
      price: 'Gratuito para passear; passeio de abra e lojas/restaurantes individuais com preço à parte',
      climateNote: 'Combinação de vielas cobertas do souk e terraços à beira d\'água ao ar livre',
      bestTime: 'Pôr do sol, para a luz dourada sobre os canais e o melhor ângulo do Burj Al Arab',
      description: 'Uma recriação moderna de um bazar árabe tradicional, com canais sinuosos, torres de vento e vielas iluminadas por lanternas construídas em torno das vistas do Burj Al Arab. Abriga lojas boutique, mais de 20 restaurantes e bares à beira d\'água, e passeios tradicionais de barco abra pelos canais.',
      history: 'Parte do complexo turístico mais amplo do Madinat Jumeirah, projetado para evocar a Arábia antiga com infraestrutura moderna, e há muito tempo considerado um dos melhores lugares da cidade para combinar compras, gastronomia e uma foto do Burj Al Arab.',
      funFacts: [
        'Vários terraços de restaurantes à beira d\'água oferecem algumas das vistas mais fotografadas do Burj Al Arab na cidade.',
        'Um curto passeio de abra pelos canais internos é um complemento popular à visita.',
        'Apesar do nome "souk", a maioria dos produtos aqui tem preço de loja boutique/presente, não de barganha de mercado tradicional.'
      ]
    }
  },
{
    id: 'sheikh-zayed-road', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.0699544, lng: 55.1370806,
    address: 'Sheikh Zayed Road (E11), Downtown Dubai / Trade Centre stretch, Dubai',
    image: null,
    en: {
      name: 'Sheikh Zayed Road',
      hours: 'Accessible 24/7; best experienced by car, taxi, or metro (the Red Line runs largely parallel)',
      price: 'Free to drive or walk alongside; individual buildings/attractions along the route priced separately',
      climateNote: 'Fully outdoor experience, viewed from a moving vehicle, the metro, or street level',
      bestTime: 'Evening, when the skyscrapers are lit and the road becomes a corridor of light',
      description: 'Dubai\'s primary highway and a "living exhibition" of the city\'s 21st-century architecture: the Downtown Dubai stretch alone passes Burj Khalifa, Emirates Towers, Museum of the Future, and dozens of other landmark towers in quick succession.',
      history: 'The road (E11) stretches 558km connecting Abu Dhabi to Ras Al Khaimah, but the Dubai stretch became the city\'s primary growth corridor from 1999 onward, when dozens of skyscrapers rose above 200 metres within a decade.',
      funFacts: [
        'The Dubai Metro\'s Red Line runs largely alongside it, making it possible to skyline-watch from the train.',
        'Emirates Towers, completed in 2000, were among the first buildings to define the road\'s modern skyline.',
        'Al Yaqoub Tower along the route is styled after London\'s Big Ben clock tower.'
      ]
    },
    pt: {
      name: 'Sheikh Zayed Road',
      hours: 'Acessível 24 horas; melhor experiência de carro, táxi ou metrô (a Linha Vermelha corre em grande parte paralela)',
      price: 'Gratuito para dirigir ou caminhar ao lado; edifícios e atrações individuais ao longo da rota com preço à parte',
      climateNote: 'Experiência totalmente ao ar livre, vista de um veículo em movimento, do metrô ou ao nível da rua',
      bestTime: 'Noite, quando os arranha-céus estão iluminados e a via se transforma em um corredor de luz',
      description: 'A principal rodovia de Dubai e uma "exposição viva" da arquitetura do século XXI da cidade: só o trecho da Downtown Dubai passa pelo Burj Khalifa, pelas Emirates Towers, pelo Museum of the Future e por dezenas de outras torres emblemáticas em sequência.',
      history: 'A via (E11) se estende por 558 km ligando Abu Dhabi a Ras Al Khaimah, mas o trecho de Dubai se tornou o principal corredor de crescimento da cidade a partir de 1999, quando dezenas de arranha-céus ultrapassaram 200 metros de altura em uma década.',
      funFacts: [
        'A Linha Vermelha do Metrô de Dubai corre em grande parte ao lado da via, permitindo observar o horizonte a partir do trem.',
        'As Emirates Towers, concluídas em 2000, foram um dos primeiros edifícios a definir o horizonte moderno da via.',
        'A Al Yaqoub Tower, ao longo do trajeto, tem estilo inspirado na torre do relógio Big Ben, em Londres.'
      ]
    }
  },
{
    id: 'atlantis-the-palm-building', category: 'landmarks-shopping', icon: 'apartment',
    lat: 25.130438, lng: 55.117188,
    address: 'Crescent Road, Palm Jumeirah, Dubai',
    image: null,
    en: {
      name: 'Atlantis, The Palm (Architecture)',
      hours: 'Viewable from the public Palm Jumeirah boardwalk anytime; especially striking after dark',
      price: 'Free to view from outside; entering as a non-guest requires a dining, bar, or attraction reservation',
      climateNote: 'Fully outdoor viewing from the boardwalk',
      bestTime: 'Evening, when the resort\'s 10,000+ lights are on and the twin-tower silhouette glows against the sky',
      description: 'A 1,500-room resort perched on the crescent of Palm Jumeirah, its symmetrical coral-toned twin towers linked by the Royal Bridge Suite and framed by Arabian arches, domes, and shell motifs — an Atlantean fantasy built at full architectural scale. Non-guests can\'t enter the lobby freely but can admire the exterior from the public boardwalk directly opposite.',
      history: 'Designed by WATG and completed in 2008 as the first resort to open on the man-made Palm Jumeirah island, spanning 114 acres including the Aquaventure water park.',
      funFacts: [
        'The Grand Lobby features a commissioned Dale Chihuly glass sculpture and hand-painted murals.',
        'The resort used over 120 architects and engineers from 35 consulting firms to build.',
        'It\'s visible from Palm Jumeirah Road as you drive onto the island, making it a landmark before you even arrive.'
      ]
    },
    pt: {
      name: 'Atlantis, The Palm (Arquitetura)',
      hours: 'Pode ser vista do calçadão público de Palm Jumeirah a qualquer hora; especialmente marcante à noite',
      price: 'Gratuito para ver de fora; entrar sem ser hóspede requer reserva de restaurante, bar ou atração',
      climateNote: 'Vista totalmente ao ar livre a partir do calçadão',
      bestTime: 'À noite, quando as mais de 10.000 luzes do resort estão acesas e a silhueta das torres gêmeas brilha contra o céu',
      description: 'Um resort de 1.500 quartos erguido sobre o crescente da Palm Jumeirah, com torres gêmeas simétricas em tons de coral ligadas pela Royal Bridge Suite e emolduradas por arcos árabes, cúpulas e motivos de conchas — uma fantasia atlante construída em escala arquitetônica plena. Não hóspedes não podem entrar livremente no lobby, mas podem admirar a fachada a partir do calçadão público bem em frente.',
      history: 'Projetado pela WATG e concluído em 2008 como o primeiro resort a abrir na ilha artificial de Palm Jumeirah, ocupando 46 hectares, incluindo o parque aquático Aquaventure.',
      funFacts: [
        'O Grand Lobby apresenta uma escultura de vidro encomendada a Dale Chihuly e murais pintados à mão.',
        'O resort empregou mais de 120 arquitetos e engenheiros de 35 empresas de consultoria em sua construção.',
        'É visível da Palm Jumeirah Road ao entrar na ilha, tornando-se um marco visual antes mesmo de chegar.'
      ]
    }
  },
{
    id: 'city-walk', category: 'landmarks-shopping', icon: 'storefront',
    lat: 25.2074895, lng: 55.2625253,
    address: 'Al Wasl / Al Safa Road junction, Jumeirah, Dubai',
    image: null,
    en: {
      name: 'City Walk',
      hours: 'Outdoor promenade accessible throughout the day; shops generally 10:00 AM–11 PM/midnight, restaurants often later',
      price: 'Free to walk and browse; individual shops, dining, and attractions (e.g. The Green Planet) priced separately',
      climateNote: 'Mostly open-air boulevard with some covered/indoor retail sections',
      bestTime: 'Golden hour (about an hour before sunset) into the evening, when the boulevard lights up',
      description: 'An open-air, European-style boulevard district with tree-lined streets, street art, boutique shops, and a dense restaurant and café scene. Home to The Green Planet bio-dome (an indoor tropical rainforest) and Coca-Cola Arena, and increasingly one of Dubai\'s most walkable, low-key evening-out spots.',
      history: 'Opened in phases starting February 2016 by developer Meraas, with The Green Planet added later that year and further residential and entertainment phases completed through 2019.',
      funFacts: [
        'The Green Planet houses a man-made rainforest with over 3,000 real plants and animals inside a 25-metre-tall dome.',
        'Street art and rotating installations are a signature feature — the boulevard doubles as an open-air gallery.',
        'It\'s an easy add-on to Jumeirah/Downtown itineraries, roughly a 15–20 minute walk from Dubai Mall.'
      ]
    },
    pt: {
      name: 'City Walk',
      hours: 'Calçadão externo acessível ao longo do dia; lojas geralmente das 10h às 23h/meia-noite, restaurantes costumam abrir até mais tarde',
      price: 'Gratuito para caminhar e passear; lojas, restaurantes e atrações individuais (como o The Green Planet) com preço à parte',
      climateNote: 'Boulevard majoritariamente ao ar livre, com algumas seções de varejo cobertas/internas',
      bestTime: 'Golden hour (cerca de uma hora antes do pôr do sol) até a noite, quando o boulevard se ilumina',
      description: 'Um distrito de boulevard ao ar livre, de estilo europeu, com ruas arborizadas, arte urbana, lojas boutique e uma cena densa de restaurantes e cafés. Abriga o bio-domo The Green Planet (uma floresta tropical artificial) e a Coca-Cola Arena, e vem se tornando um dos passeios noturnos mais caminháveis e despretensiosos de Dubai.',
      history: 'Inaugurado em fases a partir de fevereiro de 2016 pela incorporadora Meraas, com o The Green Planet adicionado ainda naquele ano e novas fases residenciais e de entretenimento concluídas até 2019.',
      funFacts: [
        'O The Green Planet abriga uma floresta tropical artificial com mais de 3.000 plantas e animais reais dentro de uma cúpula de 25 metros de altura.',
        'Arte urbana e instalações rotativas são uma marca registrada — o boulevard funciona como uma galeria a céu aberto.',
        'É um complemento fácil aos roteiros de Jumeirah/Downtown, a cerca de 15–20 minutos a pé do Dubai Mall.'
      ]
    }
  },
{
    id: 'dubai-marina-jbr', category: 'landmarks-shopping', icon: 'sailing',
    lat: 25.0769441, lng: 55.1341346,
    address: 'Jumeirah Beach Residence (JBR) & Dubai Marina, Dubai',
    image: null,
    en: {
      name: 'Dubai Marina & JBR (The Beach)',
      hours: 'The Walk promenade and JBR Beach open 24 hours in sections; The Beach mall generally 10:00 AM–midnight',
      price: 'Free to access the beach and promenade; dining, water sports, and sunbed rentals priced separately',
      climateNote: 'Fully outdoor beach and promenade, with indoor options at The Beach mall',
      bestTime: 'Late afternoon into evening, for the beach followed by a marina-side dinner as the towers light up',
      description: 'A dense waterfront cluster combining Dubai Marina\'s yacht-lined inland canal with JBR\'s open-sea beachfront next door: a free, Blue Flag-certified public beach, the 1.7km promenade known as The Walk, and an open-air mall with 70+ restaurants and shops.',
      history: 'Dubai Marina developed through the 2000s as one of the world\'s largest man-made marinas, with JBR built as its adjoining beachfront residential and leisure district.',
      funFacts: [
        'JBR Beach is Dubai\'s most-visited free public beach.',
        'Ain Dubai, the giant observation wheel on neighbouring Bluewaters Island, is visible from the beach but has not been operating rides consistently since 2022 — worth confirming current status before planning around it (see the Ain Dubai entry).',
        'A pedestrian bridge connects JBR to Bluewaters Island in about a 20–25 minute scenic walk.'
      ]
    },
    pt: {
      name: 'Dubai Marina & JBR (The Beach)',
      hours: 'O calçadão The Walk e a praia JBR abrem 24 horas em trechos; o shopping The Beach geralmente das 10h à meia-noite',
      price: 'Gratuito o acesso à praia e ao calçadão; gastronomia, esportes aquáticos e aluguel de espreguiçadeiras com preço à parte',
      climateNote: 'Praia e calçadão totalmente ao ar livre, com opções cobertas no shopping The Beach',
      bestTime: 'Fim de tarde até a noite, para aproveitar a praia seguida de um jantar à beira da marina enquanto as torres se iluminam',
      description: 'Um denso conjunto à beira-mar que combina o canal interno repleto de iates da Dubai Marina com a orla de mar aberto do JBR logo ao lado: uma praia pública gratuita com certificação Bandeira Azul, o calçadão de 1,7 km conhecido como The Walk, e um shopping a céu aberto com mais de 70 restaurantes e lojas.',
      history: 'A Dubai Marina se desenvolveu ao longo dos anos 2000 como uma das maiores marinas artificiais do mundo, com o JBR construído como seu distrito residencial e de lazer à beira-mar adjacente.',
      funFacts: [
        'A praia JBR é a praia pública gratuita mais visitada de Dubai.',
        'A Ain Dubai, a enorme roda-gigante de observação na vizinha Bluewaters Island, é visível da praia, mas não opera passeios de forma consistente desde 2022 — vale confirmar o status atual antes de planejar em torno dela (ver a entrada da Ain Dubai).',
        'Uma ponte de pedestres liga o JBR à Bluewaters Island em cerca de 20 a 25 minutos de caminhada panorâmica.'
      ]
    }
  },
{
    id: 'ras-al-khor-wildlife-sanctuary', category: 'nature', icon: 'pets',
    lat: 25.1960586, lng: 55.3309395,
    address: 'Ras Al Khor Road (E44), Dubai Creek mouth, Dubai',
    image: null,
    en: {
      name: 'Ras Al Khor Wildlife Sanctuary',
      hours: 'Winter (Oct–Mar) 7:30 AM–5:30 PM; summer (Apr–Sep) 6:00 AM–6:00 PM; guided free tours Sun–Thu 7:30 AM–2:00 PM',
      price: 'Free',
      climateNote: 'Fully outdoor, with covered viewing hides',
      bestTime: 'Winter months (Nov–Mar) for peak migratory bird numbers; flamingo feeding is typically visible 10 AM–4 PM',
      description: 'A protected wetland reserve just minutes from Downtown Dubai\'s skyscrapers, home to thousands of flamingos, herons, ospreys, and other migratory birds across mangroves, salt flats, and lagoons — genuinely wild nature within sight of the city\'s towers.',
      history: 'Recognised as a Ramsar Wetland of International Importance in 2015, managed by Dubai Municipality, and positioned along the East African–West Asian migratory flyway.',
      funFacts: [
        'Three free viewing hides (including the popular Flamingo Hide) let visitors get close without disturbing the birds.',
        'No booking is required for individual/family visits to the hides.',
        'Flamingo numbers peak dramatically in winter, when the wetland turns pink with thousands of birds.'
      ]
    },
    pt: {
      name: 'Ras Al Khor Wildlife Sanctuary',
      hours: 'Inverno (out–mar) 7h30–17h30; verão (abr–set) 6h–18h; visitas guiadas gratuitas dom–qui 7h30–14h',
      price: 'Gratuito',
      climateNote: 'Totalmente ao ar livre, com esconderijos de observação cobertos',
      bestTime: 'Meses de inverno (nov–mar) para o pico de aves migratórias; a alimentação dos flamingos costuma ser visível das 10h às 16h',
      description: 'Uma reserva de área úmida protegida a poucos minutos dos arranha-céus da Downtown Dubai, lar de milhares de flamingos, garças, águias-pescadoras e outras aves migratórias em meio a manguezais, salinas e lagoas — natureza genuinamente selvagem à vista das torres da cidade.',
      history: 'Reconhecida como Zona Úmida de Importância Internacional de Ramsar em 2015, administrada pela Prefeitura de Dubai, e posicionada ao longo da rota migratória Leste-Africana–Ásia Ocidental.',
      funFacts: [
        'Três esconderijos gratuitos de observação (incluindo o popular Flamingo Hide) permitem que os visitantes se aproximem sem perturbar as aves.',
        'Não é necessário reservar para visitas individuais ou em família aos esconderijos.',
        'O número de flamingos aumenta drasticamente no inverno, quando a área úmida se tinge de rosa com milhares de aves.'
      ]
    }
  },
{
    id: 'al-qudra-love-lake', category: 'nature', icon: 'favorite',
    lat: 24.8351908, lng: 55.4033872,
    address: 'Saih Al Salam, Al Marmoom Desert Conservation Reserve, near Al Qudra, Dubai',
    image: null,
    en: {
      name: 'Al Qudra Love Lake',
      hours: 'Open 24 hours',
      price: 'Free',
      climateNote: 'Fully outdoor, desert setting',
      bestTime: 'Sunset, for golden light over the water and dunes, or sunrise for cooler temperatures and softer light',
      description: 'Two interlocking heart-shaped artificial lakes set deep in the Al Qudra desert, ringed by mesquite trees and walking/cycling trails — a quiet, romantic escape from the city that\'s equally popular for family picnics, photography, and desert camping nearby.',
      history: 'Built as part of the wider Al Qudra desert conservation and recreation area within the Al Marmoom Desert Conservation Reserve, the heart shape is fully visible only from above.',
      funFacts: [
        'The two lakes together cover more than 550,000 square metres.',
        'Visitors regularly spot swans, ducks, and large koi in the lake, plus gazelles in the surrounding desert.',
        'The last stretch of road can be sandy/unpaved — a vehicle with reasonable ground clearance and good tyres is recommended.'
      ]
    },
    pt: {
      name: 'Al Qudra Love Lake',
      hours: 'Aberto 24 horas',
      price: 'Gratuito',
      climateNote: 'Totalmente ao ar livre, cenário desértico',
      bestTime: 'Pôr do sol, para a luz dourada sobre a água e as dunas, ou nascer do sol, para temperaturas mais amenas e luz mais suave',
      description: 'Dois lagos artificiais entrelaçados em formato de coração, situados no coração do deserto de Al Qudra, cercados por árvores de mesquite e trilhas para caminhada e ciclismo — um refúgio tranquilo e romântico longe da cidade, igualmente popular para piqueniques em família, fotografia e acampamento no deserto nas proximidades.',
      history: 'Construído como parte da área mais ampla de conservação e lazer do deserto de Al Qudra, dentro da Al Marmoom Desert Conservation Reserve, o formato de coração só é totalmente visível de cima.',
      funFacts: [
        'Os dois lagos juntos ocupam mais de 550.000 metros quadrados.',
        'Visitantes costumam avistar cisnes, patos e grandes carpas koi no lago, além de gazelas no deserto ao redor.',
        'O último trecho da estrada pode ser arenoso/sem pavimentação — recomenda-se um veículo com boa distância ao solo e pneus adequados.'
      ]
    }
  },
{
    id: 'dubai-garden-glow', category: 'nature', icon: 'local_florist',
    lat: 25.2367313, lng: 55.2987341,
    address: 'Zabeel Park, Dubai (gate number varies by source — Gate 3/Area A or Gate 6/7, see note)',
    image: null,
    en: {
      name: 'Dubai Garden Glow',
      hours: 'CONFLICTING INFO as of 2026 — some sources report daytime hours (10:00 AM–9:00 PM) after a relocation within Zabeel Park, others still list evening hours (4/5 PM–9/11 PM or midnight, closed Tuesdays at some listings). Verify current hours, gate, and season before publishing',
      price: 'From around AED 70–80 for Glow Park; combo tickets for all zones (Glow, Dinosaur, Magic, Fantasy, Art/Ice Park) higher',
      climateNote: 'Fully outdoor, seasonal (roughly October–May)',
      bestTime: 'Early evening, arriving before dark to watch installations transition from daylight art to illuminated glow',
      description: 'A seasonal light-and-art park within Zabeel Park featuring LED sculptures, a Dinosaur Park with 120+ animatronic dinosaurs, and rotating themed zones (Magic Park, Fantasy Park) — a family-friendly evening out built from energy-efficient, largely biodegradable materials.',
      history: 'Opened in December 2015, it was the first attraction of its kind in the Middle East and has run seasonal editions since, with layouts and zones changing most years.',
      funFacts: [
        'Uses over 10 million LED lights across its installations.',
        'Most structures are made from eco-friendly, biodegradable materials, doubling as art by day and light displays by night.',
        'The Dinosaur Park zone alone features more than 120 moving, roaring animatronic dinosaurs.'
      ]
    },
    pt: {
      name: 'Dubai Garden Glow',
      hours: 'INFORMAÇÕES CONFLITANTES em 2026 — algumas fontes indicam horário diurno (10h–21h) após uma mudança de local dentro do Zabeel Park, outras ainda listam horário noturno (16h/17h–21h/23h ou meia-noite, fechado às terças em alguns anúncios). Confirme horário, portão e temporada atuais antes de publicar',
      price: 'A partir de cerca de AED 70–80 para o Glow Park; combos com todas as zonas (Glow, Dinosaur, Magic, Fantasy, Art/Ice Park) custam mais',
      climateNote: 'Totalmente ao ar livre, sazonal (aproximadamente de outubro a maio)',
      bestTime: 'Início da noite, chegando antes de escurecer para ver as instalações passarem da arte diurna para o brilho iluminado',
      description: 'Um parque sazonal de luz e arte dentro do Zabeel Park, com esculturas de LED, um Dinosaur Park com mais de 120 dinossauros animatrônicos e zonas temáticas rotativas (Magic Park, Fantasy Park) — um passeio noturno para toda a família, construído com materiais eficientes energeticamente e majoritariamente biodegradáveis.',
      history: 'Inaugurado em dezembro de 2015, foi a primeira atração desse tipo no Oriente Médio e mantém edições sazonais desde então, com layouts e zonas mudando na maioria dos anos.',
      funFacts: [
        'Utiliza mais de 10 milhões de luzes de LED em suas instalações.',
        'A maioria das estruturas é feita de materiais ecológicos e biodegradáveis, funcionando como arte de dia e exibição de luz à noite.',
        'Só a zona Dinosaur Park apresenta mais de 120 dinossauros animatrônicos que se movem e rugem.'
      ]
    }
  },
{
    id: 'global-village', category: 'theme-parks-adventure', icon: 'public',
    lat: 25.0717297, lng: 55.3084159,
    address: 'Exit 37, Sheikh Mohammed Bin Zayed Road (E311), Dubai',
    image: null,
    en: {
      name: 'Global Village',
      hours: 'Seasonal (mid-Oct–May). Sun–Wed 4:00 PM–midnight; Thu–Sat 4:00 PM–1:00 AM. Closed outside season',
      price: 'Weekday entry around AED 25; weekends/holidays around AED 30; rides and pavilion goods priced separately',
      climateNote: 'Fully outdoor park',
      bestTime: 'Weekday evenings for smaller crowds; Tuesdays are Family & Ladies only (except public holidays)',
      description: 'The world\'s largest multicultural festival park: 90+ country pavilions selling authentic food, crafts, and goods, alongside 200+ carnival rides, nightly live shows, and fireworks — a single evening that walks visitors from India to Morocco to Japan.',
      history: 'Started in 1997 as a modest cultural exhibition with just 10 countries in a Dubai Creek parking area; Season 30 (2025/26) marked its 30th anniversary with over 8 million seasonal visitors.',
      funFacts: [
        'Cumulative visitors since opening exceed 100 million.',
        'Each country pavilion is built, staffed, and curated by representatives from that nation.',
        'The park closes completely over summer — always confirm current season dates before planning a visit.'
      ]
    },
    pt: {
      name: 'Global Village',
      hours: 'Sazonal (meados de out–mai). Dom–Qua 16h–meia-noite; Qui–Sáb 16h–1h. Fechado fora da temporada',
      price: 'Entrada em dia útil cerca de AED 25; fins de semana/feriados cerca de AED 30; brinquedos e produtos dos pavilhões com preço à parte',
      climateNote: 'Parque totalmente ao ar livre',
      bestTime: 'Noites de dia útil para menos movimento; terças-feiras são exclusivas para famílias e mulheres (exceto feriados)',
      description: 'O maior parque de festivais multiculturais do mundo: mais de 90 pavilhões de países vendendo comida, artesanato e produtos autênticos, além de mais de 200 brinquedos de parque de diversões, shows ao vivo todas as noites e fogos de artifício — uma única noite que leva os visitantes da Índia ao Marrocos e ao Japão.',
      history: 'Começou em 1997 como uma modesta exposição cultural com apenas 10 países em um estacionamento do Dubai Creek; a Temporada 30 (2025/26) marcou seu 30º aniversário com mais de 8 milhões de visitantes na temporada.',
      funFacts: [
        'O total acumulado de visitantes desde a inauguração ultrapassa 100 milhões.',
        'Cada pavilhão de país é construído, administrado e curado por representantes daquela nação.',
        'O parque fecha completamente durante o verão — sempre confirme as datas da temporada atual antes de planejar a visita.'
      ]
    }
  },
{
    id: 'img-worlds-of-adventure', category: 'theme-parks-adventure', icon: 'attractions',
    lat: 25.0823984, lng: 55.319675,
    address: 'Sheikh Mohammed Bin Zayed Road (E311), City of Arabia, Dubailand, Dubai',
    image: null,
    en: {
      name: 'IMG Worlds of Adventure',
      hours: 'Generally Sun–Thu 12:00 PM–10:00 PM, Fri–Sat 12:00 PM–11:00 PM (hours vary seasonally — verify before visiting)',
      price: 'From around AED 225–345 depending on package; children under 1.05m free',
      climateNote: 'Fully indoor, fully air-conditioned',
      bestTime: 'Weekdays for shorter queues; the indoor setting makes it a good year-round, all-weather pick',
      description: 'The world\'s largest indoor theme park at 1.5 million sq ft, split into zones themed around Marvel superheroes, Cartoon Network characters, and a Lost Valley of animatronic dinosaurs, plus a haunted hotel and dedicated Kids Zone — all fully climate-controlled.',
      history: 'Opened in 2016 as the region\'s first mega-themed indoor entertainment destination, developed by IMG Group (Ilyas and Mustafa Galadari).',
      funFacts: [
        'Sits right next to Global Village on the same stretch of highway.',
        'Fully indoor and air-conditioned, making it a reliable escape from Dubai\'s summer heat.',
        'Features 18+ themed rides across five zones.'
      ]
    },
    pt: {
      name: 'IMG Worlds of Adventure',
      hours: 'Geralmente dom–qui 12h–22h, sex–sáb 12h–23h (horários variam por temporada — confirme antes de visitar)',
      price: 'A partir de cerca de AED 225–345, dependendo do pacote; crianças abaixo de 1,05m grátis',
      climateNote: 'Totalmente coberto e climatizado',
      bestTime: 'Dias úteis para filas menores; o ambiente coberto o torna uma boa opção o ano todo, independente do clima',
      description: 'O maior parque temático coberto do mundo, com 140 mil m², dividido em zonas temáticas de super-heróis da Marvel, personagens do Cartoon Network e um Lost Valley com dinossauros animatrônicos, além de um hotel assombrado e uma Kids Zone dedicada — tudo totalmente climatizado.',
      history: 'Inaugurado em 2016 como o primeiro grande destino de entretenimento temático coberto da região, desenvolvido pelo IMG Group (Ilyas e Mustafa Galadari).',
      funFacts: [
        'Fica bem ao lado do Global Village, no mesmo trecho da rodovia.',
        'Totalmente coberto e climatizado, sendo um refúgio confiável do calor do verão de Dubai.',
        'Conta com mais de 18 brinquedos temáticos distribuídos em cinco zonas.'
      ]
    }
  },
{
    id: 'dubai-parks-and-resorts', category: 'theme-parks-adventure', icon: 'attractions',
    lat: 24.9215917, lng: 55.0031268,
    address: 'Sheikh Zayed Road (E11), Jebel Ali, Dubai',
    image: null,
    en: {
      name: 'Dubai Parks and Resorts (Motiongate, LEGOLAND, Real Madrid World)',
      hours: 'Varies by park — MOTIONGATE & Real Madrid World generally 12:00 PM–9/10 PM; LEGOLAND 11:00 AM–6/7 PM; LEGOLAND Water Park 10:00 AM–7:00 PM (verify current hours per park)',
      price: 'Single-park passes from around AED 245+; 2-park combo tickets available; Riverland (dining/shopping district) is free to enter',
      climateNote: 'Mix of indoor and outdoor zones depending on the park',
      bestTime: 'Weekday evenings, arriving from 4 PM onward, to avoid peak weekend crowds',
      description: 'The Middle East\'s largest integrated theme park destination, spanning multiple parks under one gate: MOTIONGATE (Hollywood-studio-themed rides), LEGOLAND Dubai (rides for younger kids), LEGOLAND Water Park, and Real Madrid World, connected by the free-to-enter Riverland dining and shopping district.',
      history: 'Opened in phases from October 2016, developed to position Dubai as a Disneyland-style multi-park destination in the region.',
      funFacts: [
        'NOTE: Bollywood Parks Dubai, historically part of this complex, does not appear in current official park listings alongside MOTIONGATE, LEGOLAND, and Real Madrid World — worth confirming its status before including it in visitor plans.',
        'LEGOLAND Dubai\'s Miniland recreates famous landmarks entirely out of LEGO bricks.',
        'Complimentary buggies shuttle guests between parks via the central Riverland hub.'
      ]
    },
    pt: {
      name: 'Dubai Parks and Resorts (Motiongate, LEGOLAND, Real Madrid World)',
      hours: 'Varia por parque — MOTIONGATE e Real Madrid World geralmente 12h–21h/22h; LEGOLAND 11h–18h/19h; LEGOLAND Water Park 10h–19h (confirme os horários atuais de cada parque)',
      price: 'Ingressos para um único parque a partir de cerca de AED 245+; combos de 2 parques disponíveis; o Riverland (distrito gastronômico/de compras) tem entrada gratuita',
      climateNote: 'Combinação de zonas cobertas e ao ar livre, dependendo do parque',
      bestTime: 'Noites de dia útil, chegando a partir das 16h, para evitar os picos de movimento do fim de semana',
      description: 'O maior destino integrado de parques temáticos do Oriente Médio, reunindo vários parques em um só portão: MOTIONGATE (brinquedos temáticos de estúdios de Hollywood), LEGOLAND Dubai (brinquedos para crianças menores), LEGOLAND Water Park e Real Madrid World, conectados pelo distrito gastronômico e de compras Riverland, de entrada gratuita.',
      history: 'Inaugurado em fases a partir de outubro de 2016, desenvolvido para posicionar Dubai como um destino multi-parques ao estilo Disneyland na região.',
      funFacts: [
        'OBSERVAÇÃO: o Bollywood Parks Dubai, historicamente parte deste complexo, não aparece nas listagens oficiais atuais de parques ao lado do MOTIONGATE, LEGOLAND e Real Madrid World — vale confirmar sua situação antes de incluí-lo nos planos de visita.',
        'O Miniland do LEGOLAND Dubai recria marcos famosos inteiramente com peças de LEGO.',
        'Buggies gratuitos transportam os visitantes entre os parques pelo hub central do Riverland.'
      ]
    }
  },
{
    id: 'atlantis-aquaventure-waterpark', category: 'theme-parks-adventure', icon: 'pool',
    lat: 25.1328688, lng: 55.118812,
    address: 'Atlantis The Palm, Crescent Road, Palm Jumeirah, Dubai',
    image: null,
    en: {
      name: 'Atlantis Aquaventure Waterpark',
      hours: 'Daily, generally 10:00 AM–6:30 PM (extended weekend hours with DJ events through summer 2026; check current schedule)',
      price: 'From around AED 350 (waterpark only) up to AED 799 (premium all-inclusive); combo tickets with The Lost Chambers Aquarium available',
      climateNote: 'Fully outdoor',
      bestTime: 'Opening time (10 AM) or after 3 PM to avoid the midday crowd peak',
      description: 'The world\'s largest waterpark by footprint, spread across 22 hectares on the crescent of Palm Jumeirah: 105+ slides and rides including the record-breaking Odyssey of Terror and the shark-lagoon Leap of Faith, a private beach, and a dedicated kids\' splash zone.',
      history: 'Opened alongside Atlantis The Palm in 2008, and expanded significantly in a 2023 upgrade (reported at around AED 1 billion) that added new record-breaking slides.',
      funFacts: [
        'Leap of Faith sends riders through a nearly vertical drop inside a shark-filled lagoon tunnel.',
        'Includes access to a roughly 1km private beach section.',
        'Same-day re-entry is permitted with a hand stamp.'
      ]
    },
    pt: {
      name: 'Atlantis Aquaventure Waterpark',
      hours: 'Diariamente, geralmente das 10h às 18h30 (horário estendido nos fins de semana com eventos com DJ durante o verão de 2026; confira a programação atual)',
      price: 'A partir de cerca de AED 350 (somente o parque aquático) até AED 799 (all-inclusive premium); combos com o The Lost Chambers Aquarium disponíveis',
      climateNote: 'Totalmente ao ar livre',
      bestTime: 'Horário de abertura (10h) ou após as 15h, para evitar o pico de movimento do meio-dia',
      description: 'O maior parque aquático do mundo em área, espalhado por 22 hectares no crescente da Palm Jumeirah: mais de 105 toboáguas e atrações, incluindo o recordista Odyssey of Terror e o Leap of Faith, com sua lagoa de tubarões, uma praia privativa e uma área de água dedicada às crianças.',
      history: 'Inaugurado junto com o Atlantis The Palm em 2008, e ampliado significativamente em uma reforma de 2023 (estimada em cerca de AED 1 bilhão) que adicionou novos toboáguas recordistas.',
      funFacts: [
        'O Leap of Faith leva os visitantes por uma queda quase vertical dentro de um túnel de lagoa repleto de tubarões.',
        'Inclui acesso a uma seção de praia privativa de cerca de 1 km.',
        'Reentrada no mesmo dia é permitida com carimbo na mão.'
      ]
    }
  },
{
    id: 'xline-dubai-marina', category: 'theme-parks-adventure', icon: 'zoom_out_map',
    lat: 25.0762927, lng: 55.1407242,
    address: 'Amwaj Tower to Dubai Marina Mall, Dubai Marina, Dubai',
    image: null,
    en: {
      name: 'XLine Dubai Marina',
      hours: 'Generally daily 9:20 AM–6:20 PM or similar (varies by source/season; closed some weekdays at points — verify current schedule)',
      price: 'From around AED 500–750 depending on solo/tandem and peak timing',
      climateNote: 'Fully outdoor',
      bestTime: 'Morning slots for cooler temperatures and calmer marina views',
      description: 'The world\'s longest urban zipline: a 1km ride launching from a 170-metre platform on Amwaj Tower in JBR, reaching speeds up to 80 km/h in a horizontal, superman-style position, before landing at Dubai Marina Mall.',
      history: 'Built and operated by XDubai, it set the record for longest urban zipline and has since added a second parallel line for tandem riders.',
      funFacts: [
        'Riders hit 0–60 km/h in about 2.5 seconds.',
        'Two parallel cables let friends or couples ride side by side.',
        'A complimentary GoPro-style video of the ride is typically included in the ticket.'
      ]
    },
    pt: {
      name: 'XLine Dubai Marina',
      hours: 'Geralmente diariamente das 9h20 às 18h20 ou similar (varia por fonte/temporada; fechado em alguns dias úteis em certos períodos — confirme a programação atual)',
      price: 'A partir de cerca de AED 500–750, dependendo de ser solo/tandem e do horário de pico',
      climateNote: 'Totalmente ao ar livre',
      bestTime: 'Horários pela manhã, para temperaturas mais amenas e vistas mais calmas da marina',
      description: 'A tirolesa urbana mais longa do mundo: um percurso de 1 km partindo de uma plataforma de 170 metros na Amwaj Tower, no JBR, atingindo velocidades de até 80 km/h em posição horizontal, estilo super-homem, até pousar no Dubai Marina Mall.',
      history: 'Construída e operada pela XDubai, estabeleceu o recorde de tirolesa urbana mais longa e desde então adicionou uma segunda linha paralela para pilotos em dupla.',
      funFacts: [
        'Os participantes atingem de 0 a 60 km/h em cerca de 2,5 segundos.',
        'Dois cabos paralelos permitem que amigos ou casais voem lado a lado.',
        'Um vídeo estilo GoPro do passeio geralmente está incluído no ingresso.'
      ]
    }
  },
{
    id: 'wild-wadi-waterpark', category: 'theme-parks-adventure', icon: 'pool',
    lat: 25.139409, lng: 55.188844,
    address: 'Jumeirah Street, opposite Burj Al Arab, Umm Suqeim 3, Dubai',
    image: null,
    en: {
      name: 'Wild Wadi Waterpark',
      hours: 'Daily, generally 10:00 AM–6:00 PM (extended to 7 PM in summer, shortened to 5 PM in winter — verify seasonal hours)',
      price: 'From around AED 250–350 depending on season and package',
      climateNote: 'Fully outdoor',
      bestTime: 'Morning opening or late afternoon to avoid the midday sun and crowds',
      description: 'A 30+ ride waterpark themed around Arabian folklore characters Juha and Sinbad, located directly beside Burj Al Arab: highlights include the near-vertical Jumeirah Sceirah slide, the Wipeout Flowrider surf simulator, and Breakers Bay, one of the region\'s largest wave pools.',
      history: 'Opened in 1999 alongside Burj Al Arab as part of the Jumeirah Group\'s original Madinat Jumeirah-area developments, one of the earliest major waterparks in the Gulf.',
      funFacts: [
        'Jumeirah Sceirah is one of the tallest and fastest free-fall waterslides in the region.',
        'Its location gives close-up views of Burj Al Arab from inside the park.',
        'Kids 2 and under generally get complimentary access with ID.'
      ]
    },
    pt: {
      name: 'Wild Wadi Waterpark',
      hours: 'Diariamente, geralmente das 10h às 18h (estendido até as 19h no verão, reduzido até as 17h no inverno — confirme os horários sazonais)',
      price: 'A partir de cerca de AED 250–350, dependendo da temporada e do pacote',
      climateNote: 'Totalmente ao ar livre',
      bestTime: 'Abertura pela manhã ou fim da tarde, para evitar o sol do meio-dia e as multidões',
      description: 'Um parque aquático com mais de 30 brinquedos, temático em torno dos personagens do folclore árabe Juha e Sinbad, localizado bem ao lado do Burj Al Arab: destaques incluem o toboágua quase vertical Jumeirah Sceirah, o simulador de surfe Wipeout Flowrider e o Breakers Bay, uma das maiores piscinas de ondas da região.',
      history: 'Inaugurado em 1999 junto com o Burj Al Arab, como parte dos primeiros empreendimentos do Jumeirah Group na área do Madinat Jumeirah, um dos primeiros grandes parques aquáticos do Golfo.',
      funFacts: [
        'O Jumeirah Sceirah é um dos toboáguas de queda livre mais altos e rápidos da região.',
        'Sua localização oferece vistas de perto do Burj Al Arab de dentro do parque.',
        'Crianças de até 2 anos geralmente têm acesso gratuito mediante identificação.'
      ]
    }
  },
{
    id: 'topgolf-dubai', category: 'theme-parks-adventure', icon: 'sports_golf',
    lat: 25.081933, lng: 55.1612123,
    address: 'Emirates Golf Club, Al Thanyah 3, Dubai',
    image: null,
    en: {
      name: 'Topgolf Dubai',
      hours: 'Mon–Fri 10:00 AM–2:00 AM; Sat–Sun 9:00 AM–2:00 AM (closing times vary slightly by source)',
      price: 'Bays from around AED 140–180+ per hour (priced per bay, up to 6 players, not per person); AED 10–20 one-time membership on first visit',
      climateNote: 'Covered, climate-controlled hitting bays; outdoor driving range',
      bestTime: 'Weekday afternoons before 5–6 PM for lower off-peak rates; Thursday evenings for a livelier DJ atmosphere',
      description: 'A tech-driven golf entertainment venue at Emirates Golf Club: climate-controlled hitting bays with tracked micro-chipped balls and game modes for all skill levels, plus three in-house restaurants/bars and Marina skyline views from The Loft.',
      history: 'Part of the global Topgolf chain, brought to Dubai as a golf-meets-nightlife concept blending casual sport with dining and entertainment.',
      funFacts: [
        'Bays are priced per hour and per group (up to 6 players), not per person — good value split among friends.',
        'The Bunker level combines a mini-golf course with an arcade for a more casual, family-friendly vibe.',
        'Suitable for complete beginners and expecting mothers — no prior golf experience needed.'
      ]
    },
    pt: {
      name: 'Topgolf Dubai',
      hours: 'Seg–Sex 10h–2h; Sáb–Dom 9h–2h (horários de fechamento variam ligeiramente conforme a fonte)',
      price: 'Baias a partir de cerca de AED 140–180+ por hora (preço por baia, até 6 jogadores, não por pessoa); associação única de AED 10–20 na primeira visita',
      climateNote: 'Baias de tacada cobertas e climatizadas; campo de treino ao ar livre',
      bestTime: 'Tardes de dia útil antes das 17h–18h para tarifas mais baixas fora do pico; noites de quinta-feira para um ambiente mais animado com DJ',
      description: 'Um espaço de entretenimento de golfe com tecnologia no Emirates Golf Club: baias climatizadas com bolas com microchip rastreado e modos de jogo para todos os níveis, além de três restaurantes/bares internos e vista do skyline da Marina a partir do The Loft.',
      history: 'Parte da rede global Topgolf, trazida para Dubai como um conceito que mistura golfe com vida noturna, combinando esporte casual com gastronomia e entretenimento.',
      funFacts: [
        'As baias têm preço por hora e por grupo (até 6 jogadores), não por pessoa — bom custo-benefício dividido entre amigos.',
        'O nível The Bunker combina um mini-golfe com um fliperama para um clima mais casual e familiar.',
        'Adequado para iniciantes completos e gestantes — não é necessária experiência prévia em golfe.'
      ]
    }
  }
];

// Register this emirate's data with the shared registry (see emirates.js).
// No activateEmirate() call here — unlike data.js (the default, synchronously
// loaded emirate), Dubai's data is fetched on demand when selected; the
// emirate switcher in index.html calls activateEmirate('dubai') itself
// once this file has finished loading.
registerEmirate('dubai', { categories: DUBAI_CATEGORIES, attractions: DUBAI_ATTRACTIONS });
