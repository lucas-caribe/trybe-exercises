// Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
// Através de um loop for , percorra essa variável, busque os números pares e os adicione
// a um novo array que deverá ser retornado ao final pela pela função.

function arrayOfNumbers(vector) {
	let evenNumbers = [];

	for (let line of vector) {
		for (let num of line) {
			if (num % 2 === 0) evenNumbers.push(num);
		}
	}

	return evenNumbers;
}

console.log(
	arrayOfNumbers([
		[1, 2],
		[3, 4, 5, 6],
		[7, 8, 9, 10],
	])
);
