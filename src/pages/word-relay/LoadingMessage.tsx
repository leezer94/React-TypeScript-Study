import React from 'react';
import { P } from '../../components';

type props = {
  className: string;
  message: string;
};

const LoadingMessage = (props: props) => {
  const { className, message } = props;

  return <P className={className} content={message} style={undefined} />;
};

export default LoadingMessage;
