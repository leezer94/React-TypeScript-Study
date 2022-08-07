import React from 'react';

const LoadingMessage = (props) => {
  const { className, message } = props;

  return <p className={className}>{message}</p>;
};

export default LoadingMessage;
