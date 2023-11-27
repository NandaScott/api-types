import { ScryfallCard } from "src";

const RenownedWeaponsmith: TestCard<ScryfallCard.Normal> = {
  object: "card",
  id: "5a397298-9d7d-495f-983a-1683291a7b9f",
  oracle_id: "40c1375b-1d15-4525-894a-16b7a0ac02b4",
  multiverse_ids: [622722],
  mtgo_id: 115327,
  tcgplayer_id: 507236,
  cardmarket_id: 723540,
  name: "Renowned Weaponsmith",
  lang: "en",
  released_at: "2023-08-04",
  uri: "https://api.scryfall.com/cards/5a397298-9d7d-495f-983a-1683291a7b9f",
  scryfall_uri: "https://scryfall.com/card/cmm/114/renowned-weaponsmith?utm_source=api",
  layout: "normal",
  highres_image: true,
  image_status: "highres_scan",
  image_uris: {
    small: "https://cards.scryfall.io/small/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.jpg?1689996557",
    normal: "https://cards.scryfall.io/normal/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.jpg?1689996557",
    large: "https://cards.scryfall.io/large/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.jpg?1689996557",
    png: "https://cards.scryfall.io/png/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.png?1689996557",
    art_crop: "https://cards.scryfall.io/art_crop/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.jpg?1689996557",
    border_crop: "https://cards.scryfall.io/border_crop/front/5/a/5a397298-9d7d-495f-983a-1683291a7b9f.jpg?1689996557",
  },
  mana_cost: "{1}{U}",
  cmc: 2.0,
  type_line: "Creature — Human Artificer",
  oracle_text:
    "{T}: Add {C}{C}. Spend this mana only to cast artifact spells or activate abilities of artifacts.\n{U}, {T}: Search your library for a card named Heart-Piercer Bow or Vial of Dragonfire, reveal it, put it into your hand, then shuffle.",
  power: "1",
  toughness: "3",
  colors: ["U"],
  color_identity: ["U"],
  keywords: [],
  produced_mana: ["C"],
  all_parts: [
    {
      object: "related_card",
      id: "c924502b-a49e-4bf6-9e1a-9aa83f279228",
      component: "combo_piece",
      name: "Vial of Dragonfire",
      type_line: "Artifact",
      uri: "https://api.scryfall.com/cards/c924502b-a49e-4bf6-9e1a-9aa83f279228",
    },
    {
      object: "related_card",
      id: "5a397298-9d7d-495f-983a-1683291a7b9f",
      component: "combo_piece",
      name: "Renowned Weaponsmith",
      type_line: "Creature — Human Artificer",
      uri: "https://api.scryfall.com/cards/5a397298-9d7d-495f-983a-1683291a7b9f",
    },
    {
      object: "related_card",
      id: "b26a42c6-fc98-4993-891c-7ac6a0735543",
      component: "combo_piece",
      name: "Heart-Piercer Bow",
      type_line: "Artifact — Equipment",
      uri: "https://api.scryfall.com/cards/b26a42c6-fc98-4993-891c-7ac6a0735543",
    },
  ],
  legalities: {
    standard: "not_legal",
    future: "not_legal",
    historic: "legal",
    gladiator: "legal",
    pioneer: "legal",
    explorer: "legal",
    modern: "legal",
    legacy: "legal",
    pauper: "legal",
    vintage: "legal",
    penny: "legal",
    commander: "legal",
    oathbreaker: "legal",
    brawl: "not_legal",
    historicbrawl: "legal",
    alchemy: "not_legal",
    paupercommander: "legal",
    duel: "legal",
    oldschool: "not_legal",
    premodern: "not_legal",
    predh: "not_legal",
  },
  games: ["paper", "mtgo"],
  reserved: false,
  foil: true,
  nonfoil: true,
  finishes: ["nonfoil", "foil"],
  oversized: false,
  promo: false,
  reprint: true,
  variation: false,
  set_id: "cd05036f-2698-43e6-a48e-5c8d82f0a551",
  set: "cmm",
  set_name: "Commander Masters",
  set_type: "masters",
  set_uri: "https://api.scryfall.com/sets/cd05036f-2698-43e6-a48e-5c8d82f0a551",
  set_search_uri: "https://api.scryfall.com/cards/search?order=set&q=e%3Acmm&unique=prints",
  scryfall_set_uri: "https://scryfall.com/sets/cmm?utm_source=api",
  rulings_uri: "https://api.scryfall.com/cards/5a397298-9d7d-495f-983a-1683291a7b9f/rulings",
  prints_search_uri:
    "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A40c1375b-1d15-4525-894a-16b7a0ac02b4&unique=prints",
  collector_number: "114",
  digital: false,
  rarity: "common",
  card_back_id: "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  artist: "Eric Deschamps",
  artist_ids: ["37970e22-9cee-44c1-af44-5ee27cf26b76"],
  illustration_id: "b27cfbaa-9e6f-4a29-bbac-9f5e0120b7ea",
  border_color: "black",
  frame: "2015",
  full_art: false,
  textless: false,
  booster: true,
  story_spotlight: false,
  edhrec_rank: 11671,
  penny_rank: 6740,
  prices: {
    usd: "0.02",
    usd_foil: "0.10",
    usd_etched: null,
    eur: "0.03",
    eur_foil: "0.10",
    tix: "0.04",
  },
  related_uris: {
    gatherer: "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=622722",
    tcgplayer_infinite_articles:
      "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Renowned+Weaponsmith&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    tcgplayer_infinite_decks:
      "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Renowned+Weaponsmith&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    edhrec: "https://edhrec.com/route/?cc=Renowned+Weaponsmith",
  },
  purchase_uris: {
    tcgplayer:
      "https://www.tcgplayer.com/product/507236?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    cardmarket:
      "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Renowned+Weaponsmith&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    cardhoarder:
      "https://www.cardhoarder.com/cards/115327?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall",
  },
};
