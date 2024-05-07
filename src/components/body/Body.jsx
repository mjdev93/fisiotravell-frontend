
import { Empresa } from './sections/empresa/Empresa'
import { Videos } from './sections/videos/Videos'
import { Servicios } from './sections/servicios/Servicios'
import { Equipo } from './sections/equipo/Equipo'
import { Metodologia } from './sections/metodologia/Metodologia'
import { Doctoralia } from './sections/doctoralia/Doctoralia'

function Body() {

    return (
        <>
            <main>
                <Empresa />
                <Videos />
                <Servicios />
                <Metodologia />
                <Equipo />
                <Doctoralia
                    url="https://www.doctoralia.es/maria-jurado-diaz/fisioterapeuta/granada"
                    doctor="maria-jurado-diaz"
                    nombre="María Jurado Díaz" />

                <Doctoralia
                    url="https://www.doctoralia.es/irene-perez-aguila-2/fisioterapeuta-osteopata/madrid"
                    doctor="irene-perez-aguila-2"
                    nombre="Irene Pérez Águila" />

            </main>
        </>
    )
}

export default Body
