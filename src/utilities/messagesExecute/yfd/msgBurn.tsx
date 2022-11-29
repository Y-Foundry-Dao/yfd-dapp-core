const msgBurn = (
  amountConverted: number
) => {
  return {
    burn: {
      amount: String(amountConverted)
    }
  };
};

export default msgBurn;
