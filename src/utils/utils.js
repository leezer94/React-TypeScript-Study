export const inputValidation = (input, sum, type) => {
  const inputValue = input.value;

  let isValid = false;

  if (!isNaN(inputValue) && sum === type(inputValue)) {
    isValid = true;
  }

  return isValid;
};

export const removeClassList = (element, property) => {
  element.classList.remove(property);
};

export const addClassList = (element, property) => {
  element.classList.add(property);
};

export const generateRandomNumber = (range) => {
  return Math.floor(Math.random() * range) + 1;
};

export const getRightEqualSignLetter = (number) => {
  const equalSigns = ['는', '은'];
  const neunNums = [2, 4, 5, 9];

  return neunNums.includes(number) ? equalSigns[0] : equalSigns[1];
};

export const clearInputValue = (...inputs) => {
  inputs.map((input) => (input.value = ''));
};
