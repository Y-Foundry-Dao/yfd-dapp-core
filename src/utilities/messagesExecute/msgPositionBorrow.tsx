const msgPositionBorrow = (
  contract: string,
  amountInCoin: number,
  position: string
) => {
  return {
    mirror: {
      mint: {
        asset: {
          info: {
            token: {
              contract_addr: contract
            }
          },
          amount: String(amountInCoin)
        },
        position_idx: position
      }
    }
  };
};

export default msgPositionBorrow;
