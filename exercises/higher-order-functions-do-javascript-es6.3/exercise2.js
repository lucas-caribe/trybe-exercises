const assert = require('assert');
const books = require('../higher-order-functions-do-javascript-es6.2/books');

// 2 - Construa um array de objetos a partir do array de livros.
// Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro,
// e uma propriedade age com a idade dessa pessoa quando o livro foi lançado.
// O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha
// considerando suas idades quando o livro foi lançado.
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

const nameAndAge = () => {
  const newBooks = books.map((book) => {
    const age = book.releaseYear - book.author.birthYear;
    const author = book.author.name;

    return { age, author };
  });

  return newBooks.sort((a, b) => a.age - b.age);
};

assert.deepStrictEqual(nameAndAge(), expectedResult);
