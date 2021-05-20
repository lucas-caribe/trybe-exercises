// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 
console.log('Exercise 1:');
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers) {
  console.log(number);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
console.log('Exercise 2:');
let count = 0;

for(let number of numbers) {
  count += number;
}

console.log(count);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array; 
console.log('Exercise 3:');
let mean = count/numbers.length;

console.log(mean);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
// "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log('Exercise 4:');
if(mean > 20){
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o; 
console.log('Exercise 5:');
let max = -1;

for(let number of numbers) {
  if(number > max) {
    max = number;
  }
}

console.log(max);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. 
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; 
console.log('Exercise 6:');
let odd = 0;

for(let number of numbers) {
  if(number % 2 !== 0) {
    odd++;
  }
}

if(odd > 0) {
  console.log(odd);
} else {
  console.log('nenhum valor ímpar encontrado');
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o; 
console.log('Exercise 7:');
let min = Infinity;

for(let number of numbers) {
  if(number < min) {
    min = number;
  }
}

console.log(min);

// 8. Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 
console.log('Exercise 8:');
let array = [];

for(let i = 1; i < 26; i++) {
  array.push(i);
}

console.log(array);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 
console.log('Exercise 9:');

for(let number of array) {
  console.log(number / 2);
}