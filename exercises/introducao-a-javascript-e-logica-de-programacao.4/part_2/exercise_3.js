function getMinIndex(array) {
    let min = Infinity;
    let index = -1;

    for(let i = 0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i];
            index = i;
        }
    }
 
    return index;
}

console.log(getMinIndex([2, 4, 6, 7, 10, 0, -3]))