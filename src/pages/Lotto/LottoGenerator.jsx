import React, { useEffect, useState } from 'react';
import { Flex, P, StyledButton } from '../../components';

const LottoGeneratorContainer = (props) => {
  const { onClickGoBackButton, createLottoNumbers } = props;

  const [lottoNumbers, setLottoNumbers] = useState(createLottoNumbers);
  const [winningNumbers, setWinningNumbers] = useState([]);

  useEffect(() => {
    lottoNumbers.map((lottoNumber, i) => (lottoNumbers[i] = setTimeout(() => setWinningNumbers((prev) => [...prev, lottoNumber]), (i + 1) * 1000)));

    return () => lottoNumbers.map((item) => clearTimeout(item));
  }, [lottoNumbers]);

  const createLottoElement = () =>
    winningNumbers.map((el, i) => {
      if (String(el).length === 1) el = '0' + String(el);

      if (i === 6) {
        return (
          <Flex key={i} flexDirection='row'>
            <P content={'보너스'} style={{ paddingRight: 30, color: 'red' }} />
            <P content={el} style={{ marginRight: 20, padding: 20, border: '1px solid black', borderRadius: 50 }} />
          </Flex>
        );
      }
      return <P key={i} content={el} style={{ marginRight: 20, padding: 20, border: '1px solid black', borderRadius: 50 }} />;
    });

  return (
    <Flex flexDirection='column'>
      <div>
        <p>로또 당첨번호</p>
        <Flex>{createLottoElement()}</Flex>
      </div>
      <Flex>
        <StyledButton content={'처음으로 돌아가기'} onClickButton={onClickGoBackButton} style={{ color: 'brown' }}></StyledButton>
      </Flex>
    </Flex>
  );
};

export default LottoGeneratorContainer;
