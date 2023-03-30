import React from 'react';
import Header from './Header.js';
import {Link} from 'react-router-dom';
import Authentication from './Authentication.js';

function Register({title, name, btnSubmit}) {
    return (
        <div>
          <Header />
          <Authentication 
            title={'Регистрация'}
            btnSubmit={'Зарегистрироваться'}
            isLogin={'Уже зарегистророваны? Войти'}
          />
          
        </div>
      );
}

export default Register;