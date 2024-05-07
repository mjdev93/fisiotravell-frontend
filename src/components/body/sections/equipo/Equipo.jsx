import './equipo.css'
import icono from '/images/icono-hojas.webp'
import terapeutaServicios from '/images/terapeuta-movilizacion.webp'
import formita2 from "/images/formitas-2.webp";

export function Equipo() {


    return (
        <>
            <section className='equipoContainer' id='equipo'>
                <div className="el-equipo">
                    <div className="el-equipo-left">
                        <img className="img-formita-equipo" src={formita2} />
                        <div className="text-left-equipo">
                            <h1>El equipo</h1>
                            <p>Nuestro equipo cuenta con profesionales cualificados de amplia experiencia.</p>
                        </div>
                    </div>
                    <div className="el-equipo-right">
                        <h2>Nos caracterizamos por:</h2>
                        <ul>
                            <li>La cercanía con el paciente</li>
                            <li>La voluntad de explicar el por qué de las lesiones</li>
                            <li>Nuestro acercamiento holístico; técnico + hábitos</li>
                        </ul>
                    </div>


                    <div className="nosotros-equipo">
                        <div className="equipo-maria">
                            <div className="foto-maria-container">
                                <div className="foto-maria-text">
                                    <h2>María Jurado Díaz</h2>
                                    <h3>CEO, fisioterapeuta y osteópata</h3>
                                </div>
                            </div>
                            <div className="descripcion-maria">
                                    <p>
                                    Fisioterapeuta-CEO con 8 años de experiencia, graduada en fisioterapia con especialización en gerontología por UCAM y experta en musculoesquelética avanzada de la Universidad San Rafael de Nebrija. Además, posee formación en ejercicio terapéutico mediante Pilates por Pilates Inside Out, hipopresivos, yoga, nutrigenómica por la Universidad de Toledo y osteopatía estructural por la EOM.
                                    <br/><br/>
                                    Activa en divulgación y creación de contenido sanitario en redes sociales, es pionera en Granada en usar realidad virtual para readaptación funcional y manejo del linfedema. Actualmente se dedica a la valoración diagnóstica y gestiona la clínica.
                                    </p>
                                </div>
                        </div>
                        <div className="equipo-jose">
                            <div className="foto-jose-container">
                                <div className="foto-jose-text">
                                    <h2>Jose Ángel Herrera Bolivar</h2>
                                    <h3>CEO, fisioterapeuta y osteópata</h3>
                                </div>
                            </div>
                            <div className="descripcion-jose">
                                    <p>
                                    Fisioterapeuta-CEO con 7 años de experiencia y un enfoque individualizado en tratamientos, impulsado por su pasión por el deporte. Graduado en fisioterapia por la UGR, especializado en inducción miofascial, osteopatía estructural por la EOM, readaptación deportiva, y terapia invasiva.
                                    <br/><br/>
                                    Ha trabajado como coordinador en el equipo de fisioterapia de la Copa del Rey de tenis en Granada (2017) y como docente adjunto en ecografía, terapia invasiva y neuromodulación.
                                    <br/><br/>
                                    Actualmente, además de su práctica como fisioterapeuta, gestiona la contabilidad de la clínica.
                                    </p>
                                </div>
                        </div>
                        <div className="equipo-irene">
                            <div className="foto-irene-container">
                                <div className="foto-irene-text">
                                    <h2>Irene Pérez Águila</h2>
                                    <h3>CEO, fisioterapeuta y osteópata</h3>
                                </div>
                            </div>
                            <div className="descripcion-irene">
                                    <p>
                                    Fisioterapeuta con 6 años de experiencia, graduada en fisioterapia por la UFV y especialista en osteopatía estructural y kinesiología holística de EOFIS. Su práctica se centra en identificar las causas profundas de los síntomas de sus pacientes, teniendo en cuenta cómo el cuerpo, la alimentación, los hábitos y el estado emocional.
                                    <br/><br/>
                                    Es experta en la valoración de la ATM, disfunciones craneomandibulares, suelo pélvico, cólico del lactante y diástasis abdominal, formada en estos campos por Fisiofocus. También posee conocimientos en pilates suelo, accesorios y máquinas, adquiridos en la AEFEP. Actualmente se capacita como profesora internacional de yoga en la IEY y trabaja como fisioterapeuta en Fisio Travell.
                                    </p>
                                </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}

export default Equipo