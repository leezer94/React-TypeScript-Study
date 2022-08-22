export const getRightEqualSignLetter = (number: number) => {
  const equalSigns = ['는', '은'];
  const neunNums = [2, 4, 5, 9];

  return neunNums.includes(number) ? equalSigns[0] : equalSigns[1];
};

export const clearInputValue = (...inputs: any) => {
  inputs.map((input: any) => (input.current.value = ''));
};

export const createEmptyArray = (length: number) => {
  return Array.from({ length: length }, (v, i) => i++);
};

export const compareTwoArrays = (targetNumber: [], currentValue: string) => {
  // 스트링 mdn 찾아보기
  const targetNumberArray = Array.from(targetNumber);

  const currentValueArray = currentValue.split('').map(Number);

  let [strikeCount, ballCount] = Array.from({ length: 2 }, (num) => (num = 0));

  for (let i = 0; i < currentValueArray.length; i++) {
    if (targetNumberArray[i] === currentValueArray[i]) {
      strikeCount++;
    } else if (currentValueArray.includes(targetNumberArray[i])) {
      ballCount++;
    }
  }

  return [strikeCount, ballCount];
};

export const getUUID = () => {
  // UUID v4 generator in JavaScript (RFC4122 compliant)

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 3) | 8;

    return v.toString(16);
  });
};
