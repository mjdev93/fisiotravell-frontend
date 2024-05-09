import React, { useState } from "react";
import { deleteUser } from "../../../../services/admin.service";

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
    <div>
      {showConfirmation ? (
        <div>
          ¿Estás seguro de que deseas borrar este usuario?
          <button onClick={handleDelete}>Sí</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      ) : (
        <button onClick={() => setShowConfirmation(true)}>
          Eliminar usuario
        </button>
      )}
    </div>
  );
};

export default DeleteUser;
