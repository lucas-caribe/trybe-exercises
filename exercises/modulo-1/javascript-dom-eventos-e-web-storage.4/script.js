function setColorPicker(element, colors) {
	for (let index = 0; index < colors.length; index += 1) {
		const colorDiv = document.createElement('div');
		colorDiv.style.backgroundColor = colors[index];
		colorDiv.className = 'color-picker-item';
		colorDiv.setAttribute('index', index);

		element.appendChild(colorDiv);
	}
}

function init() {
	const titleElement = document.querySelector('.text-block h1');
	const textElement = document.querySelector('.text-block p');
	const backgroundColorPicker = document.querySelector('.bg-color-picker');
	const textColorPicker = document.querySelector('.text-color-picker');

	titleElement.innerText = textTitle;
	textElement.innerText = text;

	setColorPicker(backgroundColorPicker, colorsList);
	setColorPicker(textColorPicker, colorsList);

	if (localStorage.backgroundColor !== undefined) {
		document.body.style.backgroundColor = localStorage.backgroundColor;
	}

	if(localStorage.textColor !== undefined) {
		document.body.style.color = localStorage.textColor;
	}
}

function handleColorPicker(styleToChange, colorPicker, target) {
	const isColorPicker = target.classList.contains('color-picker');
	const isColorPickerItem = target.classList.contains('color-picker-item');

	if (isColorPicker || isColorPickerItem) {
		const colorIndex = target.getAttribute('index');

		if (colorIndex) {
			if (styleToChange === 'color') {
				document.body.style.color = colorsList[colorIndex];
				localStorage.textColor = colorsList[colorIndex];
			} else if (styleToChange === 'backgroundColor') {
				document.body.style.backgroundColor = colorsList[colorIndex];
				localStorage.backgroundColor = colorsList[colorIndex];
			}
		}
	} else {
		const active = document.querySelector('.active');

		if (active) {
			active.classList.remove('active');
			active.classList.add('hidden');
		}

		if (active !== colorPicker) {
			colorPicker.classList.add('active');
			colorPicker.classList.remove('hidden');
		}
	}
}

window.onload = () => {
	init();

	const body = document.body;
	const backgroundSettings = document.querySelector('.background-settings');
	const textColorSettings = document.querySelector('.text-color-settings');
	const main = document.querySelector('main');

	backgroundSettings.addEventListener('click', (event) => {
		const bgColorPicker = document.querySelector('.bg-color-picker');
		handleColorPicker('backgroundColor', bgColorPicker, event.target);
	});

	textColorSettings.addEventListener('click', (event) => {
		const textColorPicker = document.querySelector('.text-color-picker');
		handleColorPicker('color', textColorPicker, event.target);
	});

	main.addEventListener('click', (event) => {
		const active = document.querySelector('.active');

		if (active) {
			active.classList.remove('active');
			active.classList.add('hidden');
		}
	});
};
