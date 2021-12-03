const express = require('express');

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const app = express();
const PORT = 3001;

const nameCompare = ({ name: aName }, { name: bName }) =>
  aName.localeCompare(bName);

app.get('/drinks', (req, res) => {
  const drinksCopy = [...drinks];

  res.json(drinksCopy.sort(nameCompare));
});

app.get('/drink/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find(({ id: drinkId }) => Number(id) === drinkId);

  res.json(drink);
});

app.get('/recipes', (req, res) => {
  const recipesCopy = [...recipes];

  res.json(recipesCopy.sort(nameCompare));
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`);
});
