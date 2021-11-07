import React from 'react';

import User from './components/User';
import Loading from './components/Loading';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: undefined,
    };
  }

  fetchUser = async () => {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();

    console.log(data);

    const {
      picture,
      name: { first, last },
      email,
      dob: { age },
    } = data.results[0];

    this.setState({
      user: {
        picture,
        firstName: first,
        lastName: last,
        fullName: `${first} ${last}`,
        email,
        age,
      },
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    const { user } = this.state;

    if (!user) return <Loading />;

    return (
      <div className="App">
        {user.age <= 50 && <User user={user} />}
      </div>
    );
  }
}

export default App;
