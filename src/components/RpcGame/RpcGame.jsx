import React, { useState } from 'react';
import { Flex } from '../@commons/Flex/Flex';
import RpsDisplayContainer from './RcpDisplayContainer';
import RpsResultContainer from './RcpResultContainer';

const RpcGame = () => {
  // 상태로 관리해야 할 것들.
  const [state, setState] = useState({ currentMove: '가위' });

  const { currentMove } = state;

  return (
    <>
      <Flex flexDirection='column'>
        <RpsDisplayContainer currentMove={currentMove} handleCurrentMove={setState} />
        <RpsResultContainer />
      </Flex>
    </>
  );
};

export default RpcGame;
