// 3 - Reescreva o código do exercício anterior para que utilize async/await .

const numberPromise = require('./exercicio1');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

async function getNumberPromise() {
  try {
    const response = await numberPromise(a, b, c);

    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getNumberPromise();
