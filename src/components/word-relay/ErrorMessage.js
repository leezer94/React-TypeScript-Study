import React, { forwardRef } from 'react';
import { CLASSNAME, ERROR_MESSAGE } from '../../common/constants/constants';

const ErrorMessage = forwardRef((props, forwardRef) => {
  let { message, loadingStatus, definition } = props;
  let template;

  if (loadingStatus) {
    template = <p className=''>{message}</p>;
    template = <p className={CLASSNAME.HIDE}>{message}</p>;
  } else {
    message = definition ? definition : ERROR_MESSAGE.EMPTY_INPUT;
  }

  return template;
});

export default ErrorMessage;
