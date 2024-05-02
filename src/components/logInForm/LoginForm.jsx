import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./loginForm.css";
import logo from "../../../public/images/icono-hojas.webp";

export const LoginForm = () => {
  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [pass, setPass] = useState("");
  const [passFocus, setPassFocus] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //aquí hay que enviar y validar los datos... después redirigir a ¿/profile/:userId?
  };

  return (
    <div className="logContainer">
      <div className="logBox">
        <img src={logo} className="successIcon" alt="Logo de Fisio Travell" />

        <h1>Accede</h1>
        <form className="logForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            required
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPass(e.target.value)}
            required
            onFocus={() => setPassFocus(true)}
            onBlur={() => setPassFocus(false)}
          />
          <button className="logButton">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
