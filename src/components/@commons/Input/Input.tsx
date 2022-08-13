import React, { forwardRef } from 'react';

type props = {
  type: string;
  onKeyPressEvent: (e: any) => void;
};

export const Input = forwardRef<HTMLInputElement, props>((props, forwardRef) => {
  const { type, onKeyPressEvent } = props;

  return <input type={type} ref={forwardRef} onKeyPress={onKeyPressEvent}></input>;
});
