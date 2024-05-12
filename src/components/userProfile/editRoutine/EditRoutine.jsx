import React, { useState, useEffect } from 'react';
import "./editRoutine.css"
import YoutubeEmbed from "../../youtubeEmbed/YoutubeEmbed";
import { getAllExercises } from "../../../services/admin.service";

export const EditRoutine = ({ setShowEditRoutine, date }) => {

    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const data = await getAllExercises();
                setExercises(data);
                console.log(data)
            } catch (error) {
                console.error('Failed to fetch exercises:', error);
            }
        };

        fetchExercises();
    }, []);


    return (

        <dialog className="dialogContainer" open>

            <div className="searchExercise">
                <div className="searchExercisePopup">
                    <label htmlFor="site-search">BUSCAR EJERCICIO:</label>
                    <input Type="search" Id="site-search" Name="q" />
                    <button className="addExercise pretty">AÑADIR EJERCICIO</button>
                </div>

                <div className="listExercisePopup">
                    {exercises.map(exercise => (
                        <div className="visionExercisePopup" key={exercise.id}>
                            <div className="checkBoxExercisePopup">
                                <input type="checkbox" value={exercise.id} />
                            </div>
                            <div className="videoExercisePopup">
                                <YoutubeEmbed url={exercise.videoUrl} />
                            </div>
                            <div className="titleExerciseVideoPopup">
                                <h4>{exercise.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="lineSeparator"><div className="line"></div></div>
            <div className="takeExercises">

                <div className="nameRoutineContainerPopup">
                    <label htmlFor="name-search-routine">Nombre de la rutina:</label>
                    <input Type="name-search-routine" Id="name-search-routine" Name="q" />
                    <div className="dateRoutinePopup">{date}</div>
                </div>

                <div className="selectedExercisesContainer">
                    <div className="leyendaSelectedExercises">
                        <div className="seriesLeyendaSelected">Series</div>
                        <div className="repeticionesLeyendaSelected">Repeticiones</div>
                        <div className="duracionLeyendaSelected">Duración</div>
                        <div className="comentariosLeyendaSelected">Comentarios</div>
                    </div>
                    <div className="insertSelectedExercisesContainer">

                        <div className="insertSelectedExercises">
                            <div className="deleteSelectionExercises"> </div>
                            <div className="videoSelectionExercises"> </div>
                            <div className="seriesSelectionExercises"> </div>
                            <div className="repeticionesSelectionExercises"> </div>
                            <div className="duracionSelectionExercises"> </div>
                            <div className="comentariosSelectionExercises"> </div>
                        </div>

                    </div>
                </div>

                <div className="buttonContainerRoutinePopup">
                    <button className="aceptChanges pretty">ACEPTAR</button>
                    <button className="discardChanges pretty" onClick={() => setShowEditRoutine(false)}>CANCELAR</button>
                </div>
            </div>

        </dialog>
    )

}

export default EditRoutine