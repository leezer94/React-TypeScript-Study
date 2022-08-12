import React from 'react';
import { StyledDigitButton } from './DigitButton.style';

const DigitButton = (props) => {
  const { digit, updateNumber } = props;

  return <StyledDigitButton onClick={() => updateNumber(digit)}>{digit}</StyledDigitButton>;
};

export default DigitButton;
