import "./searchBar.css";
import { useState } from "react";
import Table from "../table/Table";
import { Users } from "./users";

function SearchBar() {
  const [query, setQuery] = useState("");
  const keys = ["nombre", "apellido", "email", "telefono"];

  const search = (data) => {
    return data.filter((item) =>
      keys
        .some((key) => item[key].toLowerCase().includes(query))
        
    );
  };

  return (
    <>
      <body className="bodySearch">
      <div className="adminHeader">
        <h2 className="hello">Hola, Admin</h2>
        <button className="buttonCreate">Crear Usuario</button>
        <img src=""></img>
           </div>
     
      

      <div className="container">
        <input
          className="search"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <Table data={search(Users)} />
        
      </div>
      </body>
    </>
  );
}



export default SearchBar;
