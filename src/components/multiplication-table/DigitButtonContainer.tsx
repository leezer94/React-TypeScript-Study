import React from 'react';
import uuid from 'react-uuid';
import DigitButton from '../@commons/Button/DigitButton/DigitButton';
import { P } from '..';
import { createEmptyArray } from '../../utils/utils';

const DigitButtonContainer = ({ state, setState }) => {
  const handleFirstNumber = (digit) => {
    let { firstNumber, secondNumber } = state;

    firstNumber = Number(digit);

    setState({
      ...state,
      firstNumber,
      sum: firstNumber * secondNumber,
    });
  };

  const buttonTemplates = () => {
    const templates = createEmptyArray(9);
    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={uuid()} digit={i + 1} updateNumber={handleFirstNumber} />);
    });

    return templates;
  };

  return (
    <div>
      <P title={'구구단 몇단?'} />
      {buttonTemplates()}
    </div>
  );
};

export default DigitButtonContainer;
