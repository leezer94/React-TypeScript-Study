import React from 'react';
import { CLASSNAME, COLOR } from '../../common/constants/constants.js';
import { inputValidation, removeClassList, addClassList, generateRandomNumber, getRightEqualSignLetter, clearInputValue } from '../../utils/utils.js';
import DigitButton from './DigitButton.js';

class Multiplication_table extends React.Component {
  state = {
    firstNumber: 9,
    secondNumber: 2,
    multiple: 9 * 2,
    evalutaion: true,
  };

  updateStateNumbers() {
    let { firstNumber, secondNumber, multiple } = this.state;

    firstNumber = generateRandomNumber(9);
    secondNumber = generateRandomNumber(9);
    multiple = firstNumber * secondNumber;

    this.setState({
      ...this.state,
      firstNumber,
      secondNumber,
      multiple,
      evalutaion: true,
    });
  }

  handleNotANumberMessage(input, target) {
    const isNumberTypeInputValue = isNaN(input.value);

    return isNumberTypeInputValue ? removeClassList(target, CLASSNAME.HIDE) : addClassList(target, CLASSNAME.HIDE);
  }

  handleFirstNumber(digit) {
    let { firstNumber, secondNumber, multiple } = this.state;

    firstNumber = Number(digit);
    multiple = firstNumber * secondNumber;

    this.setState({
      ...this.state,
      firstNumber,
      secondNumber,
      multiple,
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
    const { firstNumber, secondNumber, multiple, evalutaion } = this.state;

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
            inputValidation(this.muliplicationInput, multiple, Number) ? this.updateStateNumbers() : this.setState({ ...this.state, evalutaion: false });
            clearInputValue(this.muliplicationInput);
          }}
        >
          입력
        </button>
        <p className={!evalutaion ? '' : CLASSNAME.HIDE} ref={(ref) => (this.incorrectMessage = ref)} style={{ color: COLOR.RED }}>
          정답이 아닙니다.
        </p>
        <p
          className={CLASSNAME.HIDE}
          ref={(ref) => {
            this.notANumberMessage = ref;
          }}
          style={{ color: COLOR.RED }}
        >
          숫자만 입력이 가능합니다.
        </p>
      </div>
    );
  }
}

export default Multiplication_table;
