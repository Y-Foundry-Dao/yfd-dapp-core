const msgPayDeveloper = (amount: number) => {
  return {
    pay_developer: {
      amount: String(amount)
    }
  };
};

export default msgPayDeveloper;
