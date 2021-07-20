const assert = require('assert');
const books = require('./books');

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX,
// ou false , caso contrário.
const expectedResult = false;

const everyoneWasBornOnSecXX = () =>
  books.every(
    ({ author }) => author.birthYear > 1900 && author.birthYear <= 2000,
  );

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
