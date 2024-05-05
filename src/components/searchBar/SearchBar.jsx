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
      <h2 className="searchBarTitle">Hola, Admin</h2>
      <button className="button">Crear Usuario</button>
      <div className="sidebar"></div>

      <div className="container">
        <input
          className="search"
          placeholder="search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <Table data={search(Users)} />
        
      </div>
    </>
  );
}



export default SearchBar;
