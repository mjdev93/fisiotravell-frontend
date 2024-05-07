import "./searchBar.css";
import { useEffect, useState } from "react";
import Table from "../table/Table";
import { getAllUsers } from "../../../services/admin.service"
import { Link } from 'react-router-dom';


function SearchBar() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState([])

  const keys = ["name", "lastname", "email", "phone"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllUsers();
        setUserData(data);
      } catch (error) {
        console.log("Error al obtener usuarios", error);
      }
    };

    fetchData();
    
    
  }, []);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="search-container">
      <div className="bodySearch">
        <div className="adminHeader">
          <h2 className="hello">Hola, Admin</h2>

          <Link to="/create">
            
          <button className="buttonCreate">Crear Usuario</button>
          </Link>
        </div>


        <input
          className="search"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <Table data={search(userData)} />
      </div>
    </div>
  );
}

export default SearchBar;
