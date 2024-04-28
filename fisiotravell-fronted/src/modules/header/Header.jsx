import { useState } from 'react'
import './header.css'
import logo from '../../assets/images/logofisiotravell.webp'
function Header() {

  return (
    <>
     <header>
        <nav>
            <section className='logo'>
                <img src={logo} alt='Logo de Fisio Travell'/>
            </section>
            <section className='menu'>
                <button className='servicios'>SERVICIOS</button>
                <button className='metodologia'>METODOLOGÍA</button>
                <button className='equipo'>EL EQUIPO</button>
                <button className='articulos'>ARTÍCULOS</button>
                <button className='videos'>VÍDEOS</button>
                <button className='cita remark'>PIDE CITA</button>
                <button className='empresas remark'>EMPRESAS</button>
                <button className='login remark'>PERFIL</button>
            </section>
            </nav>
        <section></section>
     </header>
    </>
  )
}

export default Header