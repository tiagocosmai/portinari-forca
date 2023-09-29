var PTBR_WORDS = [
  "lento",
  "vento",
  "raquete",
  "segurança",
  "sol",
  "nuvem",
  "tempo",
  "tempestade",
  "furacão",
  "bode",
  "cachorro",
  "gato",
  "cavalo",
  "presidente",
  "vaca",
  "folha",
  "explosão",
  "sapato",
  "placas",
  "crocodilo",
  "luta",
  "tribo",
  "creme",
  "ameaça",
  "ferimento",
  "imbecil",
  "controle",
  "nariz",
  "picante",
  "sentido",
  "albergue",
  "caneta",
  "limpo",
  "mulher",
  "homem"
];


var CHAR_WORDS = [
  {
      "id": 1,
      "name": "ABU",
      "from": "Aladdin",
      "image": "https://static.wikia.nocookie.net/disney/images/2/25/Abudisney.jpeg/revision/latest/scale-to-width-down/258?cb=20150609005211&path-prefix=pt-br"
  },
  {
      "id": 2,
      "name": "ALADDIN",
      "from": "Aladdin",
      "image": "https://static.wikia.nocookie.net/disney/images/5/5d/Aladdin_pose.jpg/revision/latest/scale-to-width-down/258?cb=20150814025321&path-prefix=pt-br"
  },
  {
      "id": 3,
      "name": "ALEGRIA",
      "from": "Divertidamente",
      "image": "https://static.wikia.nocookie.net/disney/images/0/0f/JOY_Fullbody_Render.png/revision/latest?cb=20150619195103&path-prefix=pt-br"
  },
  {
      "id": 10,
      "name": "FERA",
      "from": "A Bela e a Fera",
      "image": "https://static.wikia.nocookie.net/disney/images/d/d7/Beast_pose.jpg/revision/latest/scale-to-width-down/258?cb=20161224203741&path-prefix=pt-br"
  }
]

function randomWord() {
  return PTBR_WORDS[Math.floor(Math.random() * PTBR_WORDS.length)];
}

function randomChar() {
  return CHAR_WORDS[Math.floor(Math.random() * CHAR_WORDS.length)];
}


export { randomWord, randomChar };
