import React from 'react';
import { P, Button } from '../../components';

type props = {
  content: string;
  printWinner: () => void;
};

export const TicTacToeGameResult = (props: props) => {
  const { content, printWinner } = props;

  return (
    <>
      <P content={content} className={undefined} style={undefined} />
      <Button onClickEvent={printWinner} content={'게임 다시 시작하기'} className={''} type={undefined} />
    </>
  );
};
