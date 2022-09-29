const msgStakeYFD = (
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

export default msgStakeYFD;
