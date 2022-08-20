import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Button, P } from '../../components';

const RpsDisplayContainer = (props) => {
  const { state, handleState, setScore } = props;
  let { currentMove } = state;

  const images = ['✌️', '✊🏻', '🖐🏿'];
  const [image, setImage] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  const interval = useRef();

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

  const handleHandImage = useCallback(() => {
    if (image === images.length - 1) {
      setImage(0);
    } else {
      setImage(image + 1);
    }
  }, [image, images.length]);

  useEffect(() => {
    interval.current = setInterval(handleHandImage, 100);

    return () => {
      clearInterval(interval.current);
    };
  }, [handleHandImage]);

  const handleGameResult = (currentMove, computerMove) => {
    let result = '';

    if (computerMove === images[0]) {
      if (currentMove === '바위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '가위') {
        result = '비겼습니다.';
      } else if (currentMove === '보') {
        result = '유저 승리';
      }
    } else if (computerMove === images[1]) {
      if (currentMove === '바위') {
        result = '비겼습니다.';
      } else if (currentMove === '가위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '보') {
        result = '유저 승리';
      }
    } else if (computerMove === images[2]) {
      if (currentMove === '바위') {
        result = '컴퓨터 승리';
      } else if (currentMove === '가위') {
        result = '유저 승리';
      } else if (currentMove === '보') {
        result = '비겼습니다';
      }
    }

    if (result === '컴퓨터 승리') {
      setScore((score) => score - 10);
    } else if (result === '유저 승리') {
      setScore((score) => score + 10);
    }

    return result;
  };

  const onClickHandButton = (e) => {
    clearInterval(interval.current);
    setIsPlaying(!isPlaying);

    handleState({
      ...state,
      currentMove: e.target.textContent,
      computerMove: images[image],
      gameResult: handleGameResult(e.target.textContent, images[image]),
    });

    interval.current = setInterval(handleHandImage, 500);
  };

  const createRPSButtons = () => {
    const movementArray = ['가위', '바위', '보'];

    return movementArray.map((el, i) => {
      return <Button type='submit' key={i} title={el} onClickEvent={onClickHandButton} />;
    });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <P title={'Computer'} style={{ color: 'blue', fontWeight: 600 }} />
      <P title={images[image]} style={{ fontSize: 80, margin: 10, padding: 0 }} />
      {createRPSButtons()}
      <P title={'User'} style={{ color: 'red', fontWeight: 600 }} />
      <P title={!currentMove ? '✌️' : printCurrentMove()} style={{ fontSize: 80, margin: 10, padding: 0 }} />
    </Form>
  );
};

export default RpsDisplayContainer;
