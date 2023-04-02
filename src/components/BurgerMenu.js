import React from 'react';

function BurgerMenu({isOpen}) {
  return(
    <div className={`burger ${isOpen ? 'burger_opened' : ''}`}>
      <p className='burger__email'>email</p>
      <button className='burger__logout-btn' type='button'>Выйти</button>
    </div>
  );
}

export default BurgerMenu;
