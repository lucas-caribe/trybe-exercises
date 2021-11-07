import { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='pokemon-card'>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {averageWeight.value}
          {averageWeight.measurementUnit}
        </p>
        <img src={image} alt={name} />
      </div>
    );
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string,
};
