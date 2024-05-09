import React from 'react'
import "./updateUser.css"

const UpdateUser = () => {
  return (
    <div>
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
              name="phone"
              className="form-control"
              value={inputData.password}
              onChange={(e) =>
                setInputData({ ...inputData, password: e.target.value })
              }
            />
          </div>
          <br />
        </div>
        <button type="submit" className="bttn-submit">
          Submit
        </button>
      </form>
    </div>
    </div>

    </div>
  )
}

export default UpdateUser
