const products = [
  {
    id: 1,
    name: "Revival Trance",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas inspirado en Final Fantasy VI, enfocado en reanimar criaturas de bajo costo desde el cementerio, liderado por Terra, Herald of Hope.",
    set: "Universes Beyond: Final Fantasy",
    stock: 15,
    price: "$5490",
    image: "",
  },
  {
    id: 2,
    name: "Limit Break",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas basado en Final Fantasy VII, con temática de equipo y 'limit breaks' para criaturas de alto poder, liderado por Cloud, Ex-SOLDIER.",
    set: "Universes Beyond: Final Fantasy",
    stock: 12,
    price: "$7690",
    image: "",
  },
  {
    id: 3,
    name: "Counter Blitz",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas inspirado en Final Fantasy XIV, centrado en mecánicas de contadores y jugadas rápidas para dominar el campo de batalla.",
    set: "Universes Beyond: Final Fantasy",
    stock: 20,
    price: "$6090",
    image: "",
  },
  {
    id: 4,
    name: "Scions & Spellcraft",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas de Final Fantasy XVI, enfocado en escuderos y hechizos poderosos para estrategias de control y magia.",
    set: "Universes Beyond: Final Fantasy",
    stock: 10,
    price: "$7190",
    image: "",
  },
  {
    id: 5,
    name: "Revival Trance",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas inspirado en Final Fantasy VI, enfocado en reanimar criaturas de bajo costo desde el cementerio, liderado por Terra, Herald of Hope.",
    set: "Universes Beyond: Final Fantasy",
    stock: 15,
    price: "$6500",
    image: "",
  },
  {
    id: 6,
    name: "Limit Break",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas basado en Final Fantasy VII, con temática de equipo y 'limit breaks' para criaturas de alto poder, liderado por Cloud, Ex-SOLDIER.",
    set: "Universes Beyond: Final Fantasy",
    stock: 12,
    price: "$6500",
    image: "",
  },
  {
    id: 7,
    name: "Counter Blitz",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas inspirado en Final Fantasy XIV, centrado en mecánicas de contadores y jugadas rápidas para dominar el campo de batalla.",
    set: "Universes Beyond: Final Fantasy",
    stock: 20,
    price: "$6500",
    image: "",
  },
  {
    id: 8,
    name: "Scions & Spellcraft",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas de Final Fantasy XVI, enfocado en escuderos y hechizos poderosos para estrategias de control y magia.",
    set: "Universes Beyond: Final Fantasy",
    stock: 10,
    price: "$6500",
    image: "",
  },
  // Mazos de Murders at Karlov Manor (IDs 5-8, precios más accesibles por ser de 2024)
  {
    id: 9,
    name: "Deep Clue Sea",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en explorar las profundidades con clues y criaturas marinas, liderado por un comandante que recompensa la investigación submarina y genera tokens de clue.",
    set: "Murders at Karlov Manor",
    stock: 18,
    price: "$3200",
    image: "",
  },
  {
    id: 10,
    name: "Revenant Recon",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas centrado en vigilancia, reanimación de espíritus y exploración, con un comandante que recompensa el scouting y el regreso de criaturas del cementerio.",
    set: "Murders at Karlov Manor",
    stock: 14,
    price: "$3200",
    image: "",
  },
  {
    id: 11,
    name: "Blame Game",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas temático en redirigir culpa y ataques, liderado por un comandante que usa 'blame counters' para manipular el campo de batalla y proteger aliados.",
    set: "Murders at Karlov Manor",
    stock: 22,
    price: "$3200",
    image: "",
  },
  {
    id: 12,
    name: "Deadly Disguise",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en disfraces, cambios de identidad y criaturas evasivas, con un comandante que premia las transformaciones y sorpresas en combate.",
    set: "Murders at Karlov Manor",
    stock: 16,
    price: "$3200",
    image: "",
  },
  // Mazos de Tarkir: Dragonstorm (IDs 9-13, precios medios-altos por ser de 2025)
  {
    id: 13,
    name: "Abzan Armor",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en armaduras, tokens y defensa implacable, liderado por un comandante Abzan que fortalece a las criaturas con contadores.",
    set: "Tarkir: Dragonstorm",
    stock: 12,
    price: "$5500",
    image: "",
  },
  {
    id: 14,
    name: "Temur Roar",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas centrado en rugidos de dragones y ramp agresivo, con un comandante Temur que acelera mana y ataca con bestias salvajes.",
    set: "Tarkir: Dragonstorm",
    stock: 15,
    price: "$5500",
    image: "",
  },
  {
    id: 15,
    name: "Jeskai Striker",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas temático en strikes precisos y hechizos volátiles, liderado por un comandante Jeskai que combina control y daño directo.",
    set: "Tarkir: Dragonstorm",
    stock: 20,
    price: "$5500",
    image: "",
  },
  {
    id: 16,
    name: "Sultai Arisen",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en resurrección y swamps, con un comandante Sultai que reanima criaturas del cementerio para una horda imparable.",
    set: "Tarkir: Dragonstorm",
    stock: 10,
    price: "$5500",
    image: "",
  },
  {
    id: 17,
    name: "Mardu Surge",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas centrado en surges de agresividad y sacrificios, liderado por un comandante Mardu que genera valor a través de ataques coordinados.",
    set: "Tarkir: Dragonstorm",
    stock: 18,
    price: "$5500",
    image: "",
  },
  // Mazos de Bloomburrow (IDs 14-17, precios accesibles por ser reciente pero popular)
  {
    id: 18,
    name: "Animated Army",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en animar objetos y artefactos como un ejército juguetón, liderado por un comandante que da vida a lo inanimado.",
    set: "Bloomburrow",
    stock: 25,
    price: "$3500",
    image: "",
  },
  {
    id: 19,
    name: "Family Matters",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas centrado en familias y offspring, con un comandante que fortalece lazos tribales y genera tokens.",
    set: "Bloomburrow",
    stock: 20,
    price: "$3500",
    image: "",
  },
  {
    id: 20,
    name: "Peace Offering",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas temático en alianzas y group hugs, liderado por un comandante que hace amigos para luego traicionarlos con twists sorpresa.",
    set: "Bloomburrow",
    stock: 16,
    price: "$3500",
    image: "",
  },
  {
    id: 21,
    name: "Squirreled Away",
    type: "Commander Deck",
    game: "Magic: The Gathering",
    description:
      "Mazo preconstruido de 100 cartas enfocado en ardillas y acaparamiento de recursos, con un comandante que genera un ejército de roedores y esconde tesoros.",
    set: "Bloomburrow",
    stock: 22,
    price: "$3500",
    image: "",
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
};

export default getProducts;
