import React, { forwardRef } from 'react';

const Input = forwardRef((props, forwardRef) => {
  const { type, onKeyPressEvent } = props;

  return <input type={type} ref={forwardRef} onKeyPress={onKeyPressEvent}></input>;
});

export default Input;
