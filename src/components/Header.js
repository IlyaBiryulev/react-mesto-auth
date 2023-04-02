import React from 'react';
import NavBar from './NavBar';

function Header({onLogOut}) {
  return (
    <div>
      <header className="header">
        <div className="header__logo"></div>
        <NavBar
          onLogOut={onLogOut}
        />
      </header>
    </div>
  );
}

export default Header;
