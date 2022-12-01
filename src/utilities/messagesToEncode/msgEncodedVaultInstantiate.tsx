import { YFD_TEST } from 'utilities/variables/variables';

const msgVaultInstantiate = (
  claimContract: string,
  vaultProposalIndex: string
) => {
  return `{
    claim_contract: "${claimContract}",
    proposal_id: "${vaultProposalIndex}",
    fund_addr: ${YFD_TEST},
  }`;
};

export default msgVaultInstantiate;
