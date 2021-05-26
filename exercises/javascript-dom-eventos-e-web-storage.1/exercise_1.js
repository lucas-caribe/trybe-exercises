// 1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. 
// (Não gaste tempo pensando no texto e sim realizando o exercício)

let text = document.getElementsByTagName('p');

text[0].innerText = "Como me vejo daqui a 2 anos";
text[1].innerText = "Quero estar trabalhando como programador em uma grande empresa!";