import React from 'react';

class ComputherVsButton extends React.Component {
  render() {
    const { value, onClickComputerGameButton } = this.props;
    return <button onClick={() => onClickComputerGameButton()}>{value}</button>;
  }
}

export default ComputherVsButton;
