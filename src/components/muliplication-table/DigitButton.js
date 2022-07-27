import React from 'react';

class DigitButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { digit, updateFirstNumber } = this.props;

    return <button onClick={() => updateFirstNumber(digit)}>{digit}</button>;
  }
}

export default DigitButton;
