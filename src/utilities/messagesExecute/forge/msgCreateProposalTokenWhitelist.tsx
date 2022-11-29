const msgCreateProposalTokenWhitelist = (
  tokenAddress: string,
  tokenName: string,
  assetType: string,
  isStable: boolean,
  oracleAddress: string,
  isEmergency: boolean,
  justificationLink: string
) => {
  return {
    create_proposal: {
      proposal_type: {
        token_whitelist: {
          token: tokenAddress,
          change: {
            new: {
              name: tokenName,
              asset_type: assetType,
              stable: isStable,
              oracle_address: oracleAddress
            }
          }
        }
      },
      emergency: isEmergency,
      justification_link: justificationLink
    }
  };
};

export default msgCreateProposalTokenWhitelist;
