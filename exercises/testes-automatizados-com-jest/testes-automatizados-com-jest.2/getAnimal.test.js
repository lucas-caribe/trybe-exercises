const animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimal = animals.find((animal) => animal.name === name);

      if (foundAnimal) {
        return resolve(foundAnimal);
      }

      return reject('Nenhum animal com esse nome!');
    }, 100);
  });

const findAnimalsByAge = (age) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAnimals = animals.filter((animal) => animal.age === age);

      if (foundAnimals.length) {
        return resolve(foundAnimals);
      }

      return reject('Nenhum animal com essa idade!');
    }, 100);
  });

const getAnimal = (name) =>
  findAnimalByName(name).then((foundName) => foundName);

const getAnimalsByAge = (age) =>
  findAnimalsByAge(age).then((foundAnimals) => foundAnimals);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then((animal) => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch((error) =>
        expect(error).toBe('Nenhum animal com esse nome!'),
      );
    });
  });
});

describe('Testando promise - findAnimalsByAge', () => {
  describe('Quando existe algum animal com a idade procurada', () => {
    test('Retorne um array de animais', () => {
      expect.assertions(1);
      return getAnimalsByAge(1).then((animals) => {
        expect(animals).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe nenhum animal com a idade procurada', () => {
    test('Retorne um erro', () => {
      expect.assertions(1);
      return getAnimalsByAge(99).catch((error) =>
        expect(error).toBe('Nenhum animal com essa idade!'),
      );
    });
  });
});
