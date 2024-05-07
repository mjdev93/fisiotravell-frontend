import React from "react";
import './createUser.css'

const CreateUser = () => {
  return (
  
    <body className="body-createUser">
    <div className="createUser-container">
      <div className="info-card">
        <label className="create-label" htmlFor="name">Nombre</label>
        <input type="text" name="name" className="form-control"></input>

        <div>
          <label className="create-label" htmlFor="lastname">Apellido</label>
          <input
            type="text"
            lastname="lastname"
            className="form-control"
          ></input>
        </div>
        <div>
          <label className="create-label" htmlFor="email">email</label>
          <input type="text" email="email" className="form-control"></input>
        </div>

        <div>
          <label className="create-label" htmlFor="phone">Teléfono</label>
          <input type="text" phone="phone" className="form-control"></input>
        </div>
        <br />
        
      </div>
      <button className="bttn-submit">Submit</button>
    </div>
    </body>
  
  );
};

export default CreateUser;
