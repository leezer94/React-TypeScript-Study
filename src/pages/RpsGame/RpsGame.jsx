import React, { useState } from 'react';
import { Flex } from '../../components';
import RpsDisplayContainer from './RpsDisplayContainer';
import RpsResultContainer from './RpsResultContainer';

const RpcGame = () => {
  // 상태로 관리해야 할 것들.
  const [state, setState] = useState({ currentMove: '', computerMove: '', gameResult: '' });
  const [score, setScore] = useState(0);
  const { gameResult, currentMove, computerMove } = state;

  return (
    <>
      <Flex flexDirection='column'>
        <RpsDisplayContainer state={state} handleState={setState} score={score} setScore={setScore} />
        <RpsResultContainer gameResult={gameResult} user={currentMove} computer={computerMove} score={score} />
      </Flex>
    </>
  );
};

export default RpcGame;
