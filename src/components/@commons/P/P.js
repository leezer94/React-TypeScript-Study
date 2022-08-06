import React, { forwardRef } from 'react';

const P = forwardRef((props, forwardRef) => {
  const { className, style, title } = props;

  return (
    <p className={className} style={style} ref={forwardRef}>
      {title}
    </p>
  );
});

export default P;
