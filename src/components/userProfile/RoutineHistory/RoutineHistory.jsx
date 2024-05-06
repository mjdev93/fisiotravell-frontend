import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import React from "react";

const RoutineHistory = () => {
  useEffect(() => {
    [routine, setRoutine] = useState([])
    [exercise, setExercise] = useState([])
    [exerciseRoutine, setExerciseRoutine] = useState([]);

    const getData = async () => {
      try {
        const routineResponse = await axios.get("/routines");
        const exerciseResponse = await axios.get("exercises");
        const exerciseRoutineResponse = await axios.get("/exerciseRoutines");

        setRoutine(routineResponse.data);
        setExercise(exerciseResponse.data);
        setExerciseRoutine(exerciseRoutineResponse.data);

        
      } catch (error) {
        console.log('Error retrieving the data')
      }
    };
    getData();
  },[]);

  return (
  <>
  <div>
    <h1>{routine.date}</h1>
    

  </div>;
  </>
  )
};

export default RoutineHistory;
