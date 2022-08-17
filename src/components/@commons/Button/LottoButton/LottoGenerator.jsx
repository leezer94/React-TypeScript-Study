import React, { useState } from 'react';
import { createRandomNumbers } from '../../../../utils/mathUtils';
import { Flex } from '../../Flex/Flex';
import { P } from '../../P/P';
import LottoButton from './LottoButton';

const LottoGeneratorContainer = (props) => {
  const [state, setState] = useState({ lottoNumbers: Array.from(createRandomNumbers(7)) });
  const { onClickGoBackButton } = props;

  const { lottoNumbers } = state;

  const generateLottoNumbersEverySecond = (delay) => {
    let index = 0;

    const interval = setInterval(() => {
      if (index === lottoNumbers.length) {
        clearInterval(interval);
      } else {
        return <P title={lottoNumbers[index++]} />;
      }
    }, delay);
  };

  const createLottoTemplates = () => {
    generateLottoNumbersEverySecond(1000);
  };

  return (
    <Flex flexDirection='column'>
      <div>
        <p>로또 당첨번호</p>
        {createLottoTemplates()}
      </div>
      <LottoButton title={'처음으로 돌아가기'} onClickButton={onClickGoBackButton} style={{ color: 'brown' }}></LottoButton>
    </Flex>
  );
};

export default LottoGeneratorContainer;
