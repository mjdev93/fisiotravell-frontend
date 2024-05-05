
import { Empresa } from './sections/empresa/Empresa'
import { Videos } from './sections/videos/Videos'
import { Servicios } from './sections/servicios/Servicios'
import { Equipo } from './sections/equipo/Equipo'
import { Metodologia } from './sections/metodologia/Metodologia'


function Body() {

    return (
        <>
            <main>
                <Empresa/>
                <Videos/>
                <Servicios/>
                <Metodologia/>
                <Equipo/>
                
            </main>
        </>
    )
}

export default Body