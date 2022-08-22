import { Flex, P } from '../../components';
import { RPSGAME } from '../../common/constants/constants';

const RpsResultContainer = (props) => {
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
      <P content={`COMPUTER : ${!computer ? '현재 컴퓨터 손' : computer}   USER : ${!user ? '현재 유저 손' : user}`} />
      <P content={gameResult} style={{ color: 'red', fontSize: 20 }} />
      <p>현재점수 : {score} 점</p>
    </Flex>
  );
};

export default RpsResultContainer;
