import React from 'react';
import Header from './Header.js';
import {Link} from 'react-router-dom';
import Authentication from './Authentication.js';

function Login() {
  return (
    <div>
      <Header />
      <Authentication
        name={'login'}
        title={'Вход'}
        btnSubmit={'Войти'}
      >
        <input
          type="email"
          name="email"
          form="login"
          id="email-input"
          placeholder="Email"
          className="auth__form-input"
          required
        />
        <span className="auth__form-input-error"></span>
        <input
          type="password"
          name="password"
          form="login"
          id="password-input"
          placeholder="Пароль"
          className="auth__form-input"
          required
        />
        <span className="auth__form-input-error"></span>
      </Authentication>
    </div>
  );
}

export default Login;
