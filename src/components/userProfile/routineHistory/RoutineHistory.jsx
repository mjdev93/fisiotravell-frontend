import React, { useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import moment from "moment/moment";
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
          <hr key={`hr-${index}`} />
        </>
      );
    });
    return formatRoutines;
  };

  const displayExercises = (exercises) => {
    console.log(exercises)
    return exercises.map((exercise, index) => (
      <div key={`exercise-${index}`}>
        <p>{exercise.title}</p>
        <p>{exercise.videoUrl}</p>
        <p>{exercise.description}</p>
      </div>
    ));
  };

  return (
    <>
      <div>{displayRoutines()}</div>
    </>
  );
};

export default RoutineHistory;
