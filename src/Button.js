import React from 'react';

const Button = ({ value, handleClick }) => {
  return (
    <button class="btn" onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
