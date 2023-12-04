// src/components/AdsTable.js

import React from 'react';

const AdsTable = ({ data }) => {
  return (
    <table style={{border:1}}>
      <thead>
        <tr>
          <th>label</th>
          <th>product</th>
          <th>Value</th>
          <th>des</th>
          
        </tr >
      </thead>
      <tbody >
        {data.map((item) => (
          <tr key={item.label}>
            <td>{item.label}</td>
            <td>{item.product}</td>
            <td>{item.value}</td>
            <td>{item.des}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdsTable;
