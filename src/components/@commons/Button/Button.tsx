import React from 'react';

type props = {
  type: 'submit';
  content: string;
  onClickEvent?: () => void;
};

export const Button = (props: props) => {
  const { type, content, onClickEvent } = props;

  return (
    <button type={type} onClick={onClickEvent}>
      {content}
    </button>
  );
};
