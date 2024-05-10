import React, { useState, useEffect, useContext } from 'react';
import RoutineHistory from '../../components/userProfile/RoutineHistory/RoutineHistory'
import UserProfile from '../../components/userProfile/userInfo/UserProfile'
import "./profile.css"
import { InfoContext } from '../../context/infoContext';
import {EditRoutine} from '../../components/userProfile/editRoutine/EditRoutine'


const Profile = () => {
  const {info, setInfo} = useContext(InfoContext)
  const [showEditRoutine, setShowEditRoutine] = useState(false)
  return (
    <>
    {showEditRoutine && <EditRoutine/>}
    <header className="headerProfile"> 
    <h1 className='nameUserHeader'>{info?.name} {info?.lastname}</h1>
    <div className='containerFormitasHeader'></div>
    
     </header> 
     <main className='mainProfile'>
      
    <UserProfile/>
    <div className='historyRoutineContainer'>
      <h2 className='titleHistoryRoutine'>Historial de rutinas</h2>
    <RoutineHistory
    functionShowEditRoutine={setShowEditRoutine}/>
    </div>
    <div className='formitaDerechaProfile'></div>
    
    </main>
    </>
  )
}

export default Profile