import React from 'react';
import './Header.css';
import Skull from './skull.png';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Skull} alt="Skull logo" />
      <h1 className="title">Vote or die</h1>
      <img className="logo" src={Skull} alt="Skull logo" />
    </header>
  );
}

export default Header;
