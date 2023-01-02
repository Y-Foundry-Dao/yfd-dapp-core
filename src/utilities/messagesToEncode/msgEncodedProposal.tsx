const msgEncodedProposal = (
  name: string,
  ticker: string,
  proposalUrl: string,
  tvlLimit: number,
  contact: string[],
  developer: string,
  developmentCost: number,
  fundingOnly: boolean,
  fundingDenomination: string,
  nftQuantity: number,
  statementOfWork: string,
  numberOfPayments: number,
  paymentFrequency: number,
  github: string,
  selfVouchedInformation: string
) => {
  return `{
  "create_vault_proposal": {
    "msg": {
      "proposal_info": {
        "name": "${name}",
        "ticker": "${ticker}",
        "proposal_url": "${proposalUrl}",
        "tvl_limit": "${tvlLimit}",
        "contact": ["${contact}"],
        "developer": "${developer}",
        "development_cost": "${developmentCost}",
        "funding_only": ${fundingOnly},
        "funding_denomination": "${fundingDenomination}",
        "nft_quantity": ${nftQuantity},
        "statement_of_work": "${statementOfWork}",
        "num_payments": ${numberOfPayments},
        "payment_frequency": ${paymentFrequency},
        "github": "${github}",
        "self_vouched_information": "${selfVouchedInformation}"
      }
    }
  }
}`;
};

export default msgEncodedProposal;
