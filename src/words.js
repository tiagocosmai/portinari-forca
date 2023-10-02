import abu from "./characters/abu.jpg";
import aladdin from "./characters/aladdin.jpg"; 
import alegria from "./characters/alegria.jpg"; 
import fera from "./characters/fera.jpg"; import alice from "./characters/alice.jpg"; import anna from "./characters/anna.jpg"; import ariel from "./characters/ariel.jpg"; import aurora from "./characters/aurora.jpg"; import bela from "./characters/bela.jpg"; import chapeleiro from "./characters/chapeleiro.jpg"; import cinderela from "./characters/cinderela.jpg"; import elsa from "./characters/elsa.jpg"; import gaston from "./characters/gaston.jpg"; import lumiere from "./characters/lumiere.jpg"; import gato from "./characters/gato.jpg"; import genio from "./characters/genio.jpg"; import isabela from "./characters/isabela.jpg"; import jasmine from "./characters/jasmine.jpg"; import linguado from "./characters/linguado.jpg"; 
import mirabel from "./characters/mirabel.jpg"; import medo from "./characters/medo.jpg"; import raiva from "./characters/raiva.jpg"; import merida from "./characters/merida.jpg"; import nojinho from "./characters/nojinho.jpg"; import olaf from "./characters/olaf.jpg"; import timao from "./characters/timao.jpg"; import simba from "./characters/simba.jpg"; import zazu from "./characters/zazu.jpg"; import pumba from "./characters/pumba.jpg"; import sebastiao from "./characters/sebastiao.jpg"; import tiana from "./characters/tiana.jpg"; import tristeza from "./characters/tristeza.jpg"


let CHAR_WORDS = [
  {
    "name": "ABU",
    "from": "Aladdin",
    "image": abu
  },
  {
    "name": "ALADDIN",
    "from": "Aladdin",
    "image": aladdin
  },
  {
    "name": "ALEGRIA",
    "from": "Divertidamente",
    "image": alegria
  },
  {
    "name": "FERA",
    "from": "A Bela e a Fera",
    "image": fera
  },
  {
    "name": "ALICE",
    "from": "Alice no país das maravilhas",
    "image": alice
  },
  {
    "name": "ANNA",
    "from": "Frozen - Uma Aventura Congelante",
    "image": anna
  },
  {
    "name": "ARIEL",
    "from": "A Pequena Sereia",
    "image": ariel
  },
  {
    "name": "AURORA",
    "from": "A Bela adormecida",
    "image": aurora
  },
  {
    "name": "BELA",
    "from": "A Bela e a Fera",
    "image": bela
  },
  {
    "name": "CHAPELEIRO",
    "from": "Alice no país das maravilhas",
    "image": chapeleiro
  },
  {
    "name": "CINDERELA",
    "from": "Cinderela",
    "image": cinderela
  },
  {
    "name": "ELSA",
    "from": "Frozen - Uma Aventura Congelante",
    "image": elsa
  },
  {
    "name": "GASTON",
    "from": "A Bela e a Fera",
    "image": gaston
  },
  {
    "name": "LUMIERE",
    "from": "A Bela e a Fera",
    "image": lumiere
  },
  {
    "name": "GATO",
    "from": "Alice no país das maravilhas",
    "image": gato
  },
  {
    "name": "GENIO",
    "from": "Aladdin",
    "image": genio
  },
  {
    "name": "ISABELA",
    "from": "Encanto",
    "image": isabela
  },
  {
    "name": "JASMINE",
    "from": "Alladin",
    "image": jasmine
  },
  {
    "name": "LINGUADO",
    "from": "A Pequena Sereia",
    "image": linguado
  },
  {
    "name": "MIRABEL",
    "from": "Encanto",
    "image": mirabel
  },
  {
    "name": "MEDO",
    "from": "Divertidamente",
    "image": medo
  },
  {
    "name": "RAIVA",
    "from": "Divertidamente",
    "image": raiva
  },
  {
    "name": "MERIDA",
    "from": "Valente",
    "image": merida
  },
  {
    "name": "NOJINHO",
    "from": "Divertidamente",
    "image": nojinho
  },
  {
    "name": "OLAF",
    "from": "Frozen - Uma Aventura Congelante",
    "image": olaf
  },
  {
    "name": "PUMBA",
    "from": "O Rei Leão",
    "image": pumba
  },
  {
    "name": "TIMAO",
    "from": "O Rei Leão",
    "image": timao
  },
  {
    "name": "SIMBA",
    "from": "O Rei Leão",
    "image": simba
  },
  {
    "name": "ZAZU",
    "from": "O Rei Leão",
    "image": zazu
  },
  {
    "name": "PUMBA",
    "from": "O Rei Leão",
    "image": pumba
  },
  {
    "name": "SEBASTIAO",
    "from": "A Pequena Sereia",
    "image": sebastiao
  },
  {
    "name": "TIANA",
    "from": "A Princesa e o Sapo",
    "image": tiana
  },
  {
    "name": "TRISTEZA",
    "from": "Divertidamente",
    "image": tristeza
  }
];

function randomChar() {
  console.log(CHAR_WORDS.length)
  return CHAR_WORDS[Math.floor(Math.random() * CHAR_WORDS.length)];
}


export { randomChar };
