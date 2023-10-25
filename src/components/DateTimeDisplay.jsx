import React from 'react';
import "./DateTimeDisplay.css"
export default function DateTimeDisplay ({ value, type }) {
  return (
    <div className='container date-timer'>
      <p>{String(value)}</p>
      <span>{type}</span>
    </div>
  );
};