import React from 'react';

function InfoTooltip({isOpened, onClose}) {
  return (
    <div>
      <section className={`popup popup_type_tooltip ${isOpened && 'popup_opened'}`}>
          <div className="popup__container popup__container_type_tooltip">
            <div className="popup__icon"></div>
            <p className='popup__reg-status'>Вы успешно зарегистрировались!</p>
            <button className="popup__close-button" type="button" onClick = {onClose}></button>
          </div>
        </section>
    </div>
  );
}

export default InfoTooltip;
