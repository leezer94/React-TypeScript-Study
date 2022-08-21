import React from 'react';
import { StyledDigitButton } from '../DigitButton/DigitButton.style';

const LottoButton = (props) => {
  const { content, onClickButton, ...rest } = props;

  return (
    <StyledDigitButton onClick={onClickButton} {...rest}>
      {content}
    </StyledDigitButton>
  );
};

export default LottoButton;
