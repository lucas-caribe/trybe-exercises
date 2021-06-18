function getLongestWord(word) {
  let longest = -1;
  let longestIndex = -1;

  const wordArray = word.replace(',', '').split(' ');
  
  wordArray.forEach((word, index) => {
    if (word.length > longest) {
      longest = word.length;
      longestIndex = index;
    }
  });

  return wordArray[longestIndex];
}

const longestWord = getLongestWord("Antônio foi no banheiro e não sabemos o que aconteceu");

console.log(`A maior palavra é: ${longestWord}`); // retorna 'aconteceu'