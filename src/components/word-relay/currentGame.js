import { 한글_정규표현식 } from '../../common/regex.js';
import { clearInputValue } from '../../utils/utils.js';
import { isValidInputWord } from '../../utils/validator.js';
import { fetch우리말api } from '../../common/api.js';
import { CLASSNAME, COLOR, DEFAULT, ERROR_MESSAGE } from '../../common/constants/constants.js';
import { useRef, useState } from 'react';
import Button from '../@commons/Button/Button.js';
import Input from '../@commons/Input/Input.js';
import LoadingMessage from './LoadingMessage.js';
import ErrorMessage from './ErrorMessage.js';

const CurrentGame = () => {
  const [state, setState] = useState({ prevWord: '', currentWord: DEFAULT.GIVEN_WORD, definition: '', loading: false });

  const wordInput = useRef();
  const errorMessage = useRef();

  const handleErrorMessage = (word, currentWord) => {
    if ((word.length > 3 || word.length < 3) && 한글_정규표현식.test(word)) {
      return ERROR_MESSAGE.NOT_THREE_WORD;
    } else if (!한글_정규표현식.test(word)) {
      return ERROR_MESSAGE.NOT_KOREAN;
    } else if (currentWord.at(-1) !== word.at(0)) {
      return ERROR_MESSAGE.NOT_CORRESPONDING_LETTER;
    } else {
      return undefined;
    }
  };

  const updateErrorMessage = (message) => {
    errorMessage.current.textContent = message;
  };

  const handleSubmitButton = async (word) => {
    let { currentWord } = state;

    setState({
      loading: true,
    });

    if (await fetch우리말api(word)) {
      // 사전에 있는 단어일 경우에만 진행가능하게 ??
      // 로딩상태 비동기적 업데이트 ??
      // 사전에 있는 단어 맞출시에 10점 상승 못 맞추면 5점 삭감

      setTimeout(async () => {
        setState({
          ...state,
          prevWord: currentWord,
          currentWord: word,
          definition: await fetch우리말api(word),
          loading: false,
        });
      });
    } else {
      setTimeout(async () => {
        setState({
          ...state,
          prevWord: currentWord,
          definition: '',
          loading: false,
        });
      });
    }
  };
  const handleClickButton = (currentWord) => {
    const errorMessageHandler = handleErrorMessage(wordInput.current.value, currentWord);

    updateErrorMessage(errorMessageHandler);

    if (isValidInputWord(errorMessageHandler)) {
      handleSubmitButton(wordInput.current.value);
    }

    clearInputValue(wordInput);
  };

  const handleKeyPressEvent = ({ key }) => {
    return key === 'Enter' ? handleClickButton(currentWord) : undefined;
  };

  const { currentWord, definition, loading } = state;

  return (
    <div className='word_relay-container'>
      <p className='current-word'>{currentWord}</p>
      <Input ref={wordInput} type='text' onKeyPressEvent={handleKeyPressEvent} />
      <Button onClickEvent={() => handleClickButton(currentWord)} title={'입력'} />
      <p className={loading ? '' : 'hide'}>사전 검색중...</p>
      <p className={loading ? 'hide' : ''}>{definition ? definition : ERROR_MESSAGE.EMPTY_INPUT}</p>
      <p style={{ color: COLOR.RED }} ref={errorMessage}></p>
    </div>
  );
};

export default CurrentGame;
