import React, { forwardRef } from 'react';

type props = {
  className: string;
  style: object;
  title: any;
};

export const P = forwardRef<HTMLParagraphElement, props>((props, forwardRef) => {
  const { className, style, title } = props;

  return (
    <p title={title} className={className} style={style} ref={forwardRef}>
      {title}
    </p>
  );
});
