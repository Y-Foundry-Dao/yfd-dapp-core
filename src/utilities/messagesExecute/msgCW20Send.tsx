const msgCW20Send = (
  contract: string,
  encodedMessage: any,
  amountConverted: number
) => {
  return {
    send: {
      msg: encodedMessage,
      amount: String(amountConverted),
      contract: contract
    }
  };
};

export default msgCW20Send;
