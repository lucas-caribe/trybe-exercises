let names = {
	person1: 'João',
	person2: 'Maria',
	person3: 'Jorge',
};

for(person in names) {
    console.log(`Olá ${names[person]}`);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for(property in car) {
    console.log(`${property}: ${car[property]}`);
}