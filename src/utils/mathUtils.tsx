export const generateRandomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start;
};

export const createRandomNumbers = (lengthOfArray: number, start = 1, end = 9) => {
  const numberList = Array.from({ length: 1 }, () => {
    const numbers = new Set();

    while (numbers.size < lengthOfArray) {
      numbers.add(generateRandomNumber(start, end));
    }

    return numbers;
  });

  return numberList[0];
};
