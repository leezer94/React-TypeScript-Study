import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { Button, Input, Form, P } from '..';
import { COLOR } from '../../common/constants/constants';
import { clearInputValue, compareTwoArrays, createEmptyArray, createRandomNumbers, isValidBaseballInput } from '../../utils/utils';
import ResultTemplate from './ResultTemplate';

const BaseballGame = () => {
  const [state, setState] = useState({ targetNumber: createRandomNumbers(), currentValue: undefined });
  const [tryLog, setTryLog] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const baseballGameForm = useRef();
  const baseballGameInput = useRef();

  const onClickSubmitButton = (input) => {
    if (!errorMessage(input).length) {
      setIsSubmitted(true);
      logInputValue(input);
    } else {
      setIsSubmitted(false);
    }

    clearInputValue(input);
  };

  const getCountTemplates = () => {
    const { targetNumber, currentValue } = state;
    const currentValueArray = String(currentValue).split('').map(Number);
    const targetNumberArray = Array.from(targetNumber[0]);

    const templates = createEmptyArray(tryLog.length);
    const strikeCount = compareTwoArrays(targetNumberArray, currentValueArray)[0];
    const ballCount = compareTwoArrays(targetNumberArray, currentValueArray)[1];

    if (currentValue) {
      templates.map((template, i) => {
        return (templates[i] = <ResultTemplate key={uuid()} index={i} strikeCount={strikeCount} ballCount={ballCount} tryLog={tryLog} />);
      });
    }

    return templates;
  };

  const logInputValue = (input) => {
    const inputValue = Number(input.current.value);

    setState({
      ...state,
      currentValue: inputValue,
    });
    setTryLog([...tryLog, inputValue]);
  };

  const onSubmitBaseballGame = (e) => {
    e.preventDefault();

    onClickSubmitButton(baseballGameInput);
    errorMessage(baseballGameInput);
  };

  const handleKeyPressEvent = (e) => {
    return e.key === 'Enter' ? onSubmitBaseballGame(e) : undefined;
  };

  const errorMessage = (input) => {
    const messages = Array.from(isValidBaseballInput(input));
    const templates = createEmptyArray(messages.length);

    messages.map((template, i) => {
      return (templates[i] = <P key={uuid()} style={{ color: COLOR.RED }} title={template} />);
    });

    return templates;
  };

  // if (state.currentValue) {
  //   console.log('current', state.currentValue);
  //   console.log('target', state.targetNumber);
  //   console.log('array', tryLog);
  // }

  return (
    <Form ref={baseballGameForm} onSubmit={onSubmitBaseballGame}>
      <P title={'랜덤으로 제공되는 4자리 숫자를 예측해 보세요.'} />
      <Input ref={baseballGameInput} onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} title={'입력'} />
      {isSubmitted ? <P /> : errorMessage(baseballGameInput)}
      {getCountTemplates()}
    </Form>
  );
};

export default BaseballGame;
