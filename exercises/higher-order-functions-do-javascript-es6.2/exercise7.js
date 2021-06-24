const assert = require('assert');
const books = require('./books');

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false ,
// caso contrário.
const expectedResult = false;

const authorUnique = () => {
  const yearTable = {};
  let found = false;

  books.forEach(({ author }) => {
    if (yearTable[author.birthYear] === undefined) {
      yearTable[author.birthYear] = 1;
    } else {
      found = true;
      return null;
    }
  });

  return !found;
};

assert.strictEqual(authorUnique(), expectedResult);
