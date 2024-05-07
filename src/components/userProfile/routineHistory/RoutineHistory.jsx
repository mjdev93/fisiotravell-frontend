import React, { useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import moment from "moment/moment";

const RoutineHistory = () => {

  const [myRoutines, setMyRoutines] = useState([]);

  useEffect(()=>{
    const fetchMyRoutines = async () =>{
      const {data} = await getMyRoutines()
        setMyRoutines(data)
    }
    fetchMyRoutines()
  }, [])
  
const displayRoutines = () => {
  console.log(myRoutines)
  const formatRoutines = myRoutines.map((routine, index) => {
  return (
    <div key={index}>
        <h1>{routine.date}</h1>
    </div>
  )})
  return formatRoutines
}


    
  return (
  <>
  <div>
      {displayRoutines()}
  </div>;
  </>
  )
};

export default RoutineHistory;
