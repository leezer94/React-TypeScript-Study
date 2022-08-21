import React, { useRef, useState } from 'react';
import { Button, Input, Form, P } from '../../components';
import { COLOR } from '../../common/constants/constants';
import { createRandomNumbers } from '../../utils/mathUtils';
import { clearInputValue, compareTwoArrays, createEmptyArray } from '../../utils/utils';
import { getErrorMessages } from '../../utils/validator';
import ResultTemplate from './ResultTemplate';
import DigitButton from '../../components/@commons/Button/DigitButton/DigitButton';

export const BaseballGame = () => {
  const [lengthOfArray, setLengthOfArray] = useState<any>(4);
  // 상태는 비동기 기억하기
  const [state, setState] = useState<any | object>({ targetNumber: createRandomNumbers(lengthOfArray), currentValue: null, tryLog: [] });
  // strikeCount, ballCount 배열로 보관
  const [gameCounts, setGameCounts] = useState<any[]>([]);
  // 에러메시지 관련 상태
  const [errorMessage, setErrorMessage] = useState<any>(null);

  // refs
  const baseballGameForm = useRef<HTMLFormElement>(null);
  const baseballGameInput = useRef<any>(null);

  const initialState = {
    targetNumber: createRandomNumbers(lengthOfArray),
    currentValue: null,
    tryLog: [],
  };

  //handlers
  const resetState = (message: string) => {
    alert(message);
    setState(initialState);
    setGameCounts([]);
    setErrorMessage(null);
  };

  const onSubmitBaseballGame = (e: React.FormEvent) => {
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

  const updateInputValue = (input: any) => {
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

  const handleResetGame = () => {
    const { targetNumber } = state;
    const strikeCount = compareTwoArrays(targetNumber, currentValue)[0];
    const answer = Array.from(targetNumber).join('');

    if (strikeCount === lengthOfArray) resetState('정답입니다! 게임을 리셋 하시겠습니까?');
    if (tryLog.length === 10) resetState(`10회 시도에 도달하였습니다. 정답은 : ${answer} 입니다.`);
  };

  const handleKeyPressEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' ? onSubmitBaseballGame(e) : undefined;
  };

  const createErrorMessages = (errorMessage: []) => {
    const templates: any[] = createEmptyArray(errorMessage.length);

    errorMessage.map((template: any, i) => {
      return (templates[i] = <P key={i} style={{ color: COLOR.RED }} content={template} className={''} />);
    });

    return templates;
  };

  const createCountTemplates = () => {
    const { tryLog } = state;
    const templates: any[] = createEmptyArray(gameCounts.length);

    gameCounts.map((game, i) => {
      const { strikeCount, ballCount } = game;

      return (templates[i] = <ResultTemplate key={i} index={i} strikeCount={strikeCount} ballCount={ballCount} tryLog={tryLog} />);
    });

    return templates;
  };

  const updateLengthOfArray = (number: number) => {
    setLengthOfArray(number);

    setState({
      ...state,
      targetNumber: createRandomNumbers(number),
    });
  };

  const buttonTemplates = () => {
    const templates: any[] = createEmptyArray(7);

    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={i} digit={i + 3} updateNumber={updateLengthOfArray} />);
    });

    return templates;
  };

  const { currentValue, tryLog } = state;

  return (
    <Form ref={baseballGameForm} onSubmit={onSubmitBaseballGame}>
      {currentValue ? null : <P content={`자리수를 선택해 주세요`} className={''} style={undefined} />}
      {currentValue ? null : buttonTemplates()}
      <P content={`랜덤으로 제공되는 ${lengthOfArray}자리 숫자를 예측해 보세요.`} className={''} style={undefined} />
      <Input ref={baseballGameInput} onKeyPressEvent={handleKeyPressEvent} type={''} />
      <Button type={'submit'} content={'입력'} />
      {!errorMessage ? null : createErrorMessages(errorMessage)}
      {currentValue ? createCountTemplates() : null}
      {currentValue ? handleResetGame() : null}
    </Form>
  );
};
