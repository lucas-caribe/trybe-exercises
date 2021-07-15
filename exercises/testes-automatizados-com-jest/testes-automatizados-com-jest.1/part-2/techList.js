function techList(techs, name) {
  if (techs.length === 0) return 'Vazio!';

  techs.sort();

  return techs.map((tech) => ({ tech, name }));
}

module.exports = techList;
