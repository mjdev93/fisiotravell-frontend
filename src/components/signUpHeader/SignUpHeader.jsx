  import React from 'react';
  import logo from '/images/logofisiotravell-blanco.webp';
  import { Link } from 'react-router-dom'
  import './signUpHeader.css'

  const SignUpHeader = () => {
    return (
      <header className='signup'>
        <nav className='signupnav'>
          <div className='logoLog'>
            <img src={logo} alt='Logo de Fisio Travell' />
          </div>
          <div className='logMenu'>
             <Link to="/" className='linkHeader'><button>INICIO</button></Link>
            <button>PIDE CITA</button>
            <button >EMPRESAS</button>
          </div>
        </nav>
      </header>
    );
  }

  export default SignUpHeader;
