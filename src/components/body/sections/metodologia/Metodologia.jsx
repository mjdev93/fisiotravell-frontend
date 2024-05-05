import './metodologia.css'


export function Metodologia() {


    return (
        <>
            <section className='metodologiaContainer' id='metodologia'>


                <h1 className='titleMetodologia'>Metodología</h1>
                <div className='enumeracion'>
                    <div className='uno'>01
                        <h2 className='unoTitle'>Estudio</h2>
                        <p className='textEstudio'>Se crea un episodio clínico. El paciente concretará el motivo de la consulta, se harán preguntas enfocadas a su dolencia y otras para conocer sus hábitos de vida.</p> </div>
                    <div className='dos'>02
                        <h2 className='dosTitle'>Valoración</h2>
                        <p className='textValoracion'>El fisioterapeuta designado analiza la situación mediante una exploración física, test ortopédicos, informes de otros especialístas y pruebas de imagen que el paciente aporta.</p></div>
                    <div className='tres'>03
                        <h2 className='tresTitle'>Diagnóstico</h2>
                        <p className='textDiagnostico'>Con toda la información recibida se procede a dar un diagnóstico certero y se elige el mejor tratamiento para el paciente. </p> </div>
                    <div className='cuatro'>04
                        <h2 className='cuatroTitle'>Tratamiento</h2>
                        <p className='textTratamiento'>Se trata del conjunto de técnicas específicas, ejercicios terapéuticos y hábitos de vida que permitirán concluir con la patología y permitirán al paciente no volver a recaer en la lesión.</p> </div>
                    
                </div>
                <button className='masInformacion'>MÁS INFORMACIÓN</button>
            </section>

        </>
    )

}

export default Metodologia