class ValidationError extends Error {
	constructor(message, elementId) {
		super(message);
		this.elementId = elementId;
	}
}

async function getStates() {
	const response = await fetch(
		'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
	);
	const data = await response.json();
	const states = [];

	data.forEach((state) => {
		states.push({ id: state.id, name: state.nome, acronym: state.sigla });
	});

	return states;
}

async function setStates(statesId) {
	const stateSelect = document.querySelector(statesId);
	const states = await getStates();

	states.forEach((state) => {
		const stateOption = document.createElement('option');
		stateOption.innerText = state.name;
		stateOption.value = state.id;

		stateSelect.appendChild(stateOption);
	});
}

async function handleStateChange(event) {
	const cityDataList = document.querySelector('#city-data');
	cityDataList.innerHTML = '';

	const apiParameters = `${event.target.value}/distritos?orderBy=nome`;

	const response = await fetch(
		`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${apiParameters}`
	);

	const data = await response.json();

	data.forEach((city) => {
		const cityElement = document.createElement('option');
		cityElement.value = city.nome;

		cityDataList.appendChild(cityElement);
	});
}

function validateName(nameId) {
	const nameInput = document.querySelector(nameId);
	const name = nameInput.value.trim();

	if (!name.length) {
		throw new ValidationError('Erro! Nome inválido', nameId);
	}

	return name;
}

function validateEmail(emailId) {
	const emailInput = document.querySelector(emailId);
	const email = emailInput.value.trim();
	const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	if (!email.match(emailPattern)) {
		throw new ValidationError('Erro! Email inválido', emailId);
	}

	return email;
}

function validateCPF(cpfId) {
	const cpfInput = document.querySelector(cpfId);
	const cpf = cpfInput.value.trim();
	const cpfPattern = /\d{3}\.\d{3}\.\d{3}-\d{2}/;

	if (!cpf.match(cpfPattern)) {
		throw new ValidationError('Erro! CPF inválido', cpfId);
	}

	return cpf;
}

