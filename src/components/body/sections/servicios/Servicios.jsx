import './servicios.css'
import icono from '/images/icono-hojas.webp'
import terapeutaServicios from '/images/terapeuta-movilizacion.webp'

export function Servicios() {
    

    return (
        <>
                <section className='serviciosContainer' id='servicios'>
                    <h1 className='titleServicios'>Nuestros servicios</h1>
                    <div className='nuestrosServicios'>
                        <ul className='listServices'>
                            <li>Fisioterapia avanzada</li>
                            <li>Ecografía</li>
                            <li>Osteopatía</li>
                            <li>Drenaje linfático</li>
                            <li>Readaptación funcional</li>
                            <li>Terapia invasiva</li>
                            <li>Tratamientos postquirúrgicos</li>
                            <li>Geriatría</li>
                        </ul>
                        <img className='terapeutaServicios' src={terapeutaServicios} alt='Imagen terapeuta haciendo una movilización a un paciente' />
                        <div className='nuestrosServiciosRight'>
                            <div className='nuestrosServiciosRightText'>
                                <h3 className='titleSup'>Aparatología</h3>
                                <p className='textSup'>Contamos con equipos de diagnóstico, neuromodulación, gafas de realidad virtual y equipación de readaptación funcional.</p>
                                <h3 className='titleInf'>Espacios</h3>
                                <p className='textInf'>Trabajamos en salas polivalentes para hacer fisioterapia convencional en camilla como para hacer rehabilitación funcional y readaptación. </p>
                            </div>
                            <div className='nuestrosServiciosRightImage'>
                                <img className='iconoHojaServicio' src={icono} alt='Imagen de una hoja como icono de color rosa'/>
                            </div>
                        </div>
                    </div>

                </section>
    
        </>
    )

}

export default Servicios