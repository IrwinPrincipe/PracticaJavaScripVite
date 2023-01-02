import _ from "underscore";

//export const minombre = "Juan";

// Esta función crea un nuevo deck
/**
 *
 * @param {Array<String>} tiposDeCarta eJEMPLO ["C", "D", "H", "S"];
 * @param {Array<String>} tiposEspeciales EJEMPLO ["A", "J", "Q", "K"]
 * @returns {Array<String>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0)
    throw new Error("TipoDeCarta es obligatorio como un arreglo de string");

  if (!tiposDeCarta || tiposEspeciales.length === 0)
    throw new Error("TiposEspeciales e obligatorio como un arreglo de string");

  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};

//export default crearDeck; // exportacion por defeccto
