const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books.js');

const expectedResult =
  'George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.';

// 2 - Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
  return books.reduce((accumulator, { author }, index) => {
    if (index === books.length - 1) return `${accumulator}${author.name}.`;
    else return accumulator + `${author.name}, `;
  }, '');
}

assert.strictEqual(reduceNames(), expectedResult);
