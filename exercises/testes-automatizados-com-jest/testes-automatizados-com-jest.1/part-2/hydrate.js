function hydrate(string) {
  string = string.replace(/[^\d]/g, '');
  let sum = 0;

  for (let char of string) {
    sum += Number(char);
  }

  return sum === 1 ? '1 copo de água' : `${sum} copos de água`;
}

module.exports = hydrate;
