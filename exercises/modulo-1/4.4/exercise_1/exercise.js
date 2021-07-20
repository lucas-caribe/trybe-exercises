let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
    get fullName() { return this.name + ' ' + this.lastName },
};

console.log(`A jogadora ${player.fullName} tem ${player.age} anos de idade.\n`);

console.log(`A jogadora ${player.fullName} foi eleita a melhor do mundo por ${player.bestInTheWorld.length} vezes
em ${player.bestInTheWorld}\n`);

console.log(`A jogadora possui ${player.medals.silver} medalhas de ouro e ${player.medals.golden} medalhas de prata`);