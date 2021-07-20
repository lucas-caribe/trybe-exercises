const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books.js');

const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// 4 - Encontre o livro com o maior nome.
function longestNamedBook() {
  return books.reduce((longest, current) =>
    longest.name.length < current.name.length ? current : longest,
  );
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
