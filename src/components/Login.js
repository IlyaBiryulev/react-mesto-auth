import React from 'react';
import Header from './Header.js';
import {Link} from 'react-router-dom';
import Authentication from './Authentication.js';

function Login({title, name, btnSubmit}) {
    return (
        <div>
          <Header />
          <Authentication 
            title={'Вход'}
            btnSubmit={'Войти'}
          />
        </div>
      );
}

export default Login;