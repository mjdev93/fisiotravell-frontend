import './header.css'
import logo from '/images/logofisiotravell-blanco.webp'
import { Link } from 'react-router-dom';

function Header() {



  return (
    <>
      <header className='main-header'>
        <nav className='nav'>
          <section className='logo'>
            <img src={logo} alt='Logo de Fisio Travell' />
          </section>
          <section className='menu'>
            <button className='servicios tab'>SERVICIOS</button>
            <button className='metodologia tab'>METODOLOGÍA</button>
            <button className='equipo tab'>EL EQUIPO</button>
            <button className='articulos tab'>ARTÍCULOS</button>
            <button className='empresas tab'>EMPRESAS</button>
            <button className='cita remark'>PIDE CITA</button>
            <button className='videos remark'>VÍDEOS</button>
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