import React from 'react';
import "./DesingLogin.css";
import { TbPasswordUser } from "react-icons/tb";
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";

const Login = () => {
  return (
    <div className="container-formulario">
      <div className="form-wrapper">
        <div className="image-section">
          <img src="./Dropping.png" className='img' alt="Dropping Water Logo" />
        </div>
        <div className="form-section">
          <span className='text'>Bienvenido!</span>
          <form>
            <label htmlFor="nombre"><CiUser /> Nombre:</label>
            <input id="nombre" type="text" className="input-field" />
            <label htmlFor="claveunica"><TbPasswordUser /> Clave Unica:</label>
            <input id="claveunica" type="text" className="input-field"/>
            <label htmlFor="contrasena"><IoKeyOutline /> Password:</label>
            <input id="contrasena" type="password" className="input-field"/>
            <button type="submit" className="submit-button">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
