const skills = ['JavaScript', 'HTML', 'CSS', 'Problem Solving', 'C/C++'];

// Função 1: Escreva uma função que vai receber uma string como parâmetro.
// Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir
// pela string que você passou como parâmetro. Sua função deve retornar essa nova string.

// Exemplo:

//     String determinada: "Tryber x aqui!"
//     Parâmetro: "Bebeto"
//     Retorno: "Tryber Bebeto aqui!"

function replaceX(string) {
  return `Tryber ${string} aqui!`;
}

console.log(replaceX('Lucas'));

// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. 
// Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. 
// Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:

//     JavaScript;
//     HTML; ... #goTrybe".

function showSkills(string) {
  const orderedSkills = skills.sort();

  return `${string} Minhas principais skills são: ${orderedSkills.join(', ')}`;
}

console.log(showSkills(replaceX('Lucas')));