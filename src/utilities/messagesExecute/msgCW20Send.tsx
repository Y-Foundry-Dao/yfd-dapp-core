const msgCW20Send = (
  encodedMessage: any,
  amountConverted: number,
  contract: string
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
