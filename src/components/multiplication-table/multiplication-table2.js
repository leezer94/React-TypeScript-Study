import React, { useRef, useState } from 'react';
import { CLASSNAME, COLOR } from '../../common/constants/constants.js';
import {
  inputValidation,
  removeClassList,
  addClassList,
  generateRandomNumber,
  getRightEqualSignLetter,
  createEmptyArray,
  clearInputValue,
} from '../../utils/utils.js';
import DigitButton from '../@commons/Button/DigitButton';
import uuid from 'react-uuid';

const Multiplication_table2 = () => {
  const [state, setState] = useState({ firstNumber: 9, secondNumber: 2, sum: 9 * 2, evaluation: true });

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

  const handleNotANumberMessage = (input, target) => {
    const isNumberTypeInputValue = isNaN(input.current.value);

    return isNumberTypeInputValue ? removeClassList(target, CLASSNAME.HIDE) : addClassList(target, CLASSNAME.HIDE);
  };

  const buttonTemplates = () => {
    const templates = createEmptyArray(9);

    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={uuid()} digit={i + 1} updateFirstNumber={handleFirstNumber} />);
    });

    return templates;
  };

  const { firstNumber, secondNumber, sum, evaluation } = state;

  return (
    <div className='multiplication_table-container'>
      <div>
        <p>구구단 몇 단 ?</p>
        {buttonTemplates()}
      </div>
      <p>{`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`}</p>
      <input ref={multiplicationInput} type='text'></input>
      <button
        type='button'
        onClick={() => {
          handleNotANumberMessage(multiplicationInput, notANumberMessage);
          inputValidation(multiplicationInput, sum, Number) ? updateStateNumbers() : setState({ ...state, evaluation: false });
          clearInputValue(multiplicationInput);
        }}
      >
        입력
      </button>
      <p className={!evaluation ? '' : CLASSNAME.HIDE} ref={incorrectMessage} style={{ color: COLOR.RED }}>
        정답이 아닙니다.
      </p>
      <p className={CLASSNAME.HIDE} ref={notANumberMessage} style={{ color: COLOR.RED }}>
        숫자만 입력이 가능합니다.
      </p>
    </div>
  );
};

export default Multiplication_table2;
