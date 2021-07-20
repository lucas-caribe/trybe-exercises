const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books.js');

const expectedResult = 43;

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos
// livros foram lançados.
function averageAge() {
  const ageSum = books.reduce((accumulator, { releaseYear, author }) => {
    const age = releaseYear - author.birthYear;
    return accumulator + age;
  }, 0);

  return ageSum / books.length;
}

assert.strictEqual(averageAge(), expectedResult);
