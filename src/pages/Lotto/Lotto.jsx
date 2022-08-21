import React, { useMemo, useState } from 'react';
import { createRandomNumbers } from '../../utils/mathUtils';
import { Flex, Modal } from '../../components';
import LottoButton from '../../components/@commons/Button/LottoButton/LottoButton';
import LottoGeneratorContainer from './LottoGenerator';

export const Lotto = () => {
  const [isClicked, setIsClicked] = useState(false);
  const createLottoNumbers = useMemo(() => Array.from(createRandomNumbers(7, 1, 45)), []);

  const handleClickLottoButton = () => setIsClicked(!isClicked);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Flex>
        {!isClicked ? (
          <Flex>
            <LottoButton content={'로또 번호 생성하기'} onClickButton={handleClickLottoButton}></LottoButton>
            <LottoButton onClickButton={openModal} content={'모달팝업'} />
          </Flex>
        ) : (
          <LottoGeneratorContainer createLottoNumbers={createLottoNumbers} onClickGoBackButton={handleClickLottoButton} />
        )}
        <Modal open={modalOpen} close={closeModal} header='Modal Heading'>
          모달창입니다. 같이 만들어봐요
        </Modal>
      </Flex>
    </>
  );
};
