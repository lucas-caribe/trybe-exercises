const fetch = require('node-fetch');

const getDogPicture = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

module.exports = getDogPicture;
