import React, { forwardRef } from 'react';

export const Input = forwardRef((props, forwardRef) => {
  const { type, onKeyPressEvent } = props;

  return <input type={type} ref={forwardRef} onKeyPress={onKeyPressEvent}></input>;
});