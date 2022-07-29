export const isValidInputWord = (errorMessage) => {
  let isValid = false;

  if (!errorMessage) {
    isValid = true;
  }

  return isValid;
};
