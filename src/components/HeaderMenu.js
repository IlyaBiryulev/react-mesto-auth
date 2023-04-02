import React from 'react';
import Header from './Header';
import BurgerMenu from './BurgerMenu';

function HeaderMenu({isOpen, onBurgerClick, onLogOut}) {
  return(
    <>
      <BurgerMenu
        isOpen={isOpen}
        onLogOut={onLogOut}
      />
      <Header
        isOpen={isOpen}
        onBurgerClick={onBurgerClick}
        onLogOut={onLogOut}
      />
    </>
  );
}

export default HeaderMenu;
