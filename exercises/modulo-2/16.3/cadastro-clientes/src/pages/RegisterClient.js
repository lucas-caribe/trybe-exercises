import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';

import { add } from '../redux/actions/clientsActions';

class RegisterClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = (event) => {
    const { name, age, email } = this.state;
    const { history, addClient } = this.props;
    
    event.preventDefault();

    if (!name || !age || !email) alert('Informações inválidas!');
    else {
      addClient({ name, age, email });
      history.push('/clients');
    }
  }

  render() {
    const { name, age, email } = this.state;

    return (
      <form onSubmit={ this.handleClick }>
        <Input
          type="text"
          name="name"
          id="name"
          onChange={this.handleChange}
          value={name}
          labelText="Nome:"
        />

        <Input
          type="number"
          name="age"
          id="age"
          onChange={this.handleChange}
          value={age}
          labelText="Idade:"
        />

        <Input
          type="email"
          name="email"
          id="email"
          onChange={this.handleChange}
          value={email}
          labelText="Email:"
        />

        <button type="submit" onClick={ this.handleClick }>Cadastrar</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addClient: (client) => dispatch(add(client)),
});

export default connect(null, mapDispatchToProps)(RegisterClient);
