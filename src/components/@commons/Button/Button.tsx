import React from 'react';

type props = {
  type: 'submit';
  title: string;
  onClickEvent?: () => void;
};

export const Button = (props: props) => {
  const { type, title, onClickEvent } = props;

  return (
    <button type={type} onClick={onClickEvent}>
      {title}
    </button>
  );
};
