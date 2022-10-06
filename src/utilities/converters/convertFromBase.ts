const convertFromBase = (amountToConvert: number) => {
  return amountToConvert * Math.pow(10, -6);
};

export default convertFromBase;
