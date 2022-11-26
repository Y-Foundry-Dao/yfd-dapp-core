const msgExecuteSend = (
  contract: string,
  amount: number,
  encodedMessage: string
) => {
  return {
    send: {
      contract: contract,
      amount: String(amount),
      msg: encodedMessage
    }
  };
};

export default msgExecuteSend;
