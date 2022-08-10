import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { Button, Input, Form, P } from '..';
import { COLOR } from '../../common/constants/constants';
import { createRandomNumbers } from '../../utils/mathUtils';
import { clearInputValue, compareTwoArrays, createEmptyArray } from '../../utils/utils';
import { getErrorMessages } from '../../utils/validator';
import ResultTemplate from './ResultTemplate';
import DigitButton from '../@commons/Button/DigitButton';

const BaseballGame = () => {
  const [lengthOfArray, setLengthOfArray] = useState(4);
  // 상태는 비동기 기억하기
  const [state, setState] = useState({ targetNumber: createRandomNumbers(lengthOfArray), currentValue: null, tryLog: [] });
  // strikeCount, ballCount 배열로 보관
  const [gameCounts, setGameCounts] = useState([]);
  // 에러메시지 관련 상태
  const [errorMessage, setErrorMessage] = useState(null);

  // refs
  const baseballGameForm = useRef();
  const baseballGameInput = useRef();

  //handlers
  const resetState = (message) => {
    alert(message);

    setState({
      targetNumber: createRandomNumbers(),
      currentValue: null,
      tryLog: [],
    });

    setGameCounts([]);
    setErrorMessage(null);
  };

  const onSubmitBaseballGame = (e) => {
    e.preventDefault();

    const errorMessageArray = Array.from(getErrorMessages(baseballGameInput, tryLog, lengthOfArray));
    const tryLogContainsCurrentValue = tryLog.includes(baseballGameInput.current.value);

    if (!errorMessageArray.length && !tryLogContainsCurrentValue) {
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
    const answer = Array.from(targetNumber).join('');

    setGameCounts([...gameCounts, { strikeCount, ballCount }]);

    if (strikeCount === lengthOfArray) resetState('정답입니다! 게임을 리셋 하시겠습니까?');
    if (tryLog.length === 10) resetState(`10회 시도에 도달하였습니다. 정답은 : ${answer} 입니다.`);
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
    const { tryLog } = state;
    const templates = createEmptyArray(gameCounts.length);

    gameCounts.map((game, i) => {
      const { strikeCount, ballCount } = game;

      return (templates[i] = <ResultTemplate key={uuid()} index={i} strikeCount={strikeCount} ballCount={ballCount} tryLog={tryLog} />);
    });

    return templates;
  };

  const updateLengthOfArray = (number) => {
    setLengthOfArray(number);

    setState({
      ...state,
      targetNumber: createRandomNumbers(number),
    });
  };

  const buttonTemplates = () => {
    const templates = createEmptyArray(7);
    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={uuid()} digit={i + 3} updateNumber={updateLengthOfArray} />);
    });

    return templates;
  };

  const { currentValue, tryLog } = state;

  return (
    <Form ref={baseballGameForm} onSubmit={onSubmitBaseballGame}>
      {currentValue ? null : <P title={`자리수를 선택해 주세요`} />}
      {currentValue ? null : buttonTemplates()}
      <P title={`랜덤으로 제공되는 ${lengthOfArray}자리 숫자를 예측해 보세요.`} />
      <Input ref={baseballGameInput} onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} title={'입력'} />
      {!errorMessage ? null : createErrorMessages(errorMessage)}
      {console.log(state.targetNumber)}
      {currentValue ? createCountTemplates() : null}
    </Form>
  );
};

export default BaseballGame;
