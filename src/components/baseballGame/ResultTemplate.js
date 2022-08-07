import React from 'react';
import uuid from 'react-uuid';
import { P } from '../@commons/P/P';

const ResultTemplate = (props) => {
  const { index, strikeCount, ballCount, tryLog } = props;
  const styleObj = {
    textAlign: 'center',
    borderBottom: '1px solid gray',
  };

  return (
    <div style={styleObj}>
      <P title={`${index + 1}차 시도 : ${tryLog[index]}`} />
      <P title={`strikeCount : ${strikeCount}`} />
      <P title={`ballCount : ${ballCount}`} />
    </div>
  );
};

export default ResultTemplate;