function handleCPFInput(event) {
	const { target } = event;

	target.value = target.value.replace(/\D/g, '');
	target.value = target.value.replace(/(\d{3})(\d)/, '$1.$2');
	target.value = target.value.replace(/(\d{3})(\d)/, '$1.$2');
	target.value = target.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function validateAddress(addressId) {
	const addressInput = document.querySelector(addressId);
	const address = addressInput.value.trim();

	if (!address.length) {
		throw new ValidationError('Erro! Endereço inválido', addressId);
	}

	return address;
}

function validateCity(cityId) {
	const cityInput = document.querySelector(cityId);
	const city = cityInput.value.trim();
	const cityOption = document.querySelector(
		`#city-data > option[value='${city}']`
	);

	if (!cityOption) {
		throw new ValidationError('Erro! Cidade inválida', cityId);
	}

	return city;
}

function validateState(statesId) {
	const stateSelect = document.querySelector(statesId);

	if (!stateSelect.selectedIndex) {
		throw new ValidationError('Erro! Selecione um estado', statesId);
	}

	return stateSelect.options[stateSelect.selectedIndex].innerText;
}

function validateType() {
	const typeRadioInputs = document.querySelectorAll(
		'input[name="housing-type"]'
	);
	let selectedInput = '';

	typeRadioInputs.forEach((input) => {
		if (input.checked) {
			selectedInput = input.value;
			return;
		}
	});

	if (selectedInput === '') {
		throw new ValidationError(
			'Erro! Selecione um tipo de moradia',
			'#type-house'
		);
	}

	return selectedInput;
}

function validateResume(resumeId) {
	const resumeInput = document.querySelector(resumeId);
	const resume = resumeInput.value.trim();

	if (!resume.length) {
		throw new ValidationError(
			'Erro! Escreva um resumo do seu currículo',
			resumeId
		);
	}

	return resume;
}

function validateRole(roleId) {
	const roleInput = document.querySelector(roleId);
	const role = roleInput.value.trim();

	if (!role.length) {
		throw new ValidationError('Erro! Cargo inválido', roleId);
	}

	return role;
}

function validateDescription(descriptionId) {
	const descriptionInput = document.querySelector(descriptionId);
	const description = descriptionInput.value.trim();

	if (!description.length) {
		throw new ValidationError('Erro! Descrição inválida', descriptionId);
	}

	return description;
}

function validateDate(dateId) {
	const dateInput = document.querySelector(dateId);
	const date = dateInput.value.trim();
	const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;

	if (!date.match(datePattern)) {
		throw new ValidationError('Erro! Data inválida', dateId);
	}

	let [day, month, year] = date.split('/');

	day = Number(day);
	month = Number(month);
	year = Number(year);

	if (day < 0 || day > 31) {
		throw new ValidationError('Erro! Data inválida', dateId);
	}

	if (month < 0 || month > 12) {
		throw new ValidationError('Erro! Data inválida', dateId);
	}

	if (year < 0) {
		throw new ValidationError('Erro! Data inválida', dateId);
	}

	return date;
}

function handleDateInput(event) {
	const { target } = event;

	target.value = target.value.replace(/\D/g, '');
	target.value = target.value.replace(/(\d{2})(\d)/, '$1/$2');
	target.value = target.value.replace(/(\d{2})(\d)/, '$1/$2');
}

function createFormElement(description, content) {
	const itemDiv = document.createElement('div');
	itemDiv.className = 'form-result-item';

	const descriptionElement = document.createElement('span');
	descriptionElement.innerText = description;

	const contentElement = document.createElement('span');
	contentElement.innerText = content;

	itemDiv.appendChild(descriptionElement);
	itemDiv.appendChild(contentElement);

	return itemDiv;
}

function showData(formData) {
	const formTarget = document.querySelector('#form-data');
	formTarget.innerHTML = '';

	formTarget.appendChild(createFormElement('Nome: ', formData.name));
	formTarget.appendChild(createFormElement('Email: ', formData.email));
	formTarget.appendChild(createFormElement('CPF: ', formData.cpf));
	formTarget.appendChild(createFormElement('Endereço: ', formData.address));
	formTarget.appendChild(createFormElement('Cidade: ', formData.city));
	formTarget.appendChild(createFormElement('Estado: ', formData.state));
	formTarget.appendChild(createFormElement('Tipo de moradia: ', formData.housingType));
	formTarget.appendChild(createFormElement('Resumo do currículo: ', formData.resume));
	formTarget.appendChild(createFormElement('Cargo: ', formData.role));
	formTarget.appendChild(createFormElement('Descrição do cargo: ', formData.roleDescription));
	formTarget.appendChild(createFormElement('Data inicial: ', formData.initialDate));
}

function clearInputs(event) {
	event.preventDefault();

	const allInputs = document.querySelectorAll('input');
	const stateSelect = document.querySelector('#states');
	const resumeInput = document.querySelector('#resume');

	allInputs.forEach(input => {
		input.value = '';
	})

	stateSelect.selectedIndex = 0;
	resumeInput.value = '';

	allInputs[0].focus();
}

function handleSubmit(event) {
	event.preventDefault();
	const formData = {};

	try {
		const formData = {
			name: validateName('#name'),
			email: validateEmail('#email'),
			cpf: validateCPF('#cpf'),
			address: validateAddress('#address'),
			city: validateCity('#city'),
			state: validateState('#states'),
			housingType: validateType(),
			resume: validateResume('#resume'),
			role: validateRole('#role'),
			roleDescription: validateDescription('#description'),
			initialDate: validateDate('#date'),
		};

		console.log(formData);
		showData(formData);
	} catch (error) {
		const formTarget = document.querySelector('#form-data');
		const errorMessage = document.createElement('p');
		errorMessage.innerText = error.message;

		formTarget.innerHTML = '';
		formTarget.appendChild(errorMessage);

		document.querySelector(error.elementId).focus();
	}
}

window.onload = () => {
	setStates('#states');
};
