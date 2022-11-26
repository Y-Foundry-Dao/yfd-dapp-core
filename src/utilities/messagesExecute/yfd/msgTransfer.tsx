const msgTransfer = (
  recipientAddress: string,
  amountConverted: number
) => {
  return {
    transfer: {
      recipient: recipientAddress,
      amount: String(amountConverted),
    }
  };
};

export default msgTransfer;
