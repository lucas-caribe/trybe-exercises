const assert = require('assert');
const books = require('./books');

//  6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false ,
// caso contrário.
const expectedResult = true;

const someBookWasReleaseOnThe80s = () =>
  books.some(({ releaseYear }) => releaseYear >= 1980 && releaseYear < 1990);

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
