import { ScryfallCard } from "src";

// MTGO promo
const AcademyManufacturer: TestCard<ScryfallCard.Normal> = {
  object: "card",
  id: "b67c27f1-12d1-4c48-9e22-31c43a9ecbbc",
  oracle_id: "f36d1d8b-8303-44a9-ab56-531931641ea2",
  multiverse_ids: [],
  mtgo_id: 91373,
  name: "Academy Manufactor",
  lang: "en",
  released_at: "2023-09-08",
  uri: "https://api.scryfall.com/cards/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc",
  scryfall_uri: "https://scryfall.com/card/prm/91373/academy-manufactor?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_status: "highres_scan",
  image_uris: {
    small: "https://cards.scryfall.io/small/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.jpg?1681082373",
    normal: "https://cards.scryfall.io/normal/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.jpg?1681082373",
    large: "https://cards.scryfall.io/large/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.jpg?1681082373",
    png: "https://cards.scryfall.io/png/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.png?1681082373",
    art_crop: "https://cards.scryfall.io/art_crop/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.jpg?1681082373",
    border_crop: "https://cards.scryfall.io/border_crop/front/b/6/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc.jpg?1681082373",
  },
  mana_cost: "{3}",
  cmc: 3.0,
  type_line: "Artifact Creature — Assembly-Worker",
  oracle_text: "If you would create a Clue, Food, or Treasure token, instead create one of each.",
  power: "1",
  toughness: "3",
  colors: [],
  color_identity: [],
  keywords: ["Treasure", "Food"],
  all_parts: [
    {
      object: "related_card",
      id: "77825935-2f71-4bd1-8ec7-9e8be26853c0",
      component: "token",
      name: "Treasure",
      type_line: "Token Artifact — Treasure",
      uri: "https://api.scryfall.com/cards/77825935-2f71-4bd1-8ec7-9e8be26853c0",
    },
    {
      object: "related_card",
      id: "a2c5cf37-da4d-481f-a7d6-975a05798201",
      component: "token",
      name: "Clue",
      type_line: "Token Artifact — Clue",
      uri: "https://api.scryfall.com/cards/a2c5cf37-da4d-481f-a7d6-975a05798201",
    },
    {
      object: "related_card",
      id: "dc1660fd-ef35-4b95-b901-af3dda687f08",
      component: "token",
      name: "Food",
      type_line: "Token Artifact — Food",
      uri: "https://api.scryfall.com/cards/dc1660fd-ef35-4b95-b901-af3dda687f08",
    },
    {
      object: "related_card",
      id: "b67c27f1-12d1-4c48-9e22-31c43a9ecbbc",
      component: "combo_piece",
      name: "Academy Manufactor",
      type_line: "Artifact Creature — Assembly-Worker",
      uri: "https://api.scryfall.com/cards/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc",
    },
  ],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "not_legal",
    gladiator: "not_legal",
    pioneer: "not_legal",
    explorer: "not_legal",
    modern: "legal",
    legacy: "legal",
    pauper: "not_legal",
    vintage: "legal",
    penny: "not_legal",
    commander: "legal",
    oathbreaker: "legal",
    brawl: "not_legal",
    historicbrawl: "not_legal",
    alchemy: "not_legal",
    paupercommander: "not_legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal",
    predh: "not_legal",
  },
  games: ["mtgo"],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: ["nonfoil", "foil"],
  oversized: false,
  promo: true,
  reprint: true,
  variation: false,
  set_id: "638940fb-6be9-4be3-b83f-68d3902fbbe5",
  set: "prm",
  set_name: "Magic Online Promos",
  set_type: "promo",
  set_uri: "https://api.scryfall.com/sets/638940fb-6be9-4be3-b83f-68d3902fbbe5",
  set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Aprm&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/prm?utm_source=api",
  rulings_uri: "https://api.scryfall.com/cards/b67c27f1-12d1-4c48-9e22-31c43a9ecbbc/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3Af36d1d8b-8303-44a9-ab56-531931641ea2&unique=prints",
  collector_number: "91373",
  digital: true,
  rarity: "rare",
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  artist: "Campbell White",
  artist_ids: ["d281eab4-463a-4ba8-9039-8943737960a0"],
  illustration_id: "a83da466-e02b-45b1-8982-fb657de020cf",
  border_color: "black",
  frame: "2015",
  security_stamp: "oval",
  full_art: false,
  textless: false,
  booster: false,
  story_spotlight: false,
  edhrec_rank: 394,
  penny_rank: 1610,
  prices: {
    usd: null,
    usd_foil: null,
    usd_etched: null,
    eur: null,
    eur_foil: null,
    tix: "0.81",
  },
  related_uris: {
    tcgplayer_infinite_articles:
      "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Academy+Manufactor&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    tcgplayer_infinite_decks:
      "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Academy+Manufactor&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Academy+Manufactor",
  },
  purchase_uris: {
    tcgplayer:
      "https://www.tcgplayer.com/search/magic/product?productLineName=magic&q=Academy+Manufactor&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall&view=grid",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Academy+Manufactor&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards/91373?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
  },
};
