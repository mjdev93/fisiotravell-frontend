import './calendario.css'
import { Doctoralia } from '../doctoralia/Doctoralia'

export function Calendario() {


    return (
        <>
            <section className='calendarioContainer' id='calendario'>
                <div className='calendarioMaria'>
                    <Doctoralia
                        url="https://www.doctoralia.es/maria-jurado-diaz/fisioterapeuta/granada"
                        doctor="maria-jurado-diaz"
                        nombre="María Jurado Díaz" />
                </div>
                <div className='calendarioJose'> 
                <Doctoralia
                    url="https://www.doctoralia.es/jose-angel-herrera-bolivar/fisioterapeuta/granada"
                    doctor="jose-angel-herrera-bolivar"
                    nombre="Jose Ángel Herrera Bolivar " />
                 </div>
                <div className='calendarioIrene'>
                    <Doctoralia
                        url="https://www.doctoralia.es/irene-perez-aguila-2/fisioterapeuta-osteopata/madrid"
                        doctor="irene-perez-aguila-2"
                        nombre="Irene Pérez Águila" />
                </div>

            </section>
        </>
    )

}

export default Calendario




