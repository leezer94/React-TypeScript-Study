import React from 'react';
import { P } from '..';

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
      <P title={`${index + 1}차 시도 : ${tryLog[index]}`} className={''} style={undefined} />
      <P title={`strikeCount : ${strikeCount}`} className={''} style={undefined} />
      <P title={`ballCount : ${ballCount}`} className={''} style={undefined} />
    </div>
  );
};

export default ResultTemplate;
