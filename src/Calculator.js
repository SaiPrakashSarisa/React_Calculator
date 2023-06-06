import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [calButton, setCalButton] = useState([
    '7',
    '8',
    '9',
    '+',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    'x',
    '0',
    '.',
    '/',
    '=',
    'DEl',
  ]);
  const handleClick = (value) => {
    if (
      value == '=' ||
      value == '+' ||
      value == '-' ||
      value == '/' ||
      value == 'x'
    ) {
      setPreviousOperand(currentOperand + ' ' + value);
      setCurrentOperand('');
    } else {
      setCurrentOperand(currentOperand + value);
    }
  };

  return (
    <div className="calculator-body">
      <div className="calculator-screen">
        <input
          type="text"
          value={previousOperand}
          className="previous-operand"
          readOnly
        />
        <input
          type="text"
          value={currentOperand}
          className="current-operand"
          readOnly
        />
      </div>

      <div className="actions">
        {calButton.map((btnValue) => {
          return <Button value={btnValue} handleClick={handleClick} />;
        })}
      </div>
    </div>
  );
};

export default Calculator;
