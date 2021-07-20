const { expect } = require('@jest/globals');

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  });

const getListAnimals = (type) => findAnimalsByType(type).then((list) => list);

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', async () => {
    const dogList = await getListAnimals('Dog');

    expect(dogList[0].name).toBe('Dorminhoco');
    expect(dogList[1].name).toBe('Soneca');
  });
});

describe('Quando o tipo do animal não existe', () => {
  test('Retorne uma mensagem de erro', async () => {
    try {
      await getListAnimals('Dog');
    } catch (error) {
      expect(error).toEqual({ error: 'Não possui esse tipo de animal.' });
    }
  });
});
