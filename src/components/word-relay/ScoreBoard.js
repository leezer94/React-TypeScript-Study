import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { score } = this.props;

    return (
      <div className='score_board_main'>
        <div className='key-word'></div>
        <div className='time-zone'></div>
        <div className='point'>
          {/* <span>점수 : {score}</span> */}
          <span ref={(ref) => (this.pointSpan = ref)}></span>
        </div>
      </div>
    );
  }
}

export default ScoreBoard;
