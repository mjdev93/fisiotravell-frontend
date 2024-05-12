import React, { useState, useEffect, useContext } from 'react';
import './userProfile.css'
import { InfoContext } from '../../../context/infoContext';


//cuando entro /profile/profileId


const UserProfile = ({functionShowCreateRoutine}) => {

  const { info, setInfo } = useContext(InfoContext)

  const openCreateRoutine = () => {
    functionShowCreateRoutine(true);
  }

  return (
      <div className='profileDataContainer'>

        <div className='profileItem'>
          <span className='profileLabel'>Nombre:</span>
          <span className='profileValue'>{/*info?.name*/}Manolo</span>
        </div>
        <div className='profileItem'>
          <span className='profileLabel'>Apellidos:</span>
          <span className='profileValue'>{/*info?.lastname*/}Romero Jimenez</span>
        </div>
        <div className='profileItem'>
          <span className='profileLabel'>Email:</span>
          <span className='profileValue'>{/*info?.email*/}mrj32@gmail.com</span>
        </div>
        <div className='profileItem'>
          <span className='profileLabel'>Teléfono:</span>
          <span className='profileValue'>{/*info?.phone*/}652963487</span>
        </div>
        <button onClick={() => openCreateRoutine()} className='buttonNuevaRutina pretty'>Crear rutina</button>
      </div>
  );
};

export default UserProfile;
