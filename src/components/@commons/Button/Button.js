import React from 'react';

const Button = (props) => {
  const { title, onClickEvent } = props;

  return <button onClick={onClickEvent}>{title}</button>;
};

export default Button;
