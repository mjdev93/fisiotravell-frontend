
import {Empresa} from './sections/empresa/Empresa'
import {Videos} from './sections/videos/Videos'
import {Servicios} from './sections/servicios/Servicios'


function Body() {

    return (
        <>
            <main>
               <Empresa/>
               <Videos/>
               <Servicios/>
                
            </main>
        </>
    )
}

export default Body