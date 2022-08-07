import { 한글_정규표현식 } from '../../common/regex.js';
import { clearInputValue } from '../../utils/utils.js';
import { isValidInputWord } from '../../utils/validator.js';
import { fetch우리말api } from '../../common/api.js';
import { CLASSNAME, COLOR, DEFAULT, ERROR_MESSAGE } from '../../common/constants/constants.js';
import { useRef, useState } from 'react';
import { Button, Input, Form } from '..';

const CurrentGame = () => {
  const [state, setState] = useState({ prevWord: undefined, currentWord: DEFAULT.GIVEN_WORD, definition: undefined, loading: false });

  const wordInput = useRef();
  const errorMessage = useRef();
  const wordRelayForm = useRef();

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
          definition: undefined,
          loading: false,
        });
      });
    }
  };
  const onClickSubmitButton = (currentWord) => {
    const errorMessageHandler = handleErrorMessage(wordInput.current.value, currentWord);

    updateErrorMessage(errorMessageHandler);

    if (isValidInputWord(errorMessageHandler)) {
      handleSubmitButton(wordInput.current.value);
    }

    clearInputValue(wordInput);
  };

  const handleKeyPressEvent = (e) => {
    return e.key === 'Enter' ? handleSubmitWord(e) : undefined;
  };

  const handleSubmitWord = (e) => {
    e.preventDefault();

    const { currentWord } = state;

    onClickSubmitButton(currentWord);
  };

  const { currentWord, definition, loading } = state;

  return (
    <Form ref={wordRelayForm} onSubmit={handleSubmitWord}>
      <p className='current-word'>{currentWord}</p>
      <Input ref={wordInput} type='text' onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} title={'입력'} />
      <p className={loading ? undefined : CLASSNAME.HIDE}>사전 검색중...</p>
      <p className={loading ? CLASSNAME.HIDE : undefined}>{definition ? definition : ERROR_MESSAGE.EMPTY_INPUT}</p>
      <p style={{ color: COLOR.RED }} ref={errorMessage}></p>
    </Form>
  );
};

export default CurrentGame;

// onClickEvent={() => handleClickButton(currentWord)}
