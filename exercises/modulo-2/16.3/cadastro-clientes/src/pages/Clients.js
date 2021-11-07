import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { remove } from '../redux/actions/clientsActions';

class Clients extends Component {
  handleRemove = (client) => {
    const { removeClient } = this.props;

    if (window.confirm('Deseja mesmo remover?')) {
      removeClient(client);
    }
  }
  
  renderClients = () => {
    const { clients } = this.props;

    return clients.map((client) => (
      <div className="client">
        <p>{client.name}</p>
        <p>{client.age}</p>
        <p>{client.email}</p>
        <button type="button" onClick={ () => this.handleRemove(client) }>remover</button>
      </div>
    ));
  };

  render() {
    const { isLoggedIn, clients } = this.props;

    if (!isLoggedIn) {
      return <p>Login não efetuado</p>;
    }

    return (
      <div>
        {clients.length ? this.renderClients() : 'Nenhum cliente cadastrado'}
        <Link to="/clients/register">Cadastrar Cliente</Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, clients }) => ({
  isLoggedIn: auth.loggedIn,
  clients,
});

const mapDispatchToProps = (dispatch) => ({
  removeClient: (client) => dispatch(remove(client)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients);
