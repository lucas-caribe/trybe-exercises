// 3. Crie uma função que mude a cor do quadrado vermelho para branco.
const centerContent = document.getElementsByClassName('center-content');

function changeColorToWhite(element) {
    element.style.backgroundColor = 'white';
}

for (let element of centerContent) {
    changeColorToWhite(element);
}