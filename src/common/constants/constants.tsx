export const CLASSNAME = Object.freeze({
  HIDE: 'hide',
});

export const COLOR = Object.freeze({
  RED: 'red',
});

export const ERROR_MESSAGE = Object.freeze({
  NOT_THREE_WORD: '세글자만 입력이 가능합니다.',
  NOT_KOREAN: '한글만 입력이 가능합니다.',
  NOT_CORRESPONDING_LETTER: `단어의 마지막 글자와 ${'\t'}입력단어의 첫번째 단어가 일치해야 합니다.`,
  EMPTY_INPUT: '사전에 정의되지 않은 단어입니다.',
});

export const DEFAULT = Object.freeze({
  GIVEN_WORD: '곰자리',
});

export const RPSGAME = Object.freeze({
  USER_WIN: '유저 승리',
  COMPUTER_WIN: '컴퓨터 승리',
  TIE: '비겼습니다',
  ROCK: '바위',
  SCISSORS: '가위',
  PAPER: '보',
  THRESHOLD_POINT: 10,
  DELAY_100: 100,
  DELAY_500: 500,
  EMOJIS: { SCISSORS: '✌️', ROCK: '✊🏻', PAPER: '🖐🏿' },
});
