import React from 'react';
import { StyledDigitButton } from '../DigitButton/DigitButton.style';

const LottoButton = (props) => {
  const { title, onClickButton, ...rest } = props;

  return (
    <StyledDigitButton onClick={onClickButton} {...rest}>
      {title}
    </StyledDigitButton>
  );
};

export default LottoButton;
