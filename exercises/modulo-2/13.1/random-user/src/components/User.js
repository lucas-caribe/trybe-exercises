import React from 'react';

class User extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="user-container">
        <img src={user.picture.large} alt={user.fullName} />
        <p>Name: {user.fullName}</p>
        <p>Email: {user.email}</p>
        <p>Age: {user.age}</p>
      </div>
    );
  }
}

export default User;
