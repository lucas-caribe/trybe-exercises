const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

// 1 - Dada uma matriz, transforme em um array.
function flatten() {
  return arrays.reduce((accumulator, current) => accumulator.concat(current));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
