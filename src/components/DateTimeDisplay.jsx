import React from 'react';

export default function DateTimeDisplay ({ value, type, isDanger }) {
  return (
    <div className={isDanger ? 'container' : 'container'}>
      <p>{String(value)}</p>
      <span>{type}</span>
    </div>
  );
};