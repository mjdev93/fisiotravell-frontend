import React, { useState, useEffect, useContext } from 'react';
import RoutineHistory from '../../components/userProfile/RoutineHistory/RoutineHistory'
import UserProfile from '../../components/userProfile/userInfo/UserProfile'
import "./profile.css"
import { InfoContext } from '../../context/infoContext';
import {EditRoutine} from '../../components/userProfile/editRoutine/EditRoutine'
import {CreateRoutine} from '../../components/userProfile/createRoutine/CreateRoutine.jsx'


const Profile = () => {
  const {info, setInfo} = useContext(InfoContext)
  const [showEditRoutine, setShowEditRoutine] = useState(false);
  const [showCreateRoutine, setShowCreateRoutine] = useState(false);
  const [routineDate, setRoutineDate] = useState("");

  return (
    <>
    {showEditRoutine && <EditRoutine setShowEditRoutine={setShowEditRoutine} date={routineDate}/>}
    {showCreateRoutine && <CreateRoutine setShowCreateRoutine={setShowCreateRoutine}/>}
    <header className="headerProfile"> 
    <h1 className='nameUserHeader'>{/* {info?.name} {info?.lastname} */} Manolo Romero Jimenez</h1>
    <div className='containerFormitasHeader'></div>
    
     </header> 
     <main className='mainProfile'>
      
    <UserProfile functionShowCreateRoutine={setShowCreateRoutine}/>
    <div className='historyRoutineContainer'>
      <h2 className='titleHistoryRoutine'>Historial de rutinas</h2>
    <RoutineHistory
    functionShowEditRoutine={setShowEditRoutine}
    routineDate={setRoutineDate}/>
    </div>

    <div className='formitaDerechaProfile'></div>
    
    </main>
    </>
  )
}

export default Profile