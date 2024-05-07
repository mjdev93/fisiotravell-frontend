import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./notfound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const goToMain = () => navigate('/');

  return (
    <>
      <div id="error">
        <div class="notfound">
          <h1>Error 404</h1>
          <h2>Página no encontrada</h2>
          <button onClick={goToMain} >Volver a la página principal</button>
        </div>
      </div>
    </>
  )
}

export default NotFound