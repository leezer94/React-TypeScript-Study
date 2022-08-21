import React from 'react';
import { StyledDigitButton } from '../DigitButton/DigitButton.style';

export const StyledButton = (props) => {
  const { content, onClickButton, ...rest } = props;

  return (
    <StyledDigitButton onClick={onClickButton} {...rest}>
      {content}
    </StyledDigitButton>
  );
};
