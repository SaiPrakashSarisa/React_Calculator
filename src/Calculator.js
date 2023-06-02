import React, { useState } from 'react';
import Button from './Button';

const Calculator = () => {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
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
        <Button value="7" handleClick={handleClick} />
        <Button value="8" handleClick={handleClick} />
        <Button value="9" handleClick={handleClick} />
        <Button value="+" handleClick={handleClick} />
        <Button value="4" handleClick={handleClick} />
        <Button value="5" handleClick={handleClick} />
        <Button value="6" handleClick={handleClick} />
        <Button value="-" handleClick={handleClick} />
        <Button value="1" handleClick={handleClick} />
        <Button value="2" handleClick={handleClick} />
        <Button value="3" handleClick={handleClick} />
        <Button value="x" handleClick={handleClick} />
        <Button value="0" handleClick={handleClick} />
        <Button value="." handleClick={handleClick} />
        <Button value="/" handleClick={handleClick} />
        <Button value="=" handleClick={handleClick} />
        <Button value="DEl" handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
