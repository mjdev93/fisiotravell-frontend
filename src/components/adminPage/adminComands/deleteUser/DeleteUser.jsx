import React, { useState, useEffect, useRef } from "react";
import { deleteUser } from "../../../../services/admin.service";
import "./deleteUser.css";

const DeleteUser = ({ userId, onClose }) => {
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
      setShowConfirmation(false);
      onClose();
    } catch (error) {
      console.log("no se ha podido borrar el usuario", error);
    }
  };

  const handleNoButtonClick = () => {
    onClose();
  };

  return (
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
        </div>
      </div>
    </div>
  );
};

export default DeleteUser;
