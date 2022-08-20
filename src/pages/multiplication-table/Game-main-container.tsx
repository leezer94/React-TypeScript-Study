import React, { useRef, useState } from 'react';
import { Form, P, Input, Button } from '../../components';
import { CLASSNAME, COLOR } from '../../common/constants/constants';
import { getRightEqualSignLetter, clearInputValue } from '../../utils/utils';
import { isValidNumberTypeInput } from '../../utils/validator';

type state = {
  firstNumber: number;
  secondNumber: number;
  sum: number;
};

type props = {
  state: state;
  updateStateNumbers: () => void;
  evaluation: boolean;
  handleEvaluation: (bool: boolean) => void;
};

const MultiplicationMainContainer = (props: props) => {
  const { state, updateStateNumbers, evaluation, handleEvaluation } = props;
  const [isNumberType, setIsNumberType] = useState(true);

  // Ref
  const multiplicationInput = useRef<HTMLInputElement>(null);
  const multiplicationForm = useRef<HTMLFormElement>(null);
  const notANumberMessage = useRef<HTMLParagraphElement>(null);
  const incorrectMessage = useRef<HTMLParagraphElement>(null);

  // handlers

  const { firstNumber, secondNumber, sum } = state;

  const onClickSubmitButton = (): void => {
    isNumberTypeInputValue(multiplicationInput);
    isValidNumberTypeInput(multiplicationInput, sum, Number) ? updateStateNumbers() : handleEvaluation(false);
    clearInputValue(multiplicationInput);
  };

  const isNumberTypeInputValue = (input: any): void => {
    isNaN(input.current.value) ? setIsNumberType(false) : setIsNumberType(true);
  };

  const handleKeyPressEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' ? handleNumberSubmit(e) : undefined;
  };

  const handleNumberSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onClickSubmitButton();
  };

  return (
    <>
      <Form ref={multiplicationForm} onSubmit={handleNumberSubmit}>
        <P title={`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`} className={''} style={{}}></P>
        <Input type={'text'} ref={multiplicationInput} onKeyPressEvent={handleKeyPressEvent} />
        <Button type={'submit'} title={'입력'}></Button>
        <P className={!evaluation ? '' : CLASSNAME.HIDE} ref={incorrectMessage} style={{ color: COLOR.RED }} title={`정답이 아닙니다.`} />
        <P className={!isNumberType ? '' : CLASSNAME.HIDE} ref={notANumberMessage} style={{ color: COLOR.RED }} title={'숫자만 입력이 가능합니다.'} />
      </Form>
    </>
  );
};

export default MultiplicationMainContainer;
