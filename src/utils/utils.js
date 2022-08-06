export const inputValidation = (input, sum, type) => {
  // 클래스형 컴포넌트용
  // const inputValue = input.value;

  const inputValue = input.current.value;

  let isValid = false;

  if (!isNaN(inputValue) && sum === type(inputValue)) {
    isValid = true;
  }

  return isValid;
};

export const removeClassList = (element, property) => {
  // 클래스형 컴포넌트용
  // element.classList.remove(property);

  console.log(element.current.classList);

  element.current.classList.remove(property);
};

export const addClassList = (element, property) => {
  // 클래스형 컴포넌트용
  // element.classList.add(property);

  console.log(element.current);

  element.current.classList.add(property);
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
