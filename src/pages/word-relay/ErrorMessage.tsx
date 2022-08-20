import React from 'react';
import { CLASSNAME, ERROR_MESSAGE } from '../../common/constants/constants';

type props = {
  message: string | boolean;
  loadingStatus: boolean;
  definition: boolean;
};

const ErrorMessage = (props: props) => {
  let { message, loadingStatus, definition } = props;
  let template;

  if (loadingStatus) {
    template = <p className=''>{message}</p>;
    template = <p className={CLASSNAME.HIDE}>{message}</p>;
  } else {
    message = definition ? definition : ERROR_MESSAGE.EMPTY_INPUT;
  }

  return template;
};

export default ErrorMessage;
