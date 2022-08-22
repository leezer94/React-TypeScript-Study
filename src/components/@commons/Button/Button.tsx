import React from 'react';

type props = {
  className: string;
  type: 'submit' | undefined;
  content: string;
  onClickEvent?: () => void;
};

export const Button = (props: props) => {
  const { className, type, content, onClickEvent } = props;

  return (
    <button className={className} type={type} onClick={onClickEvent}>
      {content}
    </button>
  );
};
