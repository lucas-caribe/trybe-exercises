let n = 9;

for(let i = 0, maxStars = 1; i < n/2; i++, maxStars += 2) {
  let result = '';
  let maxSpaces = Math.floor(n/2 - i);

  for(let j = 0; j < maxSpaces; j++) {
    result += ' ';
  }

  for(let j = 0; j < maxStars; j++) {
    result += '*';
  }

  console.log(result);
}