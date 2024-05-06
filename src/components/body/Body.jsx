
import { Empresa } from './sections/empresa/Empresa'
import { Videos } from './sections/videos/Videos'
import { Servicios } from './sections/servicios/Servicios'
import { Equipo } from './sections/equipo/Equipo'
import { Metodologia } from './sections/metodologia/Metodologia'
import { Doctoralia } from './sections/doctoralia/doctoralia'

function Body() {

    return (
        <>
            <main>
                <Empresa/>
                <Videos/>
                <Servicios/>
                <Metodologia/>
                <Equipo/>
                <Doctoralia/>
            </main>
        </>
    )
}

export default Body