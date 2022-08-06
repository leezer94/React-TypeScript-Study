import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';
import { CLASSNAME, COLOR } from '../../common/constants/constants.js';
import { inputValidation, generateRandomNumber, getRightEqualSignLetter, createEmptyArray, clearInputValue } from '../../utils/utils.js';
import Button from '../@commons/Button/Button';
import Input from '../@commons/Input/Input.js';
import P from '../@commons/P/P.js';
import DigitButton from '../@commons/Button/DigitButton';

const Multiplication_table2 = () => {
  const [state, setState] = useState({ firstNumber: 9, secondNumber: 2, sum: 9 * 2 });
  const [evaluation, setEvaluation] = useState(true);
  const [isNumberType, setIsNumberType] = useState(true);

  // Ref
  const multiplicationInput = useRef();
  const notANumberMessage = useRef();
  const incorrectMessage = useRef();

  // Handlers

  const updateStateNumbers = () => {
    let { firstNumber, secondNumber } = state;

    firstNumber = generateRandomNumber(1, 9);
    secondNumber = generateRandomNumber(1, 9);

    setState({ ...state, firstNumber, secondNumber, sum: firstNumber * secondNumber });
    setEvaluation(true);
  };

  const handleFirstNumber = (digit) => {
    let { firstNumber } = state;

    firstNumber = Number(digit);

    setState({
      ...state,
      firstNumber,
      sum: firstNumber * secondNumber,
    });
  };

  const isNumberTypeInputValue = (input) => {
    isNaN(input.current.value) ? setIsNumberType(false) : setIsNumberType(true);
  };

  const buttonTemplates = () => {
    const templates = createEmptyArray(9);

    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={uuid()} digit={i + 1} updateFirstNumber={handleFirstNumber} />);
    });

    return templates;
  };

  const onClickSubmitButton = () => {
    isNumberTypeInputValue(multiplicationInput);
    inputValidation(multiplicationInput, sum, Number) ? updateStateNumbers() : setEvaluation(false);

    clearInputValue(multiplicationInput);
  };

  const { firstNumber, secondNumber, sum } = state;

  return (
    <div className='multiplication_table-container'>
      <div>
        <P title={'구구단 몇단?'} />
        {buttonTemplates()}
      </div>
      <P title={`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`}></P>
      <Input type={'text'} ref={multiplicationInput} />
      <Button onClickEvent={onClickSubmitButton} title={'입력'}></Button>
      <P className={!evaluation ? '' : CLASSNAME.HIDE} ref={incorrectMessage} style={{ color: COLOR.RED }} title={`정답이 아닙니다.`} />
      <P className={!isNumberType ? '' : CLASSNAME.HIDE} ref={notANumberMessage} style={{ color: COLOR.RED }} title={'숫자만 입력이 가능합니다.'} />
    </div>
  );
};

export default Multiplication_table2;
