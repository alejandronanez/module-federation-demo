import React from 'react';

const Button = ({ children }) => {
  return (
    <button
      style={{
        border: 'none',
        padding: '5px 10px',
        backgroundColor: 'teal',
        color: '#ffffff',
      }}
    >
      {children}
    </button>
  );
};

export default Button;
