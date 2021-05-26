// 2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
const mainContent = document.getElementsByClassName('main-content');

function changeColorToGreen(element) {
    element.style.backgroundColor = 'rgb(76, 164, 109)';
}

for (let element of mainContent) {
    changeColorToGreen(element);
}