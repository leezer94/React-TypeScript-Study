export const isValidInputWord = (errorMessage) => {
  let isValid = false;

  if (!errorMessage) {
    isValid = true;
  }

  return isValid;
};

export const isValidNumberTypeInput = (input, sum, type) => {
  const inputValue = input.current.value;

  let isValid = false;

  if (!isNaN(inputValue) && sum === type(inputValue)) {
    isValid = true;
  }

  return isValid;
};

// getErrorMessages
export const getErrorMessages = (input) => {
  const inputValue = input.current.value;
  const inputValueArr = inputValue.split('').map(Number);

  const messageList = new Set();

  if (inputValueArr.length !== 4) {
    messageList.add('네자리 수를 입력해 주세요.');
  }

  if (inputValueArr.includes(0)) {
    messageList.add('1 ~ 9 사이의 수만 입력이 가능합니다.');
  }

  if (new Set(inputValueArr).size !== 4 && new Set(inputValueArr).size < 4) {
    messageList.add('중복되지 않는 수를 입력해 주세요.');
  }

  if (inputValueArr.some(isNaN)) {
    messageList.add('숫자만 입력이 가능합니다.');
  }

  return messageList;
};
