const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function sortArray(array) {
  return array.sort((a, b) => a - b);
}

console.log(
  `Os números ${sortArray(
    oddsAndEvens,
  )} se encontram ordenados de forma crescente!`,
);
