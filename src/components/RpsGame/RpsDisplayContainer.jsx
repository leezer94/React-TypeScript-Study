import React, { useEffect, useRef, useState } from 'react';
import { Form } from '../@commons/Form/Form';
import { Button } from '../@commons/Button/Button';
import { P } from '../@commons/P/P';
import { generateRandomNumber } from '../../utils/mathUtils';

const RpsDisplayContainer = (props) => {
  const { state, handleState } = props;
  const { currentMove, computerMove } = state;
  const [isPlaying, setIsPlaying] = useState(false);
  const form = useRef();

  const printCurrentMove = () => {
    let currentEmoji;

    if (currentMove === '가위') {
      currentEmoji = '✌️';
    } else if (currentMove === '바위') {
      currentEmoji = '✊🏻';
    } else if (currentMove === '보') {
      currentEmoji = '🖐🏿';
    }

    return currentEmoji;
  };

  const updateGameResult = () => {
    handleState({
      ...state,
      gameResult: handleGameResult(),
    });
  };

  const handleGameResult = () => {
    let result = '';

    if (computerMove === '가위') {
      if (currentMove === '바위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '가위') {
        result = '비겼습니다.';
      } else if (currentMove === '보') {
        result = '유저 승리';
      }
    } else if (computerMove === '바위') {
      if (currentMove === '바위') {
        result = '비겼습니다.';
      } else if (currentMove === '가위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '보') {
        result = '유저 승리';
      }
    } else if (computerMove === '보') {
      if (currentMove === '바위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '가위') {
        result = '유저 승리';
      } else if (currentMove === '보') {
        result = '비겼습니다';
      }
    }

    return result;
  };

  const onClickHandButton = (e) => {
    handleState({
      ...state,
      currentMove: e.target.textContent,
    });

    setIsPlaying(!isPlaying);
  };

  const handlePrintRandomHand = () => {
    const array = ['✌️', '✊🏻', '🖐🏿'];

    let index = 0;

    function count(start, end) {
      if (start === end) {
        start = 0;
      }

      start += 1;

      return start;
    }

    console.log(array[count(0, 3)]);

    if (index === array.length) index = 0;
  };

  const createRPSButtons = () => {
    const movementArray = ['가위', '바위', '보'];

    return movementArray.map((el, i) => {
      return <Button type='submit' key={i} title={el} onClickEvent={onClickHandButton} />;
    });
  };

  return (
    <Form ref={form} onSubmit={(e) => e.preventDefault()}>
      <P title={printCurrentMove()} />
      {createRPSButtons()}
      <P title={printCurrentMove()} style={{ fontSize: 80, margin: 10, padding: 0 }} />
      {console.log(isPlaying)}
    </Form>
  );
};

export default RpsDisplayContainer;
