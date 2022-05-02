const msgMirrorDepositEncode = (
  contract: string,
  position: string,
  amountConverted: number
) => {
  return `{
      "deposit": {
        "position_idx": "${position}",
        "collateral": {
          "amount": "${amountConverted}",
          "info": {
            "token": {
              "contract_addr": "${contract}"
            }
          }
        }
      }
    }`;
};

export default msgMirrorDepositEncode;
