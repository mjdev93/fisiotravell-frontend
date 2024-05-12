import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { login } from '../../services/auth.service' 
import "./loginForm.css";
import logo from "../../../public/images/icono-hojas.webp";
import { InfoContext } from "../../context/infoContext";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logged, setLogged] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null)
  const {info} = useContext(InfoContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setUserId(info.id)
      setLogged(true);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Email or password is incorrect.");
    }
  };

  return (
    <div className="logContainer">
      {logged && <Navigate to={`/admin/`} />}
      <div className="logBox">
        <img src={logo} className="successIcon" alt="Logo de Fisio Travell" />
        <h1>Accede</h1>
        {error && <p className="error">{error}</p>}
        <form className="logForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="logButton">Aceptar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
