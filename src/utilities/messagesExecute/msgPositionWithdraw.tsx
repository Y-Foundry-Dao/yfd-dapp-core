const msgPositionWithdraw = (
  contract: string,
  position: string,
  amount: number
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
