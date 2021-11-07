import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { type, name, id, value, onChange, labelText } = this.props;

    return (
      <label htmlFor={id}>
        {labelText}
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
        />
      </label>
    );
  }
}

export default Input;
