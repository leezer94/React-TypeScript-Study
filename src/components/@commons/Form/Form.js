import React, { forwardRef } from 'react';

import { StyledForm } from './Form.style';

export const Form = forwardRef((props, ref) => {
  return <StyledForm ref={ref} {...props} />;
});
