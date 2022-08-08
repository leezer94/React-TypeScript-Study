import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { Button, Input, Form, P } from '..';
import { COLOR } from '../../common/constants/constants';
import { createRandomNumbers } from '../../utils/mathUtils';
import { clearInputValue, compareTwoArrays, createEmptyArray } from '../../utils/utils';
import { getErrorMessages } from '../../utils/validator';
import ResultTemplate from './ResultTemplate';

const BaseballGame = () => {
  // 상태는 비동기 기억하기
  const [state, setState] = useState({ targetNumber: createRandomNumbers(), currentValue: undefined, tryLog: [] });
  // strikeCount, ballCount 배열로 보관
  const [gameCounts, setGameCounts] = useState([]);
  // 에러메시지 관련 상태
  const [errorMessage, setErrorMessage] = useState(null);

  // refs
  const baseballGameForm = useRef();
  const baseballGameInput = useRef();

  //handlers
  const onSubmitBaseballGame = (e) => {
    e.preventDefault();
    const errorMessageArray = Array.from(getErrorMessages(baseballGameInput));

    // 유효성 검사
    // 유효성검사 통과 후 시점에 필요한 데이터들이 준비가 되어있어야함

    if (!errorMessageArray.length) {
      updateGameCounts();
      updateInputValue(baseballGameInput);
    }

    setErrorMessage(errorMessageArray);
    clearInputValue(baseballGameInput);
  };

  const updateInputValue = (input) => {
    const inputValue = input.current.value;
    const { tryLog } = state;
    setState({
      ...state,
      currentValue: inputValue,
      tryLog: [...tryLog, inputValue],
    });
  };

  const updateGameCounts = () => {
    const currentValue = baseballGameInput.current.value;
    const { targetNumber } = state;
    const [strikeCount, ballCount] = compareTwoArrays(targetNumber, currentValue);

    setGameCounts([...gameCounts, { strikeCount, ballCount }]);
  };

  const handleKeyPressEvent = (e) => {
    return e.key === 'Enter' ? onSubmitBaseballGame(e) : undefined;
  };

  const createErrorMessages = (errorMessage) => {
    const templates = createEmptyArray(errorMessage.length);

    errorMessage.map((template, i) => {
      return (templates[i] = <P key={uuid()} style={{ color: COLOR.RED }} title={template} />);
    });

    return templates;
  };

  const createCountTemplates = () => {
    // Here needs to be refactored

    const templates = createEmptyArray(gameCounts.length);
    const { tryLog } = state;

    gameCounts.map((game, i) => {
      const { strikeCount, ballCount } = game;

      return (templates[i] = <ResultTemplate key={uuid()} index={i} strikeCount={strikeCount} ballCount={ballCount} tryLog={tryLog} />);
    });

    return templates;
  };

  const { currentValue } = state;

  return (
    <Form ref={baseballGameForm} onSubmit={onSubmitBaseballGame}>
      <P title={'랜덤으로 제공되는 4자리 숫자를 예측해 보세요.'} />
      <Input ref={baseballGameInput} onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} title={'입력'} />
      {!errorMessage ? null : createErrorMessages(errorMessage)}
      {currentValue ? createCountTemplates() : null}

      {/* needs to be refactored like underneath code */}
      {/* {currentValue ? .map(( {1,2,3,4,5} ,index) => <ResultTemplate 1 2 3 4 5/>)} */}
    </Form>
  );
};

export default BaseballGame;
