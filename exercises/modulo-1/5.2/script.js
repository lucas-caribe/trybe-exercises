// Part 1
// 1. Acesse o elemento elementoOndeVoceEsta.
const currentElement = document.querySelector('#elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const parentElement = currentElement.parentElement;

parentElement.style.backgroundColor = 'red';

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
//Você se lembra dos vídeos da aula anterior, como fazer isso?
const firstChild = document.querySelector('#primeiroFilhoDoFilho');
firstChild.innerHTML = 'Aqui vai um texto bem legal';

// 4. Acesse o primeiroFilho a partir de pai .
const firstChildFromParent = parentElement.firstElementChild;
// console.log(firstChildFromParent);

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
const firstChildFromCurrentElement = currentElement.firstElementChild;
// console.log(firstChildFromCurrentElement);

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
const attention = currentElement.nextSibling;
// console.log(attention);

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
const thirdChildFromCurrentElement = currentElement.nextElementSibling;
// console.log(thirdChildFromCurrentElement);

// 8. Agora acesse o terceiroFilho a partir de pai .
const thirdChildFromParent =
	parentElement.firstElementChild.nextElementSibling.nextElementSibling;
// console.log(thirdChildFromParent);

// Part 2
// 1. Crie um irmão para elementoOndeVoceEsta.
const currentsSibling = document.createElement('div');
currentsSibling.id = 'currents-sibling';
parentElement.appendChild(currentsSibling);

// 2. Crie um filho para elementoOndeVoceEsta.
const currentsChild = document.createElement('div');
currentsChild.id = 'currents-child';
currentElement.appendChild(currentsChild);

// 3. Crie um filho para primeiroFilhoDoFilho.
const currentsChildsChild = document.createElement('div');
currentsChildsChild.id = 'currents-child-child';
currentsChild.appendChild(currentsChildsChild);

// 4. A partir desse filho criado, acesse terceiroFilho.
const thirdChildFromTheDeepWeb =
	currentsChildsChild.parentElement.parentElement.nextElementSibling;
// console.log(thirdChildFromTheDeepWeb);

// Part 3
function removeNodes(node) {
    if(node === null) return;

    removeNodes(node.firstChild);

    removeNodes(node.nextSibling);

    if(node.id !== 'pai' && node.id !== 'elementoOndeVoceEsta' && node.id !== 'primeiroFilhoDoFilho') {
        console.log(`should remove ${node.id}`);
        node.parentNode.removeChild(node);
    }
}

removeNodes(parentElement);