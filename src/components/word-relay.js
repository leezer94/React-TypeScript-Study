import React from 'react';

class Word_relay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div className='word_relay-container'>
        <p>제시어</p>
        <input type='text'></input>
        <button type='submit'>입력</button>
        <p>틀렸습니다!</p>
      </div>
    );
  }
}

export default Word_relay;
