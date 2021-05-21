let number = 1;
let limit = Math.sqrt(number);
let isPrime = true;

if(number === 1) isPrime = false; 

for(let i = 2; i <= limit; i++) {
  if(number % i === 0) {
    isPrime = false;
    break;
  }
}

if(isPrime) {
  console.log(`${number} é um número primo!`);
} else {
  console.log(`${number} não é primo!`)
}