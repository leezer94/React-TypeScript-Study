import React, { forwardRef } from 'react';
import { StyledForm } from './Form.style';

type props = {
  onSubmit: (e: any) => void;
  children: any;
};

export const Form = forwardRef<HTMLFormElement, props>((props, ref) => {
  return (
    <StyledForm ref={ref} {...props}>
      {props.children}
    </StyledForm>
  );
});
