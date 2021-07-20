function getRepeatedNumbers(array) {
    let counter = {};

    for(number of array) {
        if(counter[number] === undefined) {
            counter[number] = 1;
        } else {
            counter[number]++;
        }
    }

    let maxAmount = -1;
    let result;

    for(let key in counter) {
        if(counter[key] > maxAmount) {
            maxAmount = counter[key];
            result = key;
        }
    }

    return result;
}

console.log(getRepeatedNumbers([1, 1, 2, 1, 8, 2, 1]));