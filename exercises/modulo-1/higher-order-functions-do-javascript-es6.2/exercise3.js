const assert = require('assert');
const books = require('./books');

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = () => books.find(({ name }) => name.length === 26);

assert.deepStrictEqual(getNamedBook(), expectedResult);
