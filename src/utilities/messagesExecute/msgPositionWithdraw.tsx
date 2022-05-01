const msgPositionWithdraw = (
  contract: string,
  amount: number,
  position: string
) => {
  return {
    mirror: {
      withdraw: {
        collateral: {
          info: {
            token: {
              contract_addr: contract
            }
          },
          amount: String(amount)
        },
        position_idx: position
      }
    }
  };
};

export default msgPositionWithdraw;
