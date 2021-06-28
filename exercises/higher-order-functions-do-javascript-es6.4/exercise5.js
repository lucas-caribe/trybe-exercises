const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a
// letra a maiúscula ou minúscula.
function containsA() {
  return names.reduce((sum, name) => {
    return sum + name.replace(/[^aA]/g, '').length;
  }, 0);
}

assert.deepStrictEqual(containsA(), 20);
