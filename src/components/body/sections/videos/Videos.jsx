import './videos.css'
import formita1 from '/images/formita-1-der.webp'
import formita2 from '/images/formita-1-izq.webp'



export function Videos() {

    return (
        <>
                <section className='videosContainer' id='videos'>

                    <img className='formita1' src={formita1} alt='Imagen tangram fisio travell' />
                    <div className='blueContainer'>

                        <div className='carrusel'>

                        </div>



                    </div>
                    <div className='whiteContainer'></div>
                    <img className='formita2' src={formita2} alt='Imagen tangram fisio travell' />
                </section>
        </>
    )

}

export default Videos