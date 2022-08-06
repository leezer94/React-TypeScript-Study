import React from 'react';

const DigitButton = (props) => {
  const { digit, updateFirstNumber } = props;

  return <button onClick={() => updateFirstNumber(digit)}>{digit}</button>;
};

export default DigitButton;
