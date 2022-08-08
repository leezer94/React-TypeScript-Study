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

export const compareTwoArrays = (targetNumber, currentValue) => {
  // 스트링 mdn 찾아보기
  targetNumber = Array.from(targetNumber);
  currentValue = currentValue.split('').map(Number);

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
