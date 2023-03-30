import React from "react";
import { Link } from "react-router-dom";

function Authentication({title, name, btnSubmit, isLogin,children, onSubmit}) {
    return (
        <section className="auth">
          <div className="auth__container">
            <h2 className="auth__title">{title}</h2>
            <form action="#" className="auth__form"  noValidate onSubmit={onSubmit}>
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
                id="email-input"
                placeholder="Пароль"
                className="auth__form-input"
                required
              />
              <span className="auth__form-input-error"></span>
              <button className="auth__submit-button" type="submit">{btnSubmit}</button>
              <Link className="auth__link" to="/sign-in">{isLogin}</Link>
            </form>
          </div>
        </section>
      );
}

export default Authentication;