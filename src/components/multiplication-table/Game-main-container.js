import React, { useRef, useState } from 'react';
import { Form, P, Input, Button } from '..';
import { CLASSNAME, COLOR } from '../../common/constants/constants.js';
import { inputValidation, getRightEqualSignLetter, clearInputValue } from '../../utils/utils.js';

const MultiplicationMainContainer = (props) => {
  const { state, updateStateNumbers, evaluation, handleEvaluation } = props;
  const [isNumberType, setIsNumberType] = useState(true);

  // Ref
  const multiplicationInput = useRef();
  const multiplicationForm = useRef();
  const notANumberMessage = useRef();
  const incorrectMessage = useRef();

  // handlers

  const { firstNumber, secondNumber, sum } = state;

  const onClickSubmitButton = () => {
    isNumberTypeInputValue(multiplicationInput);
    inputValidation(multiplicationInput, sum, Number) ? updateStateNumbers() : handleEvaluation(false);
    clearInputValue(multiplicationInput);
  };

  const isNumberTypeInputValue = (input) => {
    isNaN(input.current.value) ? setIsNumberType(false) : setIsNumberType(true);
  };

  const handleKeyPressEvent = (e) => {
    return e.key === 'Enter' ? handleNumberSubmit(e) : undefined;
  };

  const handleNumberSubmit = (e) => {
    e.preventDefault();

    onClickSubmitButton();
  };

  return (
    <>
      <Form ref={multiplicationForm} onSubmit={handleNumberSubmit}>
        <P title={`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`}></P>
        <Input type={'text'} ref={multiplicationInput} onKeyPressEvent={handleKeyPressEvent} />
        <Button type={'submit'} title={'입력'}></Button>
        <P className={!evaluation ? undefined : CLASSNAME.HIDE} ref={incorrectMessage} style={{ color: COLOR.RED }} title={`정답이 아닙니다.`} />
        <P className={!isNumberType ? undefined : CLASSNAME.HIDE} ref={notANumberMessage} style={{ color: COLOR.RED }} title={'숫자만 입력이 가능합니다.'} />
      </Form>
    </>
  );
};

export default MultiplicationMainContainer;
