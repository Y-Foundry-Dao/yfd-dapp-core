const msgCreateProposalTokenWhitelist = (
  tokenAddress: string,
  tokenName: string,
  assetType: string,
  isStable: boolean,
  oracleAddress: string,
  tokenToUsd: string,
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
              oracle_address: oracleAddress,
              token_to_usd: tokenToUsd
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
