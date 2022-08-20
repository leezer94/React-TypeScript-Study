import React from 'react';
import DigitButton from '../../components/@commons/Button/DigitButton/DigitButton';
import { P } from '../../components';
import { createEmptyArray } from '../../utils/utils';

type props = {
  state: state;
  setState: setState;
};

type setState = any;

type state = {
  firstNumber: number;
  secondNumber: number;
  sum: number;
};

const DigitButtonContainer = ({ state, setState }: props) => {
  const handleFirstNumber = (digit: number) => {
    let { firstNumber, secondNumber } = state;

    firstNumber = Number(digit);

    setState({
      ...state,
      firstNumber,
      sum: firstNumber * secondNumber,
    });
  };

  const buttonTemplates = () => {
    const templates: any[] = createEmptyArray(9);
    templates.map((el, i) => {
      return (templates[i] = <DigitButton key={i} digit={i + 1} updateNumber={handleFirstNumber} />);
    });

    return templates;
  };

  return (
    <div>
      <P title={'구구단 몇단?'} className={''} style={{}} />
      {buttonTemplates()}
    </div>
  );
};

export default DigitButtonContainer;