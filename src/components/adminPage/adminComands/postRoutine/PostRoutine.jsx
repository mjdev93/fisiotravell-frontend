import React, { useState } from "react";
import "./postRoutine.css";
import { postNewRoutine } from "../../../../services/admin.service";

function PostRoutine() {
  const [userId, setUserId] = useState('');
  const [date, setDate] = useState('');
  const [exerciseId, setExerciseId] = useState('');
  const [series, setSeries] = useState('');
  const [duration, setDuration] = useState('');
  const [lapse, setLapse] = useState('');
  const [observations, setObservations] = useState('');
  const [exercises, setExercises] = useState([]);
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
    setExerciseId('');
    setSeries('');
    setDuration('');
    setLapse('');
    setObservations('');
  };

  return (
    <div>
      <h2>Crear Rutina</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Usuario ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <label>
          Fecha:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <label>
          ID del Ejercicio:
          <input type="number" value={exerciseId} onChange={(e) => setExerciseId(e.target.value)} />
        </label>
        <label>
          Series:
          <input type="number" value={series} onChange={(e) => setSeries(e.target.value)} />
        </label>
        <label>
          Duración:
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <label>
          Lapse:
          <input type="number" value={lapse} onChange={(e) => setLapse(e.target.value)} />
        </label>
        <label>
          Observaciones:
          <input type="text" value={observations} onChange={(e) => setObservations(e.target.value)} />
        </label>
        <br />
        <button type="submit">Crear Rutina</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default PostRoutine;
