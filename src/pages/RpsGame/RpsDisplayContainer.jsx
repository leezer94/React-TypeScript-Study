import { useCallback, useEffect, useRef, useState } from 'react';
import { Form, Button, P } from '../../components';
import { RPSGAME } from '../../common/constants/constants';

const RpsDisplayContainer = (props) => {
  const { state, handleState, setScore } = props;
  let { currentMove } = state;

  const images = ['✌️', '✊🏻', '🖐🏿'];
  const [image, setImage] = useState(0);

  const [isPlaying, setIsPlaying] = useState(true);

  const interval = useRef();

  const printCurrentMove = () => {
    let currentEmoji;

    if (currentMove === RPSGAME.SCISSORS) {
      currentEmoji = RPSGAME.EMOJIS.SCISSORS;
    } else if (currentMove === RPSGAME.ROCK) {
      currentEmoji = RPSGAME.EMOJIS.ROCK;
    } else if (currentMove === RPSGAME.PAPER) {
      currentEmoji = RPSGAME.EMOJIS.PAPER;
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
    interval.current = setInterval(handleHandImage, RPSGAME.DELAY_100);

    return () => {
      clearInterval(interval.current);
    };
  }, [handleHandImage]);

  const handleGameResult = (currentMove, computerMove) => {
    let result = '';

    if (computerMove === images[0]) {
      if (currentMove === RPSGAME.ROCK) {
        result = RPSGAME.COMPUTER_WIN;
      } else if (currentMove === RPSGAME.SCISSORS) {
        result = RPSGAME.TIE;
      } else if (currentMove === RPSGAME.PAPER) {
        result = RPSGAME.USER_WIN;
      }
    } else if (computerMove === images[1]) {
      if (currentMove === RPSGAME.ROCK) {
        result = RPSGAME.TIE;
      } else if (currentMove === RPSGAME.SCISSORS) {
        result = RPSGAME.COMPUTER_WIN;
      } else if (currentMove === RPSGAME.PAPER) {
        result = RPSGAME.USER_WIN;
      }
    } else if (computerMove === images[2]) {
      if (currentMove === RPSGAME.ROCK) {
        result = RPSGAME.COMPUTER_WIN;
      } else if (currentMove === RPSGAME.SCISSORS) {
        result = RPSGAME.USER_WIN;
      } else if (currentMove === RPSGAME.PAPER) {
        result = RPSGAME.TIE;
      }
    }

    if (result === RPSGAME.COMPUTER_WIN) {
      setScore((score) => score - RPSGAME.THRESHOLD_POINT);
    } else if (result === RPSGAME.USER_WIN) {
      setScore((score) => score + RPSGAME.THRESHOLD_POINT);
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

    interval.current = setInterval(handleHandImage, RPSGAME.DELAY_500);
  };

  const createRPSButtons = () => {
    const movementArray = [RPSGAME.SCISSORS, RPSGAME.ROCK, RPSGAME.PAPER];

    return movementArray.map((el, i) => {
      return <Button type='submit' key={i} content={el} onClickEvent={onClickHandButton} />;
    });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <P content={'Computer'} style={{ color: 'blue', fontWeight: 600 }} />
      <P content={images[image]} style={{ fontSize: 80, margin: 10, padding: 0 }} />
      {createRPSButtons()}
      <P content={'User'} style={{ color: 'red', fontWeight: 600 }} />
      <P content={!currentMove ? '✌️' : printCurrentMove()} style={{ fontSize: 80, margin: 10, padding: 0 }} />
    </Form>
  );
};

export default RpsDisplayContainer;
