import React from 'react';

import { FlexBox } from './Flex.style';

const Flex = (props) => {
  const { children, ...rest } = props;

  return <FlexBox {...rest}>{children}</FlexBox>;
};

export default Flex;
