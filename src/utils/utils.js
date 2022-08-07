export const inputValidation = (input, sum, type) => {
  const inputValue = input.current.value;

  let isValid = false;

  if (!isNaN(inputValue) && sum === type(inputValue)) {
    isValid = true;
  }

  return isValid;
};

export const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

export const getRightEqualSignLetter = (number) => {
  const equalSigns = ['는', '은'];
  const neunNums = [2, 4, 5, 9];

  return neunNums.includes(number) ? equalSigns[0] : equalSigns[1];
};

export const clearInputValue = (...inputs) => {
  inputs.map((input) => (input.current.value = ''));
};

export const createEmptyArray = (length) => {
  return Array.from({ length: length }, (v, i) => i++);
};

export const isValidBaseballInput = (currentInput) => {
  const inputValue = currentInput.current.value;
  const inputValueArr = inputValue.split('').map(Number);

  const messageList = new Set();

  if (inputValueArr.length !== 4) {
    messageList.add('네자리 수를 입력해 주세요.');
  }
  if (new Set(inputValueArr).size !== 4) {
    messageList.add('중복되지 않는 네자리 수를 입력해 주세요.');
  }
  if (inputValueArr.includes(0)) {
    messageList.add('1 ~ 9 사이의 수만 입력이 가능합니다.');
  }
  if (inputValueArr.some(isNaN)) {
    messageList.add('숫자만 입력이 가능합니다.');
  }

  return messageList;
};

export const createRandomNumbers = () => {
  const baseballNumberLength = 4;

  const numberList = Array.from({ length: 1 }, () => {
    const numbers = new Set();

    while (numbers.size < baseballNumberLength) {
      numbers.add(generateRandomNumber(1, 9));
    }

    return numbers;
  });

  return numberList;
};

export const compareTwoArrays = (targetNumber, currentValue) => {
  let [strikeCount, ballCount] = Array.from({ length: 2 }, (num) => (num = 0));

  for (let i = 0; i < currentValue.length; i++) {
    if (targetNumber[i] === currentValue[i]) {
      strikeCount++;
    } else if (currentValue.includes(targetNumber[i])) {
      ballCount++;
    }
  }

  return [strikeCount, ballCount];
};
