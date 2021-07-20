let romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

function romanToDec(roman) {
    let result = 0;
    
    for(let i = 0; i < roman.length - 1; i += 2) {
        let current = romanNumerals[roman[i]];
        let next = romanNumerals[roman[i + 1]];

        if(current < next) {
            result += next - current;
        } else {
            result += next + current;
        }
    }

    console.log(result);
}

romanToDec('VIII');