import React from 'react';
import './styles.css';

const Table = ({ data }) => {
  return (
    <table className='sub-table'>
      <thead>
        <tr>
          <th>Contains</th>
          <th>Basic</th>
          <th>Gold</th>
          <th>Platinum</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => (
          <tr key={row.id}>
            <td>{row.contains}</td>
            <td>{row.containerOne}</td>
            <td>{row.containerTwo}</td>
            <td>{row.containerThree}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
