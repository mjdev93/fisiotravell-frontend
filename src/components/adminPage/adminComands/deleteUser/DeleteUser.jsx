<<<<<<< HEAD
import React, { useRef, useState } from "react";
=======
import React, { useState, useEffect, useRef } from "react";
>>>>>>> 6d381ef19c2f46046b104951e3dbe2b871eefc15
import { deleteUser } from "../../../../services/admin.service";
import "./deleteUser.css";

<<<<<<< HEAD



const DeleteUser = ({ userId, onClose  }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
=======
const DeleteUser = ({ userId, onClose }) => {
>>>>>>> 6d381ef19c2f46046b104951e3dbe2b871eefc15
  const modalRef = useRef();

  const closeDelete = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleDelete = async () => {
    try {
      console.log(userId);
      await deleteUser(userId);
      onClose();
    } catch (error) {
      console.log("no se ha podido borrar el usuario", error);
    }
  };

  const handleNoButtonClick = () => {
    onClose();
  };

  return (
<<<<<<< HEAD
    <div ref={modalRef} onClick={closeDelete}className="bg-formDelete">
    <div className="container-delete">
      {showConfirmation ? (
        <div className="bg-form-delete">
          <div className="createUser-container">
            <div className="confirmation">
              <p className="text">¿Estás seguro de que deseas borrar este usuario?</p>
              <button className="button green" onClick={handleDelete}>Sí</button>
              <button className="button red" onClick={() => setShowConfirmation(false)}>No</button>
            </div>
          </div>
=======
    <div ref={modalRef} onClick={closeDelete} className="containerpopup">
      <div className="popup">
        <p className="textpopup">
          ¿Estás seguro de que deseas borrar este usuario?
        </p>
        <div className="button-containerpopup">
          <button className="buttonpopup Acceptpopup" onClick={handleDelete}>
            Sí
          </button>
          <button
            className="buttonpopup Rejectpopup"
            onClick={handleNoButtonClick}
          >
            No
          </button>
>>>>>>> 6d381ef19c2f46046b104951e3dbe2b871eefc15
        </div>
      </div>
    </div>
    </div>
  );
};

export default DeleteUser;
