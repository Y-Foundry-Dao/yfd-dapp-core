const msgExecuteSend = (
  contract: string,
  encodedMessage: string,
  amount?: number
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
