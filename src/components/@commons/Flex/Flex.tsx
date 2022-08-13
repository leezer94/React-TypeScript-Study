import React from 'react';

import { FlexBox } from './Flex.style';

type props = any;

export const Flex = (props: props) => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};
