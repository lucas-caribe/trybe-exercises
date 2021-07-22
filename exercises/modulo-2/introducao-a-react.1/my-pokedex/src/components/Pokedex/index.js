import { Component } from 'react';

import Pokemon from '../Pokemon';

import pokemonList from '../../data';

export default class Pokedex extends Component {
  render() {
    return pokemonList.map((pokemon) => (
      <Pokemon pokemon={pokemon} key={pokemon.id} />
    ));
  }
}
