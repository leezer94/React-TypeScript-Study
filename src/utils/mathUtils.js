export const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
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

  return numberList[0];
};
