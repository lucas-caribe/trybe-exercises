// 6 - Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.

const readline = require('readline-sync');
const fs = require('fs').promises;

async function readFile() {
  const filename = readline.question('Insira o nome do arquivo: ');

  try {
    const fileContent = await fs.readFile(filename, 'utf-8');
    console.log(fileContent);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

readFile();
