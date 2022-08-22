import React, { useMemo, useState } from 'react';
import { Flex, StyledButton } from '../../components';
import LottoGeneratorContainer from './LottoGenerator';
import { createRandomNumbers } from '../../utils';

export const Lotto = () => {
  const [isClicked, setIsClicked] = useState(false);
  const createLottoNumbers: any[] = useMemo(() => Array.from(createRandomNumbers(7, 1, 45)), []);

  const handleClickLottoButton = () => setIsClicked(!isClicked);

  return (
    <>
      <Flex>
        {!isClicked ? (
          <Flex>
            <StyledButton content={'로또 번호 생성하기'} onClickButton={handleClickLottoButton}></StyledButton>
          </Flex>
        ) : (
          <LottoGeneratorContainer createLottoNumbers={createLottoNumbers} onClickGoBackButton={handleClickLottoButton} />
        )}
      </Flex>
    </>
  );
};
