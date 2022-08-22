import React, { useCallback, useRef, useState } from 'react';
import { 한글_정규표현식 } from '../../common/regex';
import { clearInputValue, isValidInputWord } from '../../utils';
import { fetch우리말api } from '../../common/api';
import { CLASSNAME, COLOR, DEFAULT, ERROR_MESSAGE } from '../../common/constants/constants';
import { Button, Input, Form, P } from '../../components';

type setState = any;

const CurrentGame = () => {
  const [state, setState] = useState<setState>({ prevWord: undefined, currentWord: DEFAULT.GIVEN_WORD, definition: undefined, loading: false });

  const wordInput = useRef<HTMLInputElement | any>(null);
  const errorMessage = useRef<HTMLParagraphElement>(null);
  const wordRelayForm = useRef<HTMLFormElement>(null);

  const handleErrorMessage = (word: string, currentWord: string) => {
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

  // const updateErrorMessage = (message) => {
  //   errorMessage.current.textContent = message;
  // };

  const handleSubmitButton = async (word: any) => {
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

  useCallback(handleSubmitButton, [state]);

  const onClickSubmitButton = (currentWord: string) => {
    const errorMessageHandler: string | undefined | null = handleErrorMessage(wordInput.current.value, currentWord);

    if (isValidInputWord(errorMessageHandler)) {
      handleSubmitButton(wordInput.current.value);
    }

    clearInputValue(wordInput);
  };

  const handleKeyPressEvent = (e: any) => {
    return e.key === 'Enter' ? handleSubmitWord(e) : undefined;
  };

  const handleSubmitWord = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const { currentWord } = state;

    onClickSubmitButton(currentWord);
  };

  const { currentWord, definition, loading } = state;

  return (
    <Form ref={wordRelayForm} onSubmit={handleSubmitWord}>
      <P className='current-word' content={currentWord} style={undefined}></P>
      <Input ref={wordInput} type='text' onKeyPressEvent={handleKeyPressEvent} />
      <Button type={'submit'} content={'입력'} className={''} />
      <P className={loading ? undefined : CLASSNAME.HIDE} content={'사전 검색중...'} style={undefined}></P>
      <P className={loading ? CLASSNAME.HIDE : undefined} content={definition ? definition : ERROR_MESSAGE.EMPTY_INPUT} style={undefined}></P>
      <P style={{ color: COLOR.RED }} ref={errorMessage} content={undefined} className={undefined}></P>
    </Form>
  );
};

export default CurrentGame;
