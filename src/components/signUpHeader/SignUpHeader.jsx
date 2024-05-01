import React from 'react';
import logo from '/images/logofisiotravell-blanco.webp';
import './signUpHeader.css';

const SignUpHeader = () => {
  return (
    <div className='signup'>
      <nav className='signupnav'>
        <div className='logoLog'>
          <img src={logo} alt='Logo de Fisio Travell' />
        </div>
        <div className='logMenu'>
          <button>INICIO</button>
          <button>PIDE CITA</button>
          <button>EMPRESAS</button>
          <button>PERFIL</button>
        </div>
      </nav>
    </div>
  );
}

export default SignUpHeader;
