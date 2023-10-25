import React from 'react';

export default function DateTimeDisplay ({ value, type }) {
  return (
    <div className='container'>
      <p>{String(value)}</p>
      <span>{type}</span>
    </div>
  );
};