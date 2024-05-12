import React, { useRef, useState } from "react";
import "./createUser.css";
import { createUser } from "../../../../services/admin.service";


const CreateUser = ({ onClose }) => {
  const modalRef = useRef();

  const closeCreate = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const [inputData, setInputData] = useState({
    name: "",
    lastname: "", 
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
     e.preventDefault(); 

    try {
  
      const response = await createUser(inputData);

    
      console.log("Usuario creado:", response);

  
      onClose();
    } catch (error) {
      console.error("Error al crear usuario:", error);
      
    }
  };

  

  return (
    <div ref={modalRef} onClick={closeCreate}className="bg-formCreate">
    <div  className="createUser-container">
      <form className="formCreateUser" onSubmit={handleSubmit}>
        <div className="info-card">
          <label className="create-label" htmlFor="name">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={inputData.name}
            onChange={(e) =>
              setInputData({ ...inputData, name: e.target.value })
            }
          />

          <div>
            <label className="create-label" htmlFor="lastname">
              Apellido
            </label>
            <input
              type="text"
              lastname="lastname"
              className="form-control"
              value={inputData.lastname}
              onChange={(e) =>
                setInputData({ ...inputData, lastname: e.target.value })
              }
            />
          </div>
          <div>
            <label className="create-label" htmlFor="email">
              email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={inputData.email}
              onChange={(e) =>
                setInputData({ ...inputData, email: e.target.value })
              }
            />
          </div>

          <div>
            <label className="create-label" htmlFor="phone">
              Teléfono
            </label>
            <input
              type="text"
              name="phone"
              className="form-control"
              value={inputData.phone}
              onChange={(e) =>
                setInputData({ ...inputData, phone: e.target.value })
              }
            />
          </div>

          <div>
            <label className="create-label" htmlFor="password">
              Contraseña
            </label>
            <input
              type="text"
              name="password"
              className="form-control"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>
          <br />
        </div>
        <div className="bttn-create-user">
        <button type="submit" className="bttn-submit">
          Crear Usuario
        </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default CreateUser;