import React from 'react';
import { StyledDigitButton } from './DigitButton.style';

type props = {
  digit: number;
  updateNumber: (i: number) => void;
};

const DigitButton = (props: props) => {
  const { digit, updateNumber } = props;

  return <StyledDigitButton onClick={() => updateNumber(digit)}>{digit}</StyledDigitButton>;
};

export default DigitButton;
