const msgPositionBorrow = (
  contract: string,
  position: string,
  amountInCoin: number
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
