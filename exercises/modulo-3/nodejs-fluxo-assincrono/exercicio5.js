// 5 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .

const fs = require('fs').promises;

const stringArray = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

async function createAllFiles() {
  stringArray.forEach((str, index) => {
    fs.writeFile(`file${index + 1}.txt`, str);
  });

  const promiseArray = [];

  for (let i = 1; i <= stringArray.length; i += 1) {
    const promise = fs.readFile(`file${i}.txt`, 'utf-8');
    promiseArray.push(promise);
  }

  const response = await Promise.all(promiseArray);
  const responseString = response.join(' ');

  fs.writeFile('fileAll.txt', responseString);
}

createAllFiles();
