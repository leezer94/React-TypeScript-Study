import React from 'react';

const Button = (props) => {
  const { type, title, onClickEvent } = props;

  return (
    <button type={type} onClick={onClickEvent}>
      {title}
    </button>
  );
};

export default Button;
