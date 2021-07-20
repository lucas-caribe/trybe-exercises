const assert = require('assert');
const books = require('./books');

// 2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook;
  let nameLength = Infinity;

  books.forEach(({ name }) => {
    if (name.length < nameLength) {
      nameBook = name;
      nameLength = name.length;
    }
  });

  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
