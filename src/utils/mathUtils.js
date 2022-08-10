export const generateRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

export const createRandomNumbers = (lengthOfArray) => {
  const numberList = Array.from({ length: 1 }, () => {
    const numbers = new Set();

    while (numbers.size < lengthOfArray) {
      numbers.add(generateRandomNumber(1, 9));
    }

    return numbers;
  });

  return numberList[0];
};
