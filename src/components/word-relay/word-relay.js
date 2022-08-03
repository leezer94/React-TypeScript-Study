import React from 'react';
import CurrentGame from './currentGame';
import ScoreBoard from './ScoreBoard';

class Word_relay extends React.Component {
  state = {
    score: 0,
  };

  render() {
    const { score } = this.state;
    const { currentPage } = this.props;

    let current;

    if (currentPage === '게임으로 돌아가기') {
      current = <ScoreBoard score={score} />;
    } else if (currentPage === '점수확인하기') {
      current = <CurrentGame score={score} />;
    }

    return <div>{current}</div>;
  }
}

export default Word_relay;
