import React from 'react';
import { Flex, P } from '../../components';

const RpsResultContainer = (props) => {
  let { gameResult, user, computer, score } = props;

  !user ? (user = '') : user === '바위' ? (user = '✊🏻') : user === '가위' ? (user = '✌️') : (user = '🖐🏿');

  return (
    <Flex flexDirection='column'>
      <P title={`USER : ${!user ? '현재 유저 손' : user}, COMPUTER : ${!computer ? '현재 컴퓨터 손' : computer}`} />
      <P title={gameResult} style={{ color: 'red', fontSize: 20 }} />
      <p>현재점수 : {score} 점</p>
    </Flex>
  );
};

export default RpsResultContainer;
