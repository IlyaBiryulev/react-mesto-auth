import React from 'react';
import Header from './Header.js';
import Authentication from './Authentication.js';

function Register({onRegister}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      onRegister()
    }

    return (
        <div>
          <Header />
          <Authentication
            title={'Регистрация'}
            btnSubmit={'Зарегистрироваться'}
            isLogin={'Уже зарегистророваны? Войти'}
            onSubmit={handleSubmit}
          />

        </div>
      );
}

export default Register;
