import React, { useState, useEffect, useContext } from 'react';
import './userProfile.css'
import { InfoContext } from '../../context/infoContext';


const UserProfile = () => {

  const {info, setInfo} = useContext(InfoContext)


  return (
    <div>
      <h1>profile</h1>
       <div className='profileItem'>
        <span className='profileLabel'>Nombre:</span>
        <span className='profileValue'>{info?.name}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Apellidos:</span>
        <span className='profileValue'>{info?.lastname}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Email:</span>
        <span className='profileValue'>{info?.email}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Teléfono:</span>
        <span className='profileValue'>{info?.phone}</span>
      </div> 
    </div>
  );
};

export default UserProfile;
