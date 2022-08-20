import React, { useMemo, useState } from 'react';
import { createRandomNumbers } from '../../utils/mathUtils';
import { Flex } from '../../components';
import LottoButton from '../../components/@commons/Button/LottoButton/LottoButton';
import LottoGeneratorContainer from './LottoGenerator';

const Lotto = () => {
  const [isClicked, setIsClicked] = useState(false);
  const createLottoNumbers = useMemo(() => Array.from(createRandomNumbers(7, 1, 45)), []);

  const handleClickLottoButton = () => setIsClicked(!isClicked);

  return (
    <>
      <Flex>
        {!isClicked ? (
          <Flex>
            <LottoButton title={'로또 번호 생성하기'} onClickButton={handleClickLottoButton}></LottoButton>
          </Flex>
        ) : (
          <LottoGeneratorContainer createLottoNumbers={createLottoNumbers} onClickGoBackButton={handleClickLottoButton} />
        )}
      </Flex>
    </>
  );
};

export default Lotto;
