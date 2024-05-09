import React, { useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import moment from "moment/moment";
import YoutubeEmbed from "../../youtubeEmbed/YoutubeEmbed";
import "./routineHistory.css";
import uniqid from 'uniqid';



const RoutineHistory = () => {
  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(() => {
    const fetchMyRoutines = async () => {
      const { data } = await getMyRoutines();
      setMyRoutines(data);
    };
    fetchMyRoutines();
  }, []);

  const displayRoutines = () => {
    return myRoutines.map((routine) => {
      const extractedDate = routine.date;
      const niceDate = moment(extractedDate).format("D/MM/YYYY");
      const routineId = uniqid(); // Generar un ID único para la rutina

      return (
        <div key={routineId}>
          <details name="historyRoutine">
            <summary className="fechaProfileUser">{niceDate}</summary>
            <div>
              {displayExercises(routine.exercises)}
            </div>
          </details>
          <hr />
        </div>
      );
    });
  };

  const displayExercises = (exercises) => {
    return exercises.map((exercise) => {
      const exerciseId = uniqid(); // Generar un ID único para el ejercicio

      return (
        <div key={exerciseId} className="containerExerciseRoutineProfileSecond">
          <hr className="separacionBarra" />
          <div className="videoExerciseRoutine">
            <YoutubeEmbed embedId={getEmbedId(exercise.videoUrl)} />
          </div>
          <div className="durationExercise">{exercise['exercise-routine'].duration}</div>
          <div className="lapseExercise">{exercise['exercise-routine'].lapse}</div>
          <div className="seriesExercise">{exercise['exercise-routine'].series}</div>
          <div className="observationsExercise">{exercise['exercise-routine'].observations}</div>
        </div>
      );
    });
  };

  const getEmbedId = (url) => {
    const videoId = url.includes("youtu.be")
      ? url.split("/").pop()
      : url.split("v=")[1];
    return videoId ? videoId : null;
  };

  return (
    <div>
      {displayRoutines()}
    </div>
  );
};

export default RoutineHistory;
