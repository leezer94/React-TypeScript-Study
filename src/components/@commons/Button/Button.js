import React from 'react';

export const Button = (props) => {
  const { type, title, onClickEvent } = props;

  return (
    <button type={type} onClick={onClickEvent}>
      {title}
    </button>
  );
};
