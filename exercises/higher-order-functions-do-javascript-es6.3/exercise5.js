const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books');
const fantasyOrScienceFiction = require('./exercise3');

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as
// pessoas autoras de ficção científica ou fantasia.
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

const fantasyOrScienceFictionAuthors = () => {
  const authors = fantasyOrScienceFiction().map(({ author }) => author.name);

  return authors.sort();
};

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
