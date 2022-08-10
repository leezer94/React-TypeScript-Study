import React from 'react';

const DigitButton = (props) => {
  const { digit, updateNumber } = props;

  return <button onClick={() => updateNumber(digit)}>{digit}</button>;
};

export default DigitButton;
