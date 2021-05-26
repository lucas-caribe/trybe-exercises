// 4. Crie uma função que corrija o texto da tag <h1>.
const title = document.getElementsByClassName('title');

function fixH1(element) {
    element.innerText = 'Exercício 5.1 - JavaScript';
}

fixH1(title[0]);