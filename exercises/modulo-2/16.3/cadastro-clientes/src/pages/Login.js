import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../components/Input';

import { login } from '../redux/actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleClick = (event) => {
    const { history, dispatchLogin } = this.props;

    event.preventDefault();

    dispatchLogin();

    history.push('/clients');
  };

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleClick}>
        <Input
          type="email"
          name="email"
          id="email"
          onChange={this.handleChange}
          value={email}
          labelText="Email:"
        />

        <Input
          type="password"
          name="password"
          id="password"
          onChange={this.handleChange}
          value={password}
          labelText="Senha:"
        />

        <button type="submit" onClick={this.handleClick}>
          Login
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchLogin: () => dispatch(login()),
});

export default connect(null, mapDispatchToProps)(Login);
