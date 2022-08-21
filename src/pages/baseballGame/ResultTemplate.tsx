import React from 'react';
import { P } from '../../components';

type props = {
  index: number;
  strikeCount: number;
  ballCount: number;
  tryLog: number[];
};

const ResultTemplate = (props: props) => {
  const { index, strikeCount, ballCount, tryLog } = props;

  const styleObj: object = {
    textAlign: 'center',
    borderBottom: '1px solid gray',
  };

  return (
    <div style={styleObj}>
      <P content={`${index + 1}차 시도 : ${tryLog[index]}`} className={''} style={undefined} />
      <P content={`strikeCount : ${strikeCount}`} className={''} style={undefined} />
      <P content={`ballCount : ${ballCount}`} className={''} style={undefined} />
    </div>
  );
};

export default ResultTemplate;
