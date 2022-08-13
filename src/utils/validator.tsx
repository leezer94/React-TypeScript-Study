export const isValidInputWord = (errorMessage: []) => {
  let isValid = false;

  if (!errorMessage) {
    isValid = true;
  }

  return isValid;
};

// here needs to be fixed
export const isValidNumberTypeInput = (input: any, sum: number, type: any) => {
  const inputValue = input.current.value;

  let isValid = false;

  if (!isNaN(inputValue) && sum === type(inputValue)) {
    isValid = true;
  }

  return isValid;
};

// here needs to be fixed
export const getErrorMessages = (input: any, tryLog: number[], lengthOfArray: number) => {
  const inputValue: any = input.current.value;
  const inputValueArr: number[] = inputValue.split('').map(Number);

  const messageList = new Set();

  if (inputValueArr.length !== lengthOfArray) {
    messageList.add(`${lengthOfArray}자리 수를 입력해 주세요.`);
  }

  if (inputValueArr.includes(0)) {
    messageList.add('1 ~ 9 사이의 수만 입력이 가능합니다.');
  }

  if (new Set(inputValueArr).size !== lengthOfArray && new Set(inputValueArr).size < lengthOfArray) {
    messageList.add('중복되지 않는 수를 입력해 주세요.');
  }

  if (inputValueArr.some(isNaN)) {
    messageList.add('숫자만 입력이 가능합니다.');
  }

  if (tryLog.includes(inputValue)) {
    messageList.add('이미 입력했던 숫자 입니다.');
  }

  return messageList;
};
