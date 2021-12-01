const fs = require('fs').promises;

const simpsonsFile = 'simpsons.json';
const simpsonFamilyFile = 'simpsonFamily.json';

async function getCharactersFromFile(filename) {
  try {
    const characters = await fs.readFile(filename, 'utf-8');

    return JSON.parse(characters);
  } catch (error) {
    return [];
  }
}

// 1 - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

async function showSimpsons() {
  try {
    const characters = await getCharactersFromFile(simpsonsFile);

    characters.forEach(({ id, name }) => {
      console.log(`${id} - ${name}`);
    });
  } catch (error) {
    console.log(error);
  }
}

// showSimpsons();

// 2 - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

function getCharacterById(id) {
  return new Promise(async (resolve, reject) => {
    const characters = await getCharactersFromFile(simpsonsFile);

    const foundCharacter = characters.find(
      ({ id: characterId }) => Number(characterId) === id,
    );

    if (foundCharacter) {
      resolve(foundCharacter);
    }

    reject('id não encontrado');
  });
}

// getCharacterById(1)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// 3 - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function removeCharacters() {
  const characters = await getCharactersFromFile(simpsonsFile);
  const filteredCharacters = characters.filter(
    ({ id }) => Number(id) !== 10 && Number(id) !== 6,
  );

  try {
    await fs.writeFile('./simpsons.json', JSON.stringify(filteredCharacters));
    console.log('Personagens removidos com sucesso!');
  } catch (error) {
    console.log(error);
  }
}

// removeCharacters();

// 4 - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.

async function getSimpsonFamily() {
  const characters = await getCharactersFromFile(simpsonsFile);
  const simpsonFamily = characters.slice(0, 4);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
    console.log('Arquivo criado com sucesso');
  } catch (error) {
    console.log(error);
  }
}

// getSimpsonFamily();

// 5 - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .

async function addNelson() {
  const characters = await getCharactersFromFile(simpsonsFile);
  const nelson = characters.find(({ name }) => name === 'Nelson Muntz');

  const simpsonFamily = await getCharactersFromFile(simpsonFamilyFile);
  simpsonFamily.push(nelson);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
    console.log('Nelson adicionado com sucesso');
  } catch (error) {
    console.log(error);
  }
}

addNelson();

// 6 - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .

async function removeNelson() {
  const characters = await getCharactersFromFile(simpsonsFile);
  const maggie = characters.find(({ name }) => name === 'Maggie Simpson');

  const simpsonFamily = await getCharactersFromFile(simpsonFamilyFile);
  const filteredFamily = simpsonFamily.filter(
    ({ name }) => name !== 'Nelson Muntz',
  );
  filteredFamily.push(maggie);

  try {
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredFamily));
    console.log('Nelson removido e Maggie adicionada com sucesso');
  } catch (error) {
    console.log(error);
  }
}

removeNelson();
