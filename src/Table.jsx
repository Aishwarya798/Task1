import React, { useState } from 'react'

function Table() {
    const[data,setdata]=useState([
        { id: 1, name: 'John Doe', age: 25, salary: 50000 },
    { id: 2, name: 'Jane Doe', age: 30, salary: 60000 },
    { id: 3, name: 'Bob Smith', age: 28, salary: 55000 },
    ])
    const[order,setOrder]=useState('asc')
    const[key,setKey]=useState('id')

    const handleSort=(k,o)=>{
        setKey(k);
        setOrder(o);
    };
    const sortedData=[...data].sort((a,b)=>{
        const aValue = a[key];
        const bValue = b[key];

        if (order === 'asc') {
            return aValue - bValue;
          } else {
            return bValue - aValue;
          }
        });
   
    
  return (

   <>
       <div>
      <div>
        <button onClick={() => handleSort('id','asc')}>Sort ID Low to High</button>
        <button onClick={() => handleSort( 'id','desc')}>Sort ID High to Low</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   </>
  )
}

export default Table