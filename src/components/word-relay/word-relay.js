import React from 'react';
import { fetch우리말api } from '../../common/api.js';
import { COLOR, DEFAULT, ERROR_MESSAGE } from '../../common/constants/constants.js';
import { 한글_정규표현식 } from '../../common/regex.js';
import { addClassList, clearInputValue } from '../../utils/utils.js';
import { isValidInputWord } from '../../utils/validator.js';
class Word_relay extends React.Component {
  state = {
    prevWord: '',
    currentWord: DEFAULT.GIVEN_WORD,
    definition: '',
    loading: false,
  };

  handleErrorMessage(word, currentWord) {
    if ((word.length > 3 || word.length < 3) && 한글_정규표현식.test(word)) {
      return ERROR_MESSAGE.NOT_THREE_WORD;
    } else if (!한글_정규표현식.test(word)) {
      return ERROR_MESSAGE.NOT_KOREAN;
    } else if (currentWord.at(-1) !== word[0]) {
      return ERROR_MESSAGE.NOT_CORRESPONDING_LETTER;
    } else {
      return undefined;
    }
  }

  updateErrorMessage(message) {
    this.errorMessage.textContent = message;
  }

  async handleSubmitButton(word) {
    let { currentWord } = this.state;

    this.setState({
      loading: true,
    });

    if (await fetch우리말api(word)) {
      // 사전에 있는 단어일 경우에만 진행가능하게 ??
      // 로딩상태 비동기적 업데이트 ??
      setTimeout(async () => {
        this.setState({
          ...this.state,
          prevWord: currentWord,
          currentWord: word,
          definition: await fetch우리말api(word),
          loading: false,
        });
      });
    } else {
      setTimeout(async () => {
        this.setState({
          ...this.state,
          prevWord: currentWord,
          currentWord: currentWord,
          definition: '',
          loading: false,
        });
      });
    }
  }
  onClickEvent(currentWord) {
    const errorMessageHandler = this.handleErrorMessage(this.wordInput.value, currentWord);

    this.updateErrorMessage(errorMessageHandler);

    if (isValidInputWord(errorMessageHandler)) {
      this.handleSubmitButton(this.wordInput.value);
    }

    clearInputValue(this.wordInput);
  }

  render() {
    const { currentWord, definition, loading } = this.state;

    return (
      <div className='word_relay-container'>
        <p className='current-word'>{currentWord}</p>
        <input ref={(ref) => (this.wordInput = ref)} type='text' onKeyPress={({ key }) => (key === 'Enter' ? this.onClickEvent(currentWord) : '')}></input>
        <button onClick={() => this.onClickEvent(currentWord)} type='submit'>
          입력
        </button>
        <p className={loading ? '' : 'hide'}>사전 검색중...</p>
        <p className={loading ? 'hide' : ''}>{definition ? definition : ERROR_MESSAGE.EMPTY_INPUT}</p>
        <p style={{ color: COLOR.RED }} ref={(ref) => (this.errorMessage = ref)}></p>
      </div>
    );
  }
}

export default Word_relay;
