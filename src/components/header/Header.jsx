import './header.css'
import logo from '/images/logofisiotravell-blanco.webp'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Header() {

  const [colorChange, setColorChange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) { 
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);


  function scrollTo(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }



  return (
    <>
      <header className='main-header'>
        <nav className={`nav ${colorChange ? 'navbar-color-change' : ''}`}>
          <section className='logo'>
            <img src={logo} alt='Logo de Fisio Travell' />
          </section>
          <section className='menu'>
            <button onClick={() => scrollTo('servicios')} className='servicios tab'>SERVICIOS</button>
            <button onClick={() => scrollTo('metodologia')}className='metodologia tab'>METODOLOGÍA</button>
            <button className='equipo tab'>EL EQUIPO</button>
            <button className='articulos tab'>ARTÍCULOS</button>
            <button onClick={() => scrollTo('empresa')} className='empresas tab'>EMPRESAS</button>
            <button className='cita remark'>PIDE CITA</button>
            <button onClick={() => scrollTo('videos')} className='videos remark'>VÍDEOS</button>
            <Link to="/signup">
            <button className='login remark'>ACCEDER</button>
            </Link>
          </section>
        </nav>
        <section className='text'>
          <h2>Apuesta en salud y habrás ganado</h2>
          <button className='cita remark hero'>PIDE CITA</button>
        </section>
      </header>
    </>
  )
}

export default Header