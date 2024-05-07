import './equipo.css'
import icono from '/images/icono-hojas.webp'
import terapeutaServicios from '/images/terapeuta-movilizacion.webp'
import formita2 from "/images/formitas-2.webp";
import checkListPink from '/images/check-fisio-travell.webp'


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
                            <li><img className='checkList' src={checkListPink}/>La cercanía con el paciente</li>
                            <li><img className='checkList' src={checkListPink}/>La voluntad de explicar el por qué de las lesiones</li>
                            <li><img className='checkList' src={checkListPink}/>Nuestro acercamiento holístico; técnico + hábitos</li>
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
                                    Fisioterapeuta-CEO con amplia experiencia en fisioterapia, graduada en UCAM con especialización en gerontología y en fisioterapia musculoesquelética avanzada de la Universidad San Rafael de Nebrija. Adicionalmente, tiene formación en ejercicio terapéutico con Pilates, hipopresivos, yoga, nutrigenómica por la Universidad de Toledo y osteopatía estructural por la EOM.
                                    <br/>
                                    <br/>
                                    Innovadora en el uso de realidad virtual en Granada para la rehabilitación y manejo del linfedema. Actualmente ocupa el rol directivo Fisio Travell y produce contenido de salud en redes sociales.</p>
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
                                <p>Fisioterapeuta y CEO con 7 años de experiencia y pasión por el deporte, ofrece una visión integral en los tratamientos, enfocándose en la individualización y participación activa del paciente. Graduado en fisioterapia por la UGR, es especialista en inducción miofascial, osteopatía estructural por la EOM, readaptación deportiva y terapia invasiva.
                                    <br /><br /> Trabajó como coordinador del equipo de fisioterapia en la Copa del Rey de tenis en Granada (2017) y fue docente adjunto en ecografía y terapia invasiva. Actualmente, además de ejercer, gestiona la contabilidad de su empresa. </p>
                            </div>
                        </div>
                        <div className="equipo-irene">
                            <div className="foto-irene-container">
                                <div className="foto-irene-text">
                                    <h2>Irene Pérez Águila</h2>
                                    <h3>Fisioterapeuta y osteópata</h3>
                                </div>
                            </div>
                            <div className="descripcion-irene">
                                <p>Fisioterapeuta con 6 años de experiencia, enfocada en identificar las causas subyacentes de los síntomas de sus pacientes, integrando el cuerpo, la alimentación, hábitos y estado emocional en su enfoque. 
                                    <br /><br />Graduada en fisioterapia por la UFV, es especialista en osteopatía estructural y kinesiología holística por EOFIS. Experta en valoración de la ATM, disfunciones craneomandibulares, suelo pélvico, cólico del lactante y diástasis abdominal por Fisiofocus. Además, tiene formación en pilates suelo, accesorios y máquinas por la AEFEP. Actualmente, está formándose como profesora internacional de yoga en la IEY.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )

}

export default Equipo