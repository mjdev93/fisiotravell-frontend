import React, { useState, useEffect } from 'react';
import './userProfile.css'
import { getMyProfile } from '../../services/profile.service';


const UserProfile = () => {

  const [user,setUser] = useState(null);




  



  return (
    <div className='userProfile'>
      <div className='profileItem'>
        <span className='profileLabel'>Nombre:</span>
        <span className='profileValue'>{user.name}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Apellidos:</span>
        <span className='profileValue'>{user.lastname}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Email:</span>
        <span className='profileValue'>{user.email}</span>
      </div>
      <div className='profileItem'>
        <span className='profileLabel'>Teléfono:</span>
        <span className='profileValue'>{user.phone}</span>
      </div>
    </div>
  );
};

export default UserProfile;
