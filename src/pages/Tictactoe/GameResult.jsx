import { P, Button } from '../../components';

export const TicTacToeGameResult = (props) => {
  const { content, printWinner } = props;

  return (
    <>
      <P content={content} />
      <Button onClickEvent={printWinner} content={'게임 다시 시작하기'} />
    </>
  );
};
