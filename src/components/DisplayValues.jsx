import React from 'react';
import "./DisplayValues.css"

export default function DisplayValues ({ value, type }) {
  return (
    <div className='container date-timer'>
      <p>{String(value)}</p>
      <span>{type}</span>
    </div>
  );
};