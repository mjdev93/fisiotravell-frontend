import React, { useState } from "react";
import { deleteUser } from "../../../../services/admin.service";
import './deleteUser.css'

export const DeleteUser = ({ userId }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = async () => {
    try {
      console.log(userId);
      await deleteUser(userId);
      setShowConfirmation(false);
    } catch (error) {
      console.log("no se ha podido borrar el usuario", error);
    }
  };

  return (
<div className="container">
      {showConfirmation ? (
        <div className="confirmation">
          <p className="text">¿Estás seguro de que deseas borrar este usuario?</p>
          <button className="button green" onClick={handleDelete}>Sí</button>
          <button className="button red" onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      ) : (
        <button className="deleteButton" onClick={() => setShowConfirmation(true)}>Eliminar usuario</button>
      )}
    </div>
  );
};


export default DeleteUser;
