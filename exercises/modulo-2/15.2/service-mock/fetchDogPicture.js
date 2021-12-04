const fetch = require('node-fetch');

const fetchDogPicture = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const { message } = await response.json();

  return message;
};

module.exports = fetchDogPicture;
