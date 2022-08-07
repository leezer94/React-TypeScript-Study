import React, { forwardRef } from 'react';

export const P = forwardRef((props, forwardRef) => {
  const { className, style, title } = props;

  return (
    <p className={className} style={style} ref={forwardRef}>
      {title}
    </p>
  );
});
