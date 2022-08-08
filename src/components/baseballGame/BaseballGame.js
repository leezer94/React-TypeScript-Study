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
  const [state, setState] = useState({ targetNumber: createRandomNumbers(), currentValue: undefined });
  // strikeCount, ballCount 배열로 보관
  const [gameCounts, setGameCounts] = useState([]);
  // 입력한 숫자 로그 저장
  const [tryLog, setTryLog] = useState('');
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
      const currentValue = baseballGameInput.current.value;
      const { targetNumber } = state;

      const [strikeCount, ballCount] = compareTwoArrays(targetNumber, currentValue);

      console.log(Array.from(targetNumber));
      console.log('strike', strikeCount);
      console.log('ball', ballCount);

      setGameCounts([...gameCounts, { strikeCount, ballCount }]);
    }

    setErrorMessage(errorMessageArray);
    clearInputValue(baseballGameInput);

    // useEffect(() => {
    //   first;
    //   // 컴포넌트의 생명주기에 따라서 동작
    //   //third 만약 빈 배열일시 첫번째 로 마운트되고 나서 실행

    //   setState()

    //   return () => {
    //     second;
    //     // clean up function

    //     // 컴포넌트가 사라지는 시점에 실행
    //   };
    // }, [strikeCount]
    // // 의존성 배열 안의 상태로 추적하고 싶은 값을 넣어논다.
    // );
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

  const handleUserInputValue = (input) => {
    const inputValue = Number(input.current.value);

    setState({
      ...state,
      currentValue: inputValue,
    });

    setTryLog([...tryLog, inputValue]);
  };

  const createCountTemplates = () => {
    // refactor
    const { targetNumber, currentValue } = state;

    const currentValueArray = String(currentValue).split('').map(Number);
    // Set -> 배열로 변환
    const targetNumberArray = Array.from(targetNumber);
    const templates = createEmptyArray(tryLog.length);

    const [strikeCount, ballCount] = compareTwoArrays(targetNumberArray, currentValueArray);

    // 배열 을 만들어주고 , 그 배열을 렌더링한다.
    // 배열이 가지고 있는 정보 ??
    // 데이터랑 UI를 분리

    if (currentValue) {
      templates.map((data, i) => {
        return (templates[i] = <ResultTemplate key={uuid()} index={i} strikeCount={strikeCount} ballCount={ballCount} tryLog={tryLog} />);
      });
    }

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

      {/* // 파라미터 내에서 분해 */}
      {/* {currentValue ? datas.map(( {1,2,3,4,5} ,index) => <ResultTemplate 1 2 3 4 5/>)} */}
      {console.log(gameCounts)}
    </Form>
  );
};

export default BaseballGame;
