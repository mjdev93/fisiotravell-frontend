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
    const extractedDate = routine.date
    const niceDate= moment(extractedDate).format('D/MM/YYYY')
  return (
    <div key={index}>
        <button className="masInformacion
">{niceDate}</button>
    </div>
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
