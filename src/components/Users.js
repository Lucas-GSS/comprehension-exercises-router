// arquivo Users.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    //As props do Route são: history, location e match. Objetos que possuem métodos especiais para manipular informações na página. O parâmetro da url é acessado no match
    const { id } = this.props.match.params;
    return (
      <div>
        <h2>Users</h2>
        <p> { greetingsMessage }, My awesome Users component. Parâmetro url: {id} </p>
        <Link to='/'>Home</Link>
      </div>
    );
  }
};

export default Users;
