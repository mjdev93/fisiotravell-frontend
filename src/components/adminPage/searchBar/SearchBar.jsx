import "./searchBar.css";
import { useEffect, useState } from "react";
import Table from "../table/Table";
import { getAllUsers } from "../../../services/admin.service"
import CreateUser from "../createUser/CreateUser";



function SearchBar() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState([])
  const [showCreateUser, setShowCreateUser] = useState(false)

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
    
    
  }, [userData]);

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

          
            
          <button onClick= {() => setShowCreateUser(true)}className="buttonCreate">Crear Usuario</button>
          {showCreateUser && <CreateUser onClose={() => setShowCreateUser(false)}/>}
          
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
