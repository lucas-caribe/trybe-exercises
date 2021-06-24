// nerf plz
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const getDragonAttack = () => getRandomNumber(15, dragon.strength);

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo)
// e o valor de strength * weaponDmg (dano máximo).
const getWarriorAttack = () =>
  getRandomNumber(warrior.strength, warrior.strength * warrior.weaponDmg);

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo
// o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo)
// e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional,
// caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem
// (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const getMageAttack = () => {
  const damage = getRandomNumber(mage.intelligence, mage.intelligence * 2);

  if (mage.mana >= 15) return { damage, mana: 15 };

  return { damage: 'not enough mana', mana: 0 };
};

const gameActions = {
  // 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula
  // o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula
  // o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon .
  // Além disto ela também deve atualizar o valor da chave damage do warrior .
  warriorTurn: (getWarriorAttack) => {
    const warriorDamage = getWarriorAttack();

    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  // 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o
  // turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula
  // o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon .
  // Além disto ela também deve atualizar o valor das chaves damage e mana do mage.
  mageTurn: (getMageAttack) => {
    const { damage, mana } = getMageAttack();

    if (typeof damage === 'number') {
      dragon.healthPoints -= damage;
      mage.damage = damage;
      mage.mana -= mana;
    } else {
      console.log(damage);
    }
  },
  // 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que
  // simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função
  // que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos
  // personagens mage e warrior . Além disto ela também deve atualizar o valor da chave
  // damage do monstro.
  dragonTurn: (getDragonAttack) => {
    const dragonDamage = getDragonAttack();

    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  // 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers
  // atualizado e faça um console.log para visualizar o resultado final do turno.
  getTurnResult: () => battleMembers,
};

gameActions.warriorTurn(getWarriorAttack);
gameActions.mageTurn(getMageAttack);
gameActions.dragonTurn(getDragonAttack);

console.log(gameActions.getTurnResult());
