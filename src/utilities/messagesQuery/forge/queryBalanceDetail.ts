const queryBalanceDetail = (wallet: any) => {
  return {
    balance_detail: {
      address: `${wallet}`
    }
  };
};

export default queryBalanceDetail;
