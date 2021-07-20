const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da manhã na lesson2.
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
// a chave que deverá ser adicionada e o valor dela.
function addNewKeyToObject(object, key, value) {
  const newObj = {};
  newObj[key] = value;

  return Object.assign(object, newObj);
}

console.log(addNewKeyToObject(lesson2, 'turno', 'manhã'));

// 2 - Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.
function listKeys(object) {
  return Object.keys(object).join(', ');
}

console.log(listKeys(lesson2));

// 3 - Crie uma função para mostrar o tamanho de um objeto.
function showObjectSize(object) {
  return Object.keys(object).length;
}

console.log(showObjectSize(lesson2));

// Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.
function listObjectValues(object) {
  const values = Object.keys(object).map(key => object[key]);

  return values.join(', ');
}

console.log(listObjectValues(lesson1));

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.
function getAllLessons() {
  const newObject = {};

  Object.assign(newObject, { lesson1, lesson1 });
  Object.assign(newObject, { lesson2, lesson2 });
  Object.assign(newObject, { lesson3, lesson3 });

  return newObject;
}

const allLessons = getAllLessons();

console.log(allLessons);

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de
// estudantes em todas as aulas.
function getNumberOfStudents(lessons) {
  let count = 0;

  Object.keys(lessons).forEach(
    (key) => (count += lessons[key].numeroEstudantes),
  );

  return count;
}

console.log(getNumberOfStudents(allLessons));

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
function getValueByIndex(object, index) {
  return Object.values(object)[index];
}

console.log(getValueByIndex(lesson1, 0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
function checkPair(object, key, value) {
  if (Object.keys(object).indexOf(key) >= 0) {
    return object[key] === value;
  }

  return false;
}

console.log(checkPair(lesson1, 'turno', 'manhã'));

// BÔNUS
// 1 - Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
// Use o objeto criado no exercício 5.
function getMathStudents(allLessons) {
  let count = 0;
  
  Object.keys(allLessons).forEach(lessonKey => {
    const { materia } = allLessons[lessonKey];
    const { numeroEstudantes } = allLessons[lessonKey];

    if (materia === 'Matemática') count += numeroEstudantes
  })

  return count;
}

console.log(getMathStudents(allLessons));

// 2 - Crie uma função que deverá retornar um objeto que representa o relatório do professor ou 
// professora, as aulas que ele ou ela ministrou 
// e o número total de estudantes. Use o objeto criado no exercício 5:
function getReport(object, teacher) {
  let newObject = { teacher, classes: [], students: 0 };
  Object.keys(object).forEach(lesson => {
    if (object[lesson].professor === teacher) {
      newObject.classes.push(object[lesson].materia);
      newObject.students += object[lesson].numeroEstudantes;
    }
  })

  return newObject;
}

console.log(getReport(allLessons, 'Carlos'));