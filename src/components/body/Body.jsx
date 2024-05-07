
import { Empresa } from './sections/empresa/Empresa'
import { Videos } from './sections/videos/Videos'
import { Servicios } from './sections/servicios/Servicios'
import { Equipo } from './sections/equipo/Equipo'
import { Metodologia } from './sections/metodologia/Metodologia'

import Calendario from './sections/calendario/Calendario'

function Body() {

    return (
        <>
            <main>
                <Empresa />
                <Videos />
                <Servicios />
                <Metodologia />
                <Equipo />
                <Calendario />

            </main>
        </>
    )
}

export default Body


