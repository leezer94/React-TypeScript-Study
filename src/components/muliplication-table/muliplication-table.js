import React from 'react';
import { inputValidation, removeClassList, addClassList, generateRandomNumber, getRightEqualSignLetter, clearInputValue } from '../../utils/utils.js';
import DigitButton from './DigitButton.js';

class Multiplication_table extends React.Component {
  state = {
    firstNumber: 9,
    secondNumber: 2,
    sum: 9 * 2,
    evalutaion: true,
  };

  updateStateNumbers() {
    let { firstNumber, secondNumber, sum, evalutaion } = this.state;

    firstNumber = generateRandomNumber(9);
    secondNumber = generateRandomNumber(9);
    sum = firstNumber * secondNumber;
    evalutaion = true;

    this.setState({
      ...this.state,
      firstNumber,
      secondNumber,
      sum,
      evalutaion,
    });
  }

  handleNotANumberMessage(input, target) {
    const isNumberTypeInputValue = isNaN(input.value);

    return isNumberTypeInputValue ? removeClassList(target, 'hide') : addClassList(target, 'hide');
  }

  handleFirstNumber(digit) {
    let { firstNumber, secondNumber, sum } = this.state;

    firstNumber = Number(digit);
    sum = firstNumber * secondNumber;

    this.setState({
      ...this.state,
      firstNumber,
      secondNumber,
      sum,
    });
  }

  buttonTemplates() {
    const templates = new Array(9).fill('');

    templates.map((el, i) => {
      templates[i] = <DigitButton key={i} digit={i + 1} updateFirstNumber={this.handleFirstNumber.bind(this)} />;
    });

    return templates;
  }

  render() {
    const { firstNumber, secondNumber, sum, evalutaion } = this.state;

    return (
      <div className='multiplication_table-container'>
        <div className='number-button'>
          <p>구구단 몇 단 ?</p>
          {this.buttonTemplates()}
        </div>
        <p>{`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`}</p>
        <input ref={(ref) => (this.muliplicationInput = ref)} type='text'></input>
        <button
          type='button'
          onClick={() => {
            this.handleNotANumberMessage(this.muliplicationInput, this.notANumberMessage);
            inputValidation(this.muliplicationInput, sum, Number) ? this.updateStateNumbers() : this.setState({ ...this.state, evalutaion: false });
            clearInputValue(this.muliplicationInput);
          }}
        >
          입력
        </button>
        <p className={!evalutaion ? '' : 'hide'} ref={(ref) => (this.incorrectMessage = ref)} style={{ color: 'red' }}>
          정답이 아닙니다.
        </p>
        <p
          className='hide'
          ref={(ref) => {
            this.notANumberMessage = ref;
          }}
          style={{ color: 'red' }}
        >
          숫자만 입력이 가능합니다.
        </p>
      </div>
    );
  }
}

export default Multiplication_table;
