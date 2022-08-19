import React, { useState } from 'react';
import { Flex } from '../@commons/Flex/Flex';
import RpsDisplayContainer from './RpsDisplayContainer';
import RpsResultContainer from './RpsResultContainer';

const RpcGame = () => {
  // 상태로 관리해야 할 것들.
  const [state, setState] = useState({ currentMove: '가위', gameResult: '', computerMove: '' });
  const { gameResult } = state;

  return (
    <>
      <Flex flexDirection='column'>
        <RpsDisplayContainer state={state} handleState={setState} />
        <RpsResultContainer gameResult={gameResult} />
      </Flex>
    </>
  );
};

export default RpcGame;
