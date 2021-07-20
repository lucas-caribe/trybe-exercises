function isPalindromo(word) {
    let reversedString = word.split('').reverse().join('');

    if(reversedString === word)
        return true;

    return false;
}

console.log(isPalindromo('arara'));