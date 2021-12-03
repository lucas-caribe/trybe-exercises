// 7 - Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:
// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.

const readline = require('readline-sync');
const fs = require('fs');
const getFile = require('./exercicio6');

async function main() {
  const fileContent = await getFile();

  console.log(fileContent);
}

main();
