import React from 'react'
import RoutineHistory from '../../components/userProfile/routineHistory/RoutineHistory'
import UserProfile from '../../components/userProfile/userInfo/UserProfile'
import "./profile.css"


const Profile = () => {
  return (
    <>
    <header className="headerProfile"> 
    <h1 className='nameUserHeader'>Manolito Gafotas</h1>
    <div className='containerFormitasHeader'></div>
    
     </header> 
     <main className='mainProfile'>
      
    <UserProfile/>
    <div className='historyRoutineContainer'>
      <h2 className='titleHistoryRoutine'>Historial de rutinas</h2>
    <RoutineHistory/>
    </div>
    <div className='formitaDerechaProfile'></div>
    
    </main>
    </>
  )
}

export default Profile