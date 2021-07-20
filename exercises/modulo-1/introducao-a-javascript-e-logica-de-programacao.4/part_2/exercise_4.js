function getLongestName(array) {
    let max = -1;
    let index = -1;

    for(let i = 0; i < array.length; i++) {
        let size = array[i].length;

        if(size > max) {
            max = size;
            index = i;
        }
    }

    return array[index];
}

console.log(getLongestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));