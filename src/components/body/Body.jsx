import './body.css'
import icono from '/images/icono-hojas.webp'


function Body() {

    return (
        <>
            <main>
                <section className='empresa'>
                    <article className='empresaLeft'>
                        <div className='containerLeft'> 
                            <h2 className='titleLeft'>¿Eres una empresa?</h2>
                            <p className='textLeft'>Te ofrecemos fisioterapia preventiva y actuación para disminuir el ausentismo laboral, reducir el tiempo de recuperación de tus empleados y daros un valor añadido.</p>
                            <button className='info'>+ INFO</button>
                        </div>
                    </article>
                    <article className='empresaRigth'>

                        <div className='containerRigth'>
                            <div className='rigthIcon1'><img src={icono} alt='icono de hojas' /></div>
                            <div className='rigthIcon2'><img src={icono} alt='icono de hojas' /></div>
                            <div className='rigthIcon3'><img src={icono} alt='icono de hojas' /></div>
                           
                          <div className='textContainerRigth'>
                        
                                <h2 className='title1'>Menos bajas y ausentismo laboral</h2>
                                <p className='text1'>Es mejor trabajar la prevención de riesgos laborales que actuar cuando hay una patología.</p>
                           
                                <h2 className='title2'>Mayor productividad</h2>
                                <p className='text2'>Está más que demostrado que en ausencia de dolor o fatiga hay más eficiencia durante la jornada.</p>
                            
                                <h2 className='title3'>Mayor compromiso con la empresa</h2>
                                <p className='text3'>La retención de talento se consigue cuidando al trabajador.</p>

                            </div> 
                           

                        </div>

                    </article>

                </section>




            </main>
        </>
    )

}

export default Body