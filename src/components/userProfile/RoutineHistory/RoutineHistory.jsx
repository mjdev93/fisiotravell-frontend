import React, { useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import moment from "moment/moment";
import YoutubeEmbed from "../../youtubeEmbed/YoutubeEmbed";
import "./routineHistory.css";

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
      const formatRoutines = myRoutines.map((routine, index) => {
      const extractedDate = routine.date;
      const niceDate = moment(extractedDate).format("D/MM/YYYY");

      return (
        <>
          <details key={index} name="historyRoutine">
            <summary className="fechaProfileUser">{niceDate}</summary>
            <div>
              <p>{displayExercises(routine.exercises)}</p>
            </div>
          </details>
          <hr key={index} />
        </>
      );
    });
    return formatRoutines;
  };

  const displayExercises = (exercises) => {
    console.log(exercises)
    return exercises.map((exercise, index) => (
      <div key={index}>
        <p>{exercise.title}</p>
        <p><YoutubeEmbed embedId={getEmbedId(exercise.videoUrl)} /></p>
        <p>{exercise['exercise-routine'].duration}</p>
        <p>{exercise['exercise-routine'].lapse}</p>
        <p>{exercise['exercise-routine'].series}</p>
        <p>{exercise['exercise-routine'].observations}</p>
      </div>
    ));
  };
  const getEmbedId = (url) => {
    const videoId = url.includes("youtu.be")
      ? url.split("/").pop()
      : url.split("v=")[1];
    return videoId ? videoId : null;
  };

  return (
    <>
      <div>{displayRoutines()}</div>
    </>
    
  );
};

export default RoutineHistory;
