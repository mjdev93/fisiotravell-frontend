import React, { useEffect, useState } from "react";
import { getMyRoutines } from "../../../services/history.service";
import moment from "moment/moment";
import "./routineHistory.css"
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
    <>
    
<details key={index} name="historyRoutine">
        <summary className="fechaProfileUser">{routine.date}</summary>
        <div>
            <p>Contenido</p>
        </div>
      </details>
      <hr/>
      </>




  )})
  return formatRoutines
}


    
  return (
  <>
  <div>
      {displayRoutines()}
  </div>
  </>
  )
};

export default RoutineHistory;
