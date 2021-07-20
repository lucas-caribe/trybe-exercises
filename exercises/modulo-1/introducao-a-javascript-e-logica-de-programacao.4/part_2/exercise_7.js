function checkEnding(word, ending) {
    let startingPoint = word.length - ending.length;
    let isEqual = true;

    for(let i = startingPoint, j = 0; i < word.length; i++, j++) {
        if(word[i] !== ending[j]) {
            isEqual = false;
            break;
        }
    }

    return isEqual;
}

console.log(checkEnding('joaofernando', 'fernan'));