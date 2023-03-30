import React from 'react';
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav className='header_item'>
            <NavLink to='/sihn-up'>Регистрация</NavLink>
        </nav>
      );
}

export default NavBar;