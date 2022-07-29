import React from 'react';
import { fetch우리말api } from '../../common/api.js';
import { 한글_정규표현식 } from '../../common/regex.js';

class Word_relay extends React.Component {
  state = {
    prevWord: '',
    currentWord: '곰자리',
    definition: '',
  };

  handleErrorMessage(word, currentWord) {
    if ((word.length > 3 || word.length < 3) && 한글_정규표현식.test(word)) {
      return '세글자만 입력이 가능합니다.';
    } else if (!한글_정규표현식.test(word)) {
      return '한글만 입력이 가능합니다.';
    } else if (currentWord.at(-1) !== word[0]) {
      return `단어의 마지막 글자와 ${'\t'}입력단어의 첫번째 단어가 일치해야 합니다.`;
    } else {
      return undefined;
    }
  }

  updateErrorMessage(message) {
    this.errorMessage.textContent = message;
  }

  isValidInputWord(errorMessage) {
    let isValid = false;

    if (!errorMessage) {
      isValid = true;
    }

    return isValid;
  }

  async handleSubmitButton(word) {
    let { prevWord, currentWord, definition } = this.state;

    prevWord = currentWord;
    definition = await fetch우리말api(word);
    currentWord = word;

    console.log(definition);

    this.setState({
      ...this.state,
      prevWord,
      currentWord,
      definition,
    });
  }

  render() {
    const { currentWord, definition } = this.state;

    return (
      <div className='word_relay-container'>
        <p className='curernt-word'>{currentWord}</p>
        <input ref={(ref) => (this.wordInput = ref)} type='text'></input>
        <button
          onClick={() => {
            const errorMessageHandler = this.handleErrorMessage(this.wordInput.value, currentWord);

            this.updateErrorMessage(errorMessageHandler);

            if (this.isValidInputWord(errorMessageHandler)) {
              this.handleSubmitButton(this.wordInput.value);
            }
          }}
          type='submit'
        >
          입력
        </button>
        <p className='word_definition'>{definition ? definition : '결과가 없습니다'}</p>
        <p style={{ color: 'red' }} ref={(ref) => (this.errorMessage = ref)}></p>
      </div>
    );
  }
}

export default Word_relay;
