import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          {/* Add more table header columns as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((record, index) => (
          <tr key={index}>
            <td>{record.first_name}</td>
            <td>{record.last_name}</td>
            {/* Add more table data cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
