import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from "prop-types";


const Table = ({ data }) => {
  return (
    <table className="table">
        <thead>
        <tr>
            <th>NOMBRE</th>
            <th>APELLIDO</th>
            <th>EMAIL</th>
            <th>TELÉFONO</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item) => (

        
                <tr key={item.id} className='listData'>
                  <td>{item.nombre}</td>
                  <td>{item.apellido}</td>
                  <td>{item.email}</td>
                  <td>{item.telefono}</td>
                 <td> <FontAwesomeIcon icon={faTrashCan} /></td>
                </tr>
             
            ))}
            
        
        </tbody>
    </table>
  )
}

Table.propTypes = {
    data: PropTypes.array, 
    
  };

export default Table;
