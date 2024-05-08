import './header.css'
import logo from '/images/logofisiotravell-blanco.webp'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import flechaIrArriba from '/images/flecha-ir-arriba.webp'


function Header() {
  const [colorChange, setColorChange] = useState(false);
  const [irArriba, setIrArriba] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) { 
      setColorChange(true);
      setIrArriba(true);
    } else {
      setColorChange(false);
      setIrArriba(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => {
      window.removeEventListener('scroll', changeNavbarColor);
    };
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    let ajuste = 0;
    
    if(id==="metodologia") ajuste =  60;
    if(id==="servicios") ajuste =  100;
    if(id==="equipo") ajuste =  15;
    if(id==="empresa") ajuste =  40;
    if(id==="videos") ajuste =  70;
    if(id==="calendario") ajuste = 100;
    if(id==="logo") ajuste = window.top;

    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - ajuste;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
    }
}

  return (
    <>
      <header className='main-header'>
        <nav className={`nav ${colorChange ? 'navbar-color-change' : ''}`}>
          <section id= "logo" className='logo'>
            <button onClick={() => scrollTo('logo')}><img src={logo} alt='Logo de Fisio Travell' /></button>
          </section>
          <section className='menu'>
            <button onClick={() => scrollTo('servicios')} className='servicios tab'>SERVICIOS</button>
            <button onClick={() => scrollTo('metodologia')}className='metodologia tab'>METODOLOGÍA</button>
            <button onClick={() => scrollTo('equipo')}className='equipo tab'>EL EQUIPO</button>
            {/*<button className='articulos tab'>ARTÍCULOS</button>*/}
            <button onClick={() => scrollTo('empresa')} className='empresas tab'>EMPRESAS</button>
            <button onClick={() => scrollTo('calendario')} className='cita remark'>PIDE CITA</button>
            <button onClick={() => scrollTo('videos')} className='videos remark'>VÍDEOS</button>
            <Link to="/signup">
            <button className='login remark'>ACCEDER</button>
            </Link>
          </section>
        </nav>
        <section className='text'>
          <h2>Apuesta en salud y habrás ganado</h2>
          <button onClick={() => scrollTo('calendario')} className='cita remark hero'>PIDE CITA</button>
        </section>
        {irArriba ?  <button onClick={() => scrollTo('logo')} className='irArriba'><img src={flechaIrArriba} alt="Flecha de color rosa que al cliquearla te sube arriba" /></button> : <></>}
       
      </header>
    </>
  )
}

export default Header