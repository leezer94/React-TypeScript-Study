import React from 'react';
import { CLASSNAME, COLOR } from '../../common/constants/constants.js';
import {
  inputValidation,
  removeClassList,
  addClassList,
  generateRandomNumber,
  getRightEqualSignLetter,
  clearInputValue,
  createEmptyArray,
} from '../../utils/utils.js';
import DigitButton from '../@commons/Button/DigitButton';

class Multiplication_table extends React.Component {
  state = {
    firstNumber: 9,
    secondNumber: 2,
    sum: 9 * 2,
    evaluation: true,
  };

  updateStateNumbers() {
    let { firstNumber, secondNumber, sum } = this.state;

    firstNumber = generateRandomNumber(1, 9);
    secondNumber = generateRandomNumber(1, 9);
    sum = firstNumber * secondNumber;

    this.setState({
      ...this.state,
      firstNumber,
      secondNumber,
      sum,
      evaluation: true,
    });
  }

  handleNotANumberMessage(input, target) {
    const isNumberTypeInputValue = isNaN(input.value);

    return isNumberTypeInputValue ? removeClassList(target, CLASSNAME.HIDE) : addClassList(target, CLASSNAME.HIDE);
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
    const templates = createEmptyArray(9);

    templates.map((el, i) => {
      templates[i] = <DigitButton key={i} digit={i + 1} updateFirstNumber={this.handleFirstNumber.bind(this)} />;
    });

    return templates;
  }

  render() {
    const { firstNumber, secondNumber, sum, evaluation } = this.state;

    return (
      <div className='multiplication_table-container'>
        <div className='number-button'>
          <p>구구단 몇 단 ?</p>
          {this.buttonTemplates()}
        </div>
        <p>{`${firstNumber} 곱하기 ${secondNumber} ${getRightEqualSignLetter(secondNumber)}?`}</p>
        <input ref={(ref) => (this.multiplicationInput = ref)} type='text'></input>
        <button
          type='button'
          onClick={() => {
            this.handleNotANumberMessage(this.multiplicationInput, this.notANumberMessage);
            inputValidation(this.multiplicationInput, sum, Number) ? this.updateStateNumbers() : this.setState({ ...this.state, evaluation: false });
            clearInputValue(this.multiplicationInput);
          }}
        >
          입력
        </button>
        <p className={!evaluation ? '' : CLASSNAME.HIDE} ref={(ref) => (this.incorrectMessage = ref)} style={{ color: COLOR.RED }}>
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
