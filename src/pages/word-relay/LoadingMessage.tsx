import React from 'react';

type props = {
  className: string;
  message: string;
};

const LoadingMessage = (props: props) => {
  const { className, message } = props;

  return <p className={className}>{message}</p>;
};

export default LoadingMessage;
