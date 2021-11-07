import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Clients from './pages/Clients';
import RegisterClient from './pages/RegisterClient';

import Header from './components/Header';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/clients/register" component={RegisterClient} />
        <Route path="/clients" component={Clients} />
      </Switch>
    </>
  );
}

export default App;
