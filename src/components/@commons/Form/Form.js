import React, { forwardRef } from 'react';

import { StyledForm } from './Form.style';

const Form = forwardRef((props, ref) => {
  return <StyledForm ref={ref} {...props} />;
});

export default Form;
