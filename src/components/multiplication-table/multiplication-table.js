import React, { useState } from 'react';
import { generateRandomNumber } from '../../utils/utils.js';
import DigitButtonContainer from './DigitButtonContainer.js';
import MultiplicationMainContainer from './Game-main-container.js';

//TODO 아토믹 패턴 ?? 컴포넌트화 기준 나누기?? 타입스크립트 적용?? styledComponent 적용 ?

const Multiplication_table = () => {
  const [state, setState] = useState({ firstNumber: 9, secondNumber: 2, sum: 9 * 2 });
  const [evaluation, setEvaluation] = useState(true);

  // Handlers

  const updateStateNumbers = () => {
    let { firstNumber, secondNumber } = state;

    firstNumber = generateRandomNumber(1, 9);
    secondNumber = generateRandomNumber(1, 9);

    setState({ firstNumber, secondNumber, sum: firstNumber * secondNumber });
    setEvaluation(true);
  };

  const handleEvaluation = (boolean) => {
    setEvaluation(boolean);
  };

  return (
    <div className='multiplication_table-container'>
      <DigitButtonContainer state={state} setState={setState} />
      <MultiplicationMainContainer state={state} updateStateNumbers={updateStateNumbers} evaluation={evaluation} handleEvaluation={handleEvaluation} />
    </div>
  );
};

export default Multiplication_table;
