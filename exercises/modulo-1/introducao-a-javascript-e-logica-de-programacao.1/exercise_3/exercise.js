let a = 45;
let b = 29;
let c = 125;

if (a > b) {
  let aux = a;
  a = b;
  b = aux;
}

if(a > c) {
  let aux = a;
  a = c;
  c = aux;
}

if(b > c) {
  let aux = b;
  b = c;
  c = aux;
}

console.log(`O maior é: ${c}`);