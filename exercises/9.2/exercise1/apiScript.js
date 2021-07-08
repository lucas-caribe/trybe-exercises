// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const options = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, options)
    .then((response) => response.json())
    .then((data) => {
      const jokeContainer = document.querySelector('#jokeContainer');

      jokeContainer.innerText = data.joke;
    });
};

window.onload = () => fetchJoke();
