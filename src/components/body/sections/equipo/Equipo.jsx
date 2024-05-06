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
                                    <p>Fisioterapeuta-CEO con 8 años de experiencia en diversos campos de la fisioterapia y dedicada a la investigación.
                                        <br/><br/>Graduada en fisioterapia con especialización en gerontología en UCAM, especialista en musculoesquelética avanzada basada en el razonamiento clínico por a Universidad San Rafael de Nebrija. </p>
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
                                    <p>Fisioterapeuta-CEO con 8 años de experiencia en diversos campos de la fisioterapia y dedicada a la investigación.
                                        <br/><br/>Graduada en fisioterapia con especialización en gerontología en UCAM, especialista en musculoesquelética avanzada basada en el razonamiento clínico por a Universidad San Rafael de Nebrija. </p>
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
                                    <p>Fisioterapeuta-CEO con 8 años de experiencia en diversos campos de la fisioterapia y dedicada a la investigación.
                                        <br/><br/>Graduada en fisioterapia con especialización en gerontología en UCAM, especialista en musculoesquelética avanzada basada en el razonamiento clínico por a Universidad San Rafael de Nebrija. </p>
                                </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}

export default Equipo