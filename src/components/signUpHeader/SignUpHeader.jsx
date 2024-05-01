  import React from 'react';
  import logo from '/images/logofisiotravell-blanco.webp';
  import { Link } from 'react-router-dom'
  import './signUpHeader.css'

  const SignUpHeader = () => {
    return (
      <div className='signup'>
        <nav className='signupnav'>
          <div className='logoLog'>
            <img src={logo} alt='Logo de Fisio Travell' />
          </div>
          <div className='logMenu'>
            <button> <Link to="/" className='linkHeader'>INICIO</Link></button>
            <button>PIDE CITA</button>
            <button >EMPRESAS</button>
          </div>
        </nav>
      </div>
    );
  }

  export default SignUpHeader;
