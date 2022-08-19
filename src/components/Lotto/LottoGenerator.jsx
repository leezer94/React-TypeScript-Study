import React, { useEffect, useRef, useState } from 'react';
import { Flex, P } from '..';
import LottoButton from '../@commons/Button/LottoButton/LottoButton';

const LottoGeneratorContainer = (props) => {
  const { onClickGoBackButton, createLottoNumbers } = props;

  // when button is clicked 7 lottoNumbers need to be rendered on the page
  const [lottoNumbers, setLottoNumbers] = useState(createLottoNumbers);
  const [winningNumbers, setWinningNumbers] = useState([]);
  const timeOuts = useRef([]);

  useEffect(() => {
    lottoNumbers.map((lottoNumber, i) => (timeOuts.current[i] = setTimeout(() => setWinningNumbers((prev) => [...prev, lottoNumber]), (i + 1) * 1000)));

    return () => timeOuts.current.map((item) => clearTimeout(item));
  }, [timeOuts.current]);

  const createLottoElement = () =>
    winningNumbers.map((el, i) => {
      if (String(el).length === 1) el = '0' + String(el);

      if (i === 6) {
        return (
          <Flex key={i} flexDirection='row'>
            <P title={'보너스'} style={{ paddingRight: 30, color: 'red' }} />
            <P title={el} style={{ marginRight: 20, padding: 20, border: '1px solid black', borderRadius: 50 }} />
          </Flex>
        );
      }
      return <P key={i} title={el} style={{ marginRight: 20, padding: 20, border: '1px solid black', borderRadius: 50 }} />;
    });

  return (
    <Flex flexDirection='column'>
      <div>
        <p>로또 당첨번호</p>
        <Flex>{createLottoElement()}</Flex>
      </div>
      <Flex>
        <LottoButton title={'처음으로 돌아가기'} onClickButton={onClickGoBackButton} style={{ color: 'brown' }}></LottoButton>
      </Flex>
    </Flex>
  );
};

export default LottoGeneratorContainer;
