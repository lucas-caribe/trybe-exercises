function getMaxIndex(array) {
    let max = -1;
    let index = -1;
    
    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) {
            max= array[i];
            index = i;
        }
    }

    return index;
}

console.log(getMaxIndex([2, 3, 6, 7, 10, 1]));