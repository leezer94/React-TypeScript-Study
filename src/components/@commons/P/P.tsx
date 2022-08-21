import React, { forwardRef } from 'react';

type props = {
  className: string | undefined;
  style: object | undefined;
  content: any;
};

export const P = forwardRef<HTMLParagraphElement, props>((props, forwardRef) => {
  const { className, style, content } = props;

  return (
    <p className={className} style={style} ref={forwardRef}>
      {content}
    </p>
  );
});
