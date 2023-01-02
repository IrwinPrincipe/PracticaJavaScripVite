/**
 *
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} carta aleatoria
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw new Error("No hay cartas en el deck");
  }
  const carta = deck.pop();
  return carta;
};
