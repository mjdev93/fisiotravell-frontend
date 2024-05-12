import React, { useState, useEffect } from 'react';
import "./createRoutine.css"
import YoutubeEmbed from "../../youtubeEmbed/YoutubeEmbed";
import { getAllExercises, postNewRoutine } from "../../../services/admin.service";

export const CreateRoutine = ({ setShowCreateRoutine }) => {

    const [userId, setUserId] = useState('');
    const [date, setDate] = useState('');
    const [exerciseId, setExerciseId] = useState('');
    const [series, setSeries] = useState('');
    const [duration, setDuration] = useState('');
    const [lapse, setLapse] = useState('');
    const [observations, setObservations] = useState('');
    const [exercises, setExercises] = useState([]);
    const [exercisesList, setExercisesList] = useState([]);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await postNewRoutine(userId, date, exercises);
            setMessage('Rutina creada exitosamente');
            window.location.reload();
        } catch (error) {
            console.error('Error al crear la rutina:', error);
            setMessage('Hubo un error al crear la rutina');
        }
    };

    const handleAddExercise = () => {
        const newExercise = {
            exerciseId: parseInt(exerciseId),
            series: parseInt(series),
            duration: parseInt(duration),
            lapse: parseInt(lapse),
            observations: observations
        };
        setExercises([...exercises, newExercise]);
    };


    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const data = await getAllExercises();
                setExercisesList(data);
            } catch (error) {
                console.error('Failed to fetch exercises:', error);
            }
        };

        fetchExercises();

        const url = window.location.href;
    const parts = url.split('/');
    const id = parts[parts.length - 1];
        setUserId(id)
    }, []);


    return (

        <dialog className="dialogContainer" open>

            <div className="searchExercise1">
                <div className="searchExercisePopup2">
                    <p className="searchExercisePopup2ID">ID</p>
                    <p className="searchExercisePopup2Ejercicio">EJERCICIO</p>
                </div>

                <div className="listExercisePopup">
                    {exercisesList.map(exer => (
                        <div className="visionExercisePopup" key={exer.id}>
                            <div className="checkBoxExercisePopup">
                                {exer.id}
                            </div>
                            <div className="videoExercisePopup">
                                <YoutubeEmbed url={exer.videoUrl} />
                            </div>
                            <div className="titleExerciseVideoPopup">
                                <h4>{exer.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="lineSeparator"><div className="line"></div></div>
            <div className="takeExercises">

                <div className="nameRoutineContainerPopup">
                    <form onSubmit={handleSubmit}>
                        <label Style="display:none" htmlFor="name-routine">ID del usuario:</label>
                        <input Style="display:none" type="text" Id="name-routine" value={userId} onChange={(e) => setUserId(e.target.value)} />

                        <label htmlFor="fecha-routine">Fecha:</label>
                        <input type="date" Id="fecha-routine" value={date} onChange={(e) => setDate(e.target.value)} />
                        <hr/>

                        <label htmlFor="id-exercise">ID ejercicio:</label>
                        <input type="number" Id="id-exercise" value={exerciseId} onChange={(e) => setExerciseId(e.target.value)} />

                        <label htmlFor="series-routine">Series:</label>
                        <input type="number" Id="series-routine" value={series} onChange={(e) => setSeries(e.target.value)} />

                        <label htmlFor="duracion-routine">Duración:</label>
                        <input type="number" Id="duracion-routine" value={duration} onChange={(e) => setDuration(e.target.value)} />

                        <label htmlFor="repeticiones-routine">Repeticiones:</label>
                        <input type="number" Id="repeticiones-routine" value={lapse} onChange={(e) => setLapse(e.target.value)} />

                        <div className='observacion-container-routine'>
                            <label htmlFor="observaciones-routine">Observaciones:</label><br/>
                            <textarea type="text" Id="observaciones-routine" value={observations} onChange={(e) => setObservations(e.target.value)}></textarea>
                            <br/>
                            <button className="pretty" type="button" onClick={handleAddExercise}>Agregar Ejercicio</button>
                        <br/>
                        {message && <p>{message}</p>}
                        </div>
                        <div className="buttonContainerRoutinePopup">
                            <button className="createRoutineChanges pretty" type="submit">CREAR RUTINA</button>
                            <button className="closedialog pretty" onClick={() => setShowCreateRoutine(false)}>CANCELAR</button>
                        </div>
                    </form>
                </div>
            </div>

        </dialog>
    )

}

export default CreateRoutine