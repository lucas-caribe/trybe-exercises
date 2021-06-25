const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books');
const getOldBooks = require('./exercise4');

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

const oldBooks = () => getOldBooks().map(({ name }) => name);

assert.deepStrictEqual(oldBooks(), expectedResult);
