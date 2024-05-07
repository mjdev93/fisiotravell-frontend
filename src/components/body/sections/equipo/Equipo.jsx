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
                                    Fisioterapeuta y CEO con 8 años de experiencia en fisioterapia, graduada en <b>UCAM</b> con especialización en <b>gerontología</b> y en fisioterapia <b>musculoesquelética</b> avanzada de la <b>Universidad San Rafael de Nebrija</b>. Adicionalmente, tiene formación en ejercicio terapéutico con <b>pilates, hipopresivos, yoga, nutrigenómica</b> por la <b>Universidad de Toledo</b> y <b>osteopatía estructural</b> por la <b>EOM</b>.
                                    <br/>
                                    <br/>
                                    Innovadora en el uso de <b>realidad virtual</b> en Granada para la <b>rehabilitación y manejo del linfedema</b>. Actualmente ocupa el <b>rol directivo</b> Fisio Travell y produce <b>contenido de salud</b> en redes sociales.</p>
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
                                <p>Fisioterapeuta y CEO con 7 años de experiencia y pasión por el deporte, ofrece una <b>visión integral en los tratamientos</b>, enfocándose en la individualización y participación activa del paciente. Graduado en fisioterapia por la <b>UGR</b>, es especialista en <b>inducción miofascial, osteopatía estructural</b> por la <b>EOM</b>, <b>readaptación deportiva</b> y <b>terapia invasiva</b>.
                                    <br /><br /> Trabajó como <b>coordinador del equipo</b> de fisioterapia en la <b>Copa del Rey de tenis</b> en Granada (2017) y fue <b>docente adjunto</b> en <b>ecografía</b> y <b>terapia invasiva</b>. Actualmente, además de ejercer, <b>gestiona lacontabilidad</b> de la clínica.</p>
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
                                <p>Fisioterapeuta con 6 años de experiencia, enfocada en <b>identificar las causas subyacentes de los síntomas</b> de sus pacientes, integrando el <b>cuerpo, la alimentación, hábitos y estado emocional</b> en su enfoque. 
                                    <br /><br />Graduada en fisioterapia por la <b>UFV</b>, es especialista en <b>osteopatía estructural</b> y <b>kinesiología holística</b> por EOFIS. Experta en valoración de la <b>ATM</b>, <b>disfunciones craneomandibulares, suelo pélvico, cólico del lactante</b> y <b>diástasis abdominal</b> por <b>Fisiofocus</b>. Además, tiene formación en <b>pilates suelo, accesorios y máquinas</b> por la <b>AEFEP</b>. Actualmente, está formándose como profesora internacional de <b>yoga</b> en la <b>IEY</b>.</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )

}

export default Equipo