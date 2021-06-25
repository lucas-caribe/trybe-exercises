const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books');

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const expectedResult = 'O Senhor dos Anéis';

const authorWith3DotsOnName = () => {
  const numberOfInitials = books.map(({ author }) =>
    author.name.replace(/[^\.]/g, ''),
  );

  return books[numberOfInitials.indexOf('...')].name;
};

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
