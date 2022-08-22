import React from 'react';
import { CLASSNAME, ERROR_MESSAGE } from '../../common/constants/constants';
import { P } from '../../components';

type props = {
  message: string | boolean;
  loadingStatus: boolean;
  definition: boolean;
};

const ErrorMessage = (props: props) => {
  let { message, loadingStatus, definition } = props;
  let template;

  if (loadingStatus) {
    template = <P className='' content={message} style={undefined} />;
    template = <P className={CLASSNAME.HIDE} content={message} style={undefined} />;
  } else {
    message = definition ? definition : ERROR_MESSAGE.EMPTY_INPUT;
  }

  return template;
};

export default ErrorMessage;
