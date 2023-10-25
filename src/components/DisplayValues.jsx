import React from 'react';

export default function DisplayValues ({ value, type }) {
  return (
    <div className='container'>
      <p>{String(value)}</p>
      <span>{type}</span>
    </div>
  );
};