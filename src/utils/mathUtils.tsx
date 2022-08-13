export const generateRandomNumber = (start: number, end: number) => {
  return Math.floor(Math.random() * end) + start;
};

export const createRandomNumbers = (lengthOfArray: number) => {
  const numberList = Array.from({ length: 1 }, () => {
    const numbers = new Set();

    while (numbers.size < lengthOfArray) {
      numbers.add(generateRandomNumber(1, 9));
    }

    return numbers;
  });

  return numberList[0];
};
