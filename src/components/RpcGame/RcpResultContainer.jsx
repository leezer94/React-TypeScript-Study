import React from 'react';
import { Flex } from '../@commons/Flex/Flex';

const RpsResultContainer = () => {
  return (
    <Flex flexDirection='column'>
      <p>결과 메시지</p>
      <p>현재점수 : 10 점</p>
    </Flex>
  );
};

export default RpsResultContainer;
