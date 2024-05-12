import React, { useContext, useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import { enterExerciseRoutines } from "../../../services/admin.service";
import moment from "moment/moment";
import YoutubeEmbed from "../../youtubeEmbed/YoutubeEmbed";
import "./routineHistory.css";
import uniqid from "uniqid";
import { InfoContext } from "../../../context/infoContext";
import { useParams } from "react-router-dom";
import lapiz from "/images/lapiz.webp";
import EditRoutine from "../editRoutine/EditRoutine";

const RoutineHistory = ({ functionShowEditRoutine, routineDate}) => {
  const { profileId } = useParams();
  const [myRoutines, setMyRoutines] = useState([]);

  const { info } = useContext(InfoContext);

  useEffect(() => {
    const fetchMyRoutines = async () => {
      const { data } = await getMyRoutines();
      setMyRoutines(data);
    };
    const fetchUserRoutines = async (profileId) => {
      const data = await enterExerciseRoutines(profileId);
      setMyRoutines(data);
    };

    if (info?.role === "admin") {
      console.log(profileId);
      fetchUserRoutines(profileId);
    } else if (info) {
      fetchMyRoutines();
    }
  }, [info]);

  const displayRoutines = () => {
    const formatRoutines = myRoutines?.map((routine) => {
      const extractedDate = routine.date;
      const niceDate = moment(extractedDate).format("D/MM/YYYY");
      const routineId = uniqid();

      return (
        <div key={routineId}>
          <details name="historyRoutine">
            <summary className="fechaProfileUser">{niceDate}</summary>
            <div>{displayExercises(routine.exercises, niceDate)}</div>
          </details>
          <hr />
        </div>
      );
    });
    return formatRoutines;
  };

  const openEditRoutine = (date) => {
    functionShowEditRoutine(true);
    routineDate(date)
  };

  const displayExercises = (exercises, niceDate) => {

    return (
      <>
        <div className="containerExerciseRoutineProfileFirst">
          <div className="textTopRoutines">
            <p className="nameHistory">Esguince</p>
            <p className="seriesHistory">Series</p>
            <p className="repesHistory">Repeticiones</p>
            <p className="duracionHistory">Duración</p>
            <p className="comentarioHistory">Comentarios</p>
            {info?.role === "admin" && (
              <button onClick={() => openEditRoutine(niceDate)} className="editarRoutine">
                <img src={lapiz} alt="icono de lápiz para editar la rutina" />
              </button>
            )}
          </div>
          {exercises?.map((exercise) => {
            const exerciseId = uniqid();

            return (
              <div
                className="containerExerciseRoutineProfileSecond"
                key={exerciseId}
              >
                <hr className="separacionBarra" />
                <div className="videoExerciseRoutine">
                  <YoutubeEmbed url={exercise.videoUrl} />
                </div>
                <div className="durationExercise">
                  {exercise["exercise-routine"].series}
                </div>
                <div className="lapseExercise">
                  {exercise["exercise-routine"].duration}
                </div>
                <div className="seriesExercise">
                  {exercise["exercise-routine"].lapse}
                </div>
                <div className="observationsExercise">
                  {exercise["exercise-routine"].observations}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  return <div>{displayRoutines()}</div>;
};

export default RoutineHistory;
