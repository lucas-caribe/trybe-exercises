function createDaysOfTheWeek() {
	const weekDays = [
		'Domingo',
		'Segunda',
		'Terça',
		'Quarta',
		'Quinta',
		'Sexta',
		'Sábado',
	];
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Exercício 1:
// O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como
// filhos/filhas da tag <ul> com ID "days".
// Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente
// Domingo e Segunda-feira.

// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day.
// Ex: <li class="day">3</li>
// Os dias 24, 25 e 31 são feriados e, além da classe day,
// devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
// Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday.
// Ex: <li class="day friday">4</li>

function createDays() {
	const dezDaysList = [
		29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	const daysList = document.querySelector('#days');

	for (let day of dezDaysList) {
		const dayElement = document.createElement('li');

		dayElement.className = 'day';
		dayElement.innerText= day;

		if (day === 24 || day === 25 || day === 31) {
			dayElement.classList.add('holiday');
		}
		if (day === 4 || day === 11 || day === 18 || day === 25) {
			dayElement.classList.add('friday');
		}

		daysList.appendChild(dayElement);
	}
}

createDays();

// Exercício 2:
// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente
// um botão com o nome "Feriados".

// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createHolidaysButton(text) {
	const buttonsContainer = document.querySelector('.buttons-container');
	const btnHoliday = document.createElement('button');
	btnHoliday.id = 'btn-holiday';
	btnHoliday.innerText = text;

	buttonsContainer.appendChild(btnHoliday);
}

createHolidaysButton('Feriados');

// Exercício 3:
// Implemente uma função que adicione ao botão "Feriados" um evento de "click"
// que muda a cor de fundo dos dias que possuem a classe "holiday" .

// É interessante que este botão possua também a lógica inversa.
// Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)".
const holidaysButton = document.querySelector('#btn-holiday');
let highlightedHolidays = false;

holidaysButton.addEventListener('click', (event) => {
	event.preventDefault();

	const holidays = document.querySelectorAll('.holiday');
	const color = highlightedHolidays ? 'rgb(238,238,238)' : 'rgb(29,219,0)';

	for (let day of holidays) {
		day.style.backgroundColor = color;
	}

	highlightedHolidays = !highlightedHolidays;
});

// Exercício 4:
// Implemente uma função que receba como parâmetro a string "Sexta-feira"
// e crie dinamicamente um botão com o nome "Sexta-feira".

// Adicione a este botão o ID "btn-friday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".
function createFridaysButton(text) {
	const buttonsContainer = document.querySelector('.buttons-container');
	const btnFriday = document.createElement('button');
	btnFriday.id = 'btn-friday';
	btnFriday.innerText = text;

	buttonsContainer.appendChild(btnFriday);
}

createFridaysButton('Sexta-feira');

// Exercício 5:
// Implemente uma função que adicione ao botão "Sexta-feira" um evento de
// "click" que modifica o texto exibido nos dias que são Sexta-feira.

// É interessante que este botão possua também a lógica inversa.
// Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
const fridaysButton = document.querySelector('#btn-friday');
let markFridays = false;

fridaysButton.addEventListener('click', (event) => {
	event.preventDefault();

	const fridays = document.querySelectorAll('.friday');

	if (markFridays) {
		for (let day of fridays) {
			day.innerText = Number(day.previousElementSibling.innerText) + 1;
		}
	} else {
		for (let day of fridays) {
			day.innerText = "IT'S FRIDAY";
		}
	}

	markFridays = !markFridays;
});

// Exercício 6:
// Implemente duas funções que criem um efeito de "zoom".
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e,
// quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

// Dica - Propriedade: event.target.
const days = document.querySelectorAll('.day');
const originalFontSize = days[0].style.fontSize;

for (let day of days) {
	day.addEventListener('mouseenter', (event) => {
		event.target.style.fontSize = '25px';
	});

	day.addEventListener('mouseout', (event) => {
		event.target.style.fontSize = originalFontSize;
	});
}

// Exercício 7:
// Implemente uma função que adiciona uma tarefa personalizada ao calendário.
// A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar")
// e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui
// a classe "my-tasks".
const taskColors = [
	'green',
	'red',
	'blue',
	'orange'
];

function createTask(name) {
	const myTasks = document.querySelector('.my-tasks');

	const task = document.createElement('div');
	const taskName = document.createElement('span');
  taskName.innerText = name;
  task.appendChild(taskName);
  task.className = 'task-item';

  let randomColorIndex = Math.floor(Math.random() * 4);

  addColor(task, taskColors[randomColorIndex]);
  addColorSelector(task.lastChild);

	myTasks.appendChild(task);

	return task;
}

// Exercício 8:
// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior.
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento
// de tag <div> com a classe task .

// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function addColor(task, color) {
	const taskColor = document.createElement('div');
	taskColor.className = 'task-color';
	taskColor.style.backgroundColor = color;

	task.appendChild(taskColor);

	return taskColor;
}

// Exercício 9:
// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag
// <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected,
// ou seja, quando sua tarefa possuir a classe task selected, ela estará selecionada.

// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task,
// ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
function addColorSelector(taskDiv) {
	taskDiv.addEventListener('click', (event) => {
		const selectedTask = document.querySelector('.my-tasks > .task-item .selected');
		const div = event.target;

		if (div === selectedTask) {
			div.classList.remove('selected');
		} else if (selectedTask) {
			selectedTask.classList.remove('selected');
			div.classList.add('selected');
		} else {
			div.classList.add('selected');
		}

    console.log(selectedTask);
	});
}

// Exercício 10:
// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário,
// atribua a este dia a cor da legenda da sua tarefa selecionada.

// Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial
// rgb(119,119,119) .
const dayColor = 'rgb(119,119,119)';

for (let day of days) {
	day.addEventListener('click', (event) => {
		const selectedTask = document.querySelector('.my-tasks > .task-item .selected');
		const day = event.target;

		if (selectedTask) {
			const taskColor = selectedTask.style.backgroundColor;

			if (taskColor !== day.style.color) {
				day.style.color = taskColor;
			} else {
				day.style.color = dayColor;
			}
		}
	});
}

// Bônus:
// Vamos adicionar compromissos ao seu calendário? Implemente uma função que,
// ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista
// "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".

// Se nenhum caractere for inserido no campo input , a função deve retornar um
// alert com uma mensagem de erro ao clicar em "ADICIONAR".
// Ao pressionar a tecla "enter" o evento também deverá ser disparado.
// Dica - Propriedade: keyCode.
const taskInput = document.querySelector('.input-container > input');
const addTaskButton = document.querySelector('.input-container > button');

taskInput.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		event.preventDefault();

		addTaskButton.click();
	}
});

addTaskButton.addEventListener('click', (event) => {
	event.preventDefault();

	const text = taskInput.value;

	if (text.length > 0) {
		createTask(text);

		taskInput.value = '';
	} else {
		alert('O nome da tarefa não pode ser vazio!');
	}
});
