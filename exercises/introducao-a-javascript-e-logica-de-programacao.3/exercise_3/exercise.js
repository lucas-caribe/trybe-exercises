let n = 5;

for(let i = 0; i < n; i++) {
  let result = '';
  
  for(let j = n - 1; j > i; j--) {
    result += ' ';
  }

  for(let j = 0; j <= i; j++) {
    result += '*';
  }

  console.log(result);
}