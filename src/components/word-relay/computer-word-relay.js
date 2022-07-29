import React from 'react';

class ComputerWordRelay extends React.Component {
  render() {
    return (
      <div className='computer_relay_main'>
        <div className='key-word'></div>
        <input type='text' ref={(ref) => (this.computerRelayInput = ref)} autoComplete='off'></input>
        <div className='time-zone'></div>
        <div className='point'>
          <span>점수 :</span>
          <span ref={(ref) => (this.pointSpan = ref)}></span>
        </div>
      </div>
    );
  }
}

export default ComputerWordRelay;
