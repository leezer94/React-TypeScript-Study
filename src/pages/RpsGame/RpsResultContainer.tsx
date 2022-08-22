import { Flex, P } from '../../components';
import { RPSGAME } from '../../common/constants/constants';
import React from 'react';

type props = {
  gameResult: string;
  user: string | null;
  computer: string;
  score: number;
};

const RpsResultContainer = (props: props) => {
  let { gameResult, user, computer, score } = props;

  !user
    ? (user = null)
    : user === RPSGAME.ROCK
    ? (user = RPSGAME.EMOJIS.ROCK)
    : user === RPSGAME.SCISSORS
    ? (user = RPSGAME.EMOJIS.SCISSORS)
    : (user = RPSGAME.EMOJIS.PAPER);

  return (
    <Flex flexDirection='column'>
      <P content={`COMPUTER : ${!computer ? '현재 컴퓨터 손' : computer}   USER : ${!user ? '현재 유저 손' : user}`} className={undefined} style={undefined} />
      <P content={gameResult} style={{ color: 'red', fontSize: 20 }} className={undefined} />
      <P content={`현재점수 : ${score} 점`} className={undefined} style={undefined} />
    </Flex>
  );
};

export default RpsResultContainer;
