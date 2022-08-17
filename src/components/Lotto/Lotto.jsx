import React, { useState } from 'react';
import { Flex } from '..';
import LottoButton from '../@commons/Button/LottoButton/LottoButton';
import LottoGeneratorContainer from './LottoGenerator';

const Lotto = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClickLottoButton = () => setIsClicked(!isClicked);

  return (
    <>
      <Flex>
        {!isClicked ? (
          <LottoButton title={'로또 번호 생성하기'} onClickButton={handleClickLottoButton}></LottoButton>
        ) : (
          <LottoGeneratorContainer onClickGoBackButton={handleClickLottoButton} />
        )}
      </Flex>
    </>
  );
};

export default Lotto;
