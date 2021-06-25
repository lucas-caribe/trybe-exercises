const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

// 1 - Crie um array com strings no formato 
// NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const formatedBookNames = () =>
  books.map(({ name, genre, author }) => `${name} - ${genre} - ${author.name}`);

assert.deepStrictEqual(formatedBookNames(), expectedResult);
