const data = require('./data');

const searchEmployee = (searchId, detail) => {
  const foundEmployee = data.find(({ id }) => id === searchId);

  if (!foundEmployee) return 'ID não identificada';

  if (!foundEmployee[detail]) return 'Informação indisponível';

  return foundEmployee[detail];
};

module.exports = searchEmployee;
