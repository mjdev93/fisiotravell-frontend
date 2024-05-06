import './videos.css'
import formita1 from '/images/formita-1-der.webp'
import formita2 from '/images/formita-1-izq.webp'
import {CarouselVideo} from "/src/components/carousel/CarouselVideo.jsx"


export function Videos() {

    return (
        <>
                <section className='videosContainer' id='videos'>

                    <img className='formita1' src={formita1} alt='Imagen tangram fisio travell' />
                    <div className='blueContainer'>
                       
                        <div className='carrusel'>
                        <h1 className='titleSupCarrusel'>Vídeos de ejercicios</h1>
                        <h3 className='subTitleBotCarrusel'>Consulta y refresca la información con estos clips de vídeo</h3>
                        <CarouselVideo/>
                        </div>
                        <button className='irAVideos'>IR A VIDEOS</button>


                    </div>
                    <div className='whiteContainer'></div>
                    <img className='formita2' src={formita2} alt='Imagen tangram fisio travell' />
                </section>
        </>
    )

}

export default Videos