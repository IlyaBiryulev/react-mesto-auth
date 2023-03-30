import React from 'react';
import {Link, useLocation} from 'react-router-dom'

function NavBar() {
  const location = useLocation();
  function navLinkToggle() {
    if(location.pathname === "/sign-up") {
      return(<Link className="header__link" to="/sign-in">Войти</Link>);
    } else if(location.pathname === "/sign-in") {
      return(<Link className="header__link" to="/sign-up">Регистрация</Link>);
    }
  }

  return (
    <div className="header__nav">{navLinkToggle()}</div>
  );
}

export default NavBar;
