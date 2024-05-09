import React, { useState } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import DeleteUser from "../adminComands/deleteUser/DeleteUser";
import { enterProfile } from "../../../services/admin.service";
import "./table.css";
import "bootstrap/dist/css/bootstrap.css";
import { useNavigate } from "react-router-dom";

const Table = ({ data }) => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false); 

  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const handleDeleteUser = (userId) => {
    setSelectedUserId(userId);
    setShowDeleteModal(true);
  };

  const handleProfileClick = async (userId) => {
    try {
      const userData = await enterProfile(userId); 
      console.log(userId)
      navigate(`/profile/${userId}`)
  
    } catch (error) {
      console.error("Error al obtener datos del usuario:", error);
    }
  };

  return (
    <>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>EMAIL</th>
              <th>TELÉFONO</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {records.map((item) => (
              <tr key={item.id} className="listData" onClick={() => handleProfileClick(item.id)}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone} </td>
                <td className="tIcons">
                  <button
                    className="btn-icons"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} className="trashIcon" />
                  </button>
                  <button className="btn-icons">
                    <FontAwesomeIcon
                      icon={faUserPen}
                      className="fa-solid-fa-user-pen"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="pagination-container">
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a
                  href="#"
                  className="page-link"
                  onClick={() => changeCPage(n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {showDeleteModal && <DeleteUser userId={selectedUserId} />}
    </>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
