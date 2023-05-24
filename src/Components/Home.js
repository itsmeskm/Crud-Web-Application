import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux';
import { deleteEvent, editEvent } from '../redux/slice/AddEvent';

const Home = () => {

    const dispatch = useDispatch()

  const tableVal = useSelector((state) => state.event)

  const handleDelete = (props) => {
    dispatch(deleteEvent(props));
  }

  const handleEdit = (props) => {
    dispatch(editEvent(props));
  };

  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };
  const sortedData = [...tableVal].sort((a, b) => {
    const valueA = a[sortKey]?.toLowerCase();
    const valueB = b[sortKey]?.toLowerCase();
    if(sortKey === "amount"){
        if ((valueA - valueB) < 0) return sortOrder === 'asc' ? -1 : 1;
        if ((valueA - valueB) > 0) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    }
    else {
        if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
        if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
    }
  });

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = sortedData.filter((item) =>
    item.vehicleType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='container mt-3'>
      <h2 className="bg-primary d-flex justify-content-center alignItems-center text-white p-2">Welcome to CRUD Web Application</h2>
      <div className="input-group m-3">
        <input type="text" className="form-control" placeholder="Search" value={searchQuery} onChange={handleSearch}/>
     </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">S.No</th>
                <th scope="col" onClick={() => handleSort('vehicleType')}>Vehicle Type</th>
                <th scope="col" onClick={() => handleSort('amount')}>Amount</th>
                <th scope="col" onClick={() => handleSort('grace')}>Grace</th>
                <th scope="col">Delete</th>
                <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((val, index) => (  
                <tr data-index={index} key={index}>  
                    <th scope="row">{index+1}</th>
                    <td>{val.vehicleType}</td>  
                    <td>{val.amount}</td>  
                    <td>{val.grace}</td>  
                    <td>
                        <Link to="/" onClick={() => handleDelete(val.vehicleType)}>
                            <i className="fa fa-trash"></i>
                        </Link>
                    </td>
                    <td>
                        <Link to="/addEventModal" state={val} onClick={() => handleEdit(val.vehicleType)}>
                            <i className="fa fa-edit"></i> 
                        </Link>
                    </td>
                </tr>  
                ))}  
            </tbody>
        </table>
        <Link to="/addEventModal">
            <button type="button" className="btn btn-success btn-md">Add</button>
        </Link>
    </div>
  )
}

export default Home
