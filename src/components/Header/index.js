import React, { Component } from 'react';

import './style.css';
import avatar from '../../assets/user-circle-regular.svg';

class Header extends Component {
  render() {
    return (
      <header className="main-header content">
        <h1 className="logo">facebook.</h1>
        <div className="side">
          <h1>Meu perfil</h1>
          <img className="mini-mini-icon" src={avatar} alt="avatar"/>
        </div>

      </header>
    )
  }
}

export default Header;
