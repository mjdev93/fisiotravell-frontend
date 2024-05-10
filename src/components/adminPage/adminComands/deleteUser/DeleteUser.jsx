import React, { useRef, useState } from "react";
import { deleteUser } from "../../../../services/admin.service";
import './deleteUser.css'




const DeleteUser = ({ userId, onClose  }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
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
    } catch (error) {
      console.log("no se ha podido borrar el usuario", error);
    }
  };

  return (
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
        </div>
      ) : (
        <button className="deleteButton" onClick={() => setShowConfirmation(true)}>Eliminar usuario</button>
      )}
    </div>
    </div>
  );
};


export default DeleteUser;
