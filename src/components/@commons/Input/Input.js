import React, { forwardRef } from 'react';

const Input = forwardRef((props, forwardRef) => {
  const { title, type } = props;

  return (
    <input type={type} ref={forwardRef}>
      {title}
    </input>
  );
});

export default Input;
