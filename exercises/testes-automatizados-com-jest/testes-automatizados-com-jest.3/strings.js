// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e
// retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a
// primeira letra. A terceira deve receber duas strings e concatená-las.

const upperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concat = (a, b) => a + b;

module.exports = { upperCase, firstLetter, concat };
